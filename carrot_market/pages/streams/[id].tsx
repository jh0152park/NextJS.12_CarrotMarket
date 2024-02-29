import Layout from "@/components/layout";
import Message from "@/components/message";
import useMutation from "@/libs/client/useMutation";
import useUser from "@/libs/client/useUser";
import { Stream } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import useSWR from "swr";

interface IStreamMessage {
    message: string;
    id: number;
    user: {
        id: number;
        profileImage?: string;
    };
}

interface IStreamWithMessage extends Stream {
    message: IStreamMessage[];
}

interface IStreamResponse {
    isSuccess: boolean;
    stream: IStreamWithMessage;
}

interface IMessageForm {
    message: string;
}

export default function LiveDetail() {
    const { user } = useUser();
    const router = useRouter();
    const { register, handleSubmit, reset } = useForm<IMessageForm>();

    const [sendMessage, { loading, data: sendMessageData }] = useMutation(
        `/api/streams/${router.query.id}/messages`
    );
    const { data, mutate } = useSWR<IStreamResponse>(
        router.query.id ? `/api/streams/${router.query.id}` : null,
        {
            refreshInterval: 1000,
        }
    );

    function onSubmit(form: IMessageForm | FieldValues) {
        if (loading) return;

        reset();
        mutate(
            (prev) =>
                prev &&
                ({
                    ...prev,
                    stream: {
                        ...prev.stream,
                        message: [
                            ...prev.stream.message,
                            {
                                id: Date.now(),
                                message: form.message,
                                user: {
                                    ...user,
                                },
                            },
                        ],
                    },
                } as any),
            false
        );
        // sendMessage(form);
    }

    // useEffect(() => {
    //     if (sendMessageData && sendMessageData.isSuccess) {
    //         mutate();
    //     }
    // }, [sendMessageData, mutate]);

    if (data && !data.isSuccess) {
        alert("Dose not exist stream");
        router.push("/");
    }

    return (
        <Layout canGoBack>
            <div className="px-4 py-10 space-y-4">
                <div className="pt-4">
                    <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
                    <h3 className="mt-2 text-2xl font-bold text-gray-900 ">
                        {data?.stream?.name}
                    </h3>
                    <h4 className="text-xl font-medium text-gray-700">
                        ₩{data?.stream?.price.toLocaleString()}
                    </h4>
                    <p className="my-6 text-base text-gary-700">
                        {data?.stream?.description}
                    </p>
                </div>

                <h4 className="mt-2 text-2xl font-bold text-gray-900 ">
                    Live Chat
                </h4>
                <div className="py-10 pb-10 h-[50vh] overflow-y-scroll space-y-4">
                    {data?.stream.message?.map((message) => (
                        <Message
                            key={message.id}
                            message={message.message}
                            sent={message.user.id === user?.id}
                        />
                    ))}
                </div>

                <div className="fixed inset-x-0 left-0 right-0 w-full max-w-md mx-auto bottom-2">
                    <form
                        className="relative flex items-center"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input
                            {...register("message", { required: true })}
                            type="text"
                            className="w-full pr-12 border-gray-300 rounded-full shadow-sm focus:ring-orange-500 focus:out-line-none focus:border-orange-500"
                        />
                        <div className="absolute inset-y-0 right-0 flex py-2 pr-2">
                            <button className="flex items-center px-3 text-sm text-white bg-orange-500 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 hover:bg-orange-600">
                                &rarr;
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
