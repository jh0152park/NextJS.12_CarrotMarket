import Button from "@/components/button";
import Layout from "@/components/layout";
import Textarea from "@/components/textarea";
import useMutation from "@/libs/client/useMutation";
import { cls } from "@/libs/client/utils";
import { Answer, Post, User } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import useSWR from "swr";

interface IAnswer extends Answer {
    user: User;
}

interface IPost extends Post {
    user: User;
    _count: {
        answers: number;
        wondering: number;
    };
    answers: IAnswer[];
}

interface IData {
    isSuccess: boolean;
    post: IPost;
    isWondering: boolean;
}

interface IAnswer {
    answer: string;
}

interface IAnswerResponse {
    isSuccess: boolean;
    answer: Answer;
}

const CommunityPostDetail: NextPage = () => {
    const router = useRouter();

    const { data, mutate } = useSWR<IData>(
        router.query.id ? `/api/posts/${router.query.id}` : null
    );

    const [wonder, { loading }] = useMutation(
        `/api/posts/${router.query.id}/wonder`
    );

    const [sendAnswer, { data: answerData, loading: answerLoading }] =
        useMutation<IAnswerResponse>(`/api/posts/${router.query.id}/answer`);

    const { register, reset, handleSubmit } = useForm<IAnswer>();

    function onWonderClick() {
        if (!data) return;

        mutate(
            {
                ...data,
                isWondering: !data.isWondering,
                post: {
                    ...data.post,
                    _count: {
                        ...data?.post._count,
                        wondering: data.isWondering
                            ? data?.post._count.wondering - 1
                            : data?.post._count.wondering + 1,
                    },
                },
            },
            false
        );
        if (!loading) {
            console.log("trigger wonder");
            wonder({});
        }
    }

    function onSubmit(data: IAnswer | FieldValues) {
        if (answerLoading) return;
        console.log(data);
        sendAnswer(data);
    }

    useEffect(() => {
        if (data && !data.isSuccess) {
            alert("Could not found post");
            router.push("/community");
        }
    }, [data]);

    useEffect(() => {
        if (answerData && answerData.isSuccess) {
            reset();
            console.log(answerData);
            mutate();
        }
    }, [answerData, reset, mutate]);

    return (
        <Layout canGoBack>
            <div>
                <span className="inline-flex items-center px-3 py-1 my-3 ml-4 text-xs font-medium text-gray-800 bg-gray-100 rounded-full">
                    동네질문
                </span>
                <div className="flex items-center px-4 py-3 mb-3 space-x-3  border-b cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-slate-300" />
                    <Link
                        href={`/users/profiles/${data?.post?.user.id}`}
                        legacyBehavior
                    >
                        <a>
                            <p className="text-sm font-medium text-gray-700">
                                {data?.post.user.name}
                            </p>
                            <p className="text-xs font-medium text-gray-700">
                                View profile &rarr;
                            </p>
                        </a>
                    </Link>
                </div>
                <div>
                    <div className="px-4 mt-2 text-gary-700">
                        <span className="font-medium text-orange-500">Q.</span>{" "}
                        {data?.post.question}
                    </div>

                    <div className="px-4 flex w-full pb-3 pt-3 mt-3 space-x-5 border-t border-b-[2px] text-gary-700">
                        <button
                            onClick={onWonderClick}
                            className={cls(
                                "flex items-center space-x-2 text-sm",
                                data?.isWondering
                                    ? "text-green-500 font-bold"
                                    : ""
                            )}
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            <span>궁금해요 {data?.post._count.wondering}</span>
                        </button>
                        <span className="flex items-center space-x-2 text-sm">
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                ></path>
                            </svg>
                            <span>답변 {data?.post._count.answers}</span>
                        </span>
                    </div>
                </div>

                <div className="px-4 mt-5 space-y-5">
                    {data?.post.answers.map((answer) => (
                        <div
                            className="flex items-start space-x-3"
                            key={answer.id}
                        >
                            <div className="w-8 h-8 rounded-full bg-slate-200" />
                            <div>
                                <span className="block text-sm font-medium text-gary-700">
                                    {answer.user.name}
                                </span>
                                <span className="block text-xs text-gray-500">
                                    {answer.createdAt?.toISOString()}
                                </span>
                                <p className="mt-2 text-gray-700">
                                    {answer.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <form className="px-4 mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <Textarea
                        register={register("answer", { required: true })}
                        label=""
                        placeholder="Answer"
                    />
                    <Button name={answerLoading ? "Loading" : "Reply"} />
                </form>
            </div>
        </Layout>
    );
};

export default CommunityPostDetail;
