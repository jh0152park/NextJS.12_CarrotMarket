import Button from "@/components/button";
import Layout from "@/components/layout";
import Textarea from "@/components/textarea";
import useCoords from "@/libs/client/useCoords";
import useMutation from "@/libs/client/useMutation";
import { Post } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface IWriteForm {
    question: string;
}

interface IWriteResponse {
    isSuccess: boolean;
    post: Post;
}

export default function Write() {
    const router = useRouter();
    const { latitude, longitude } = useCoords();

    const [post, { loading, data }] = useMutation<IWriteResponse>("/api/posts");
    const { register, reset, handleSubmit } = useForm<IWriteForm>();

    function onSubmit(data: IWriteForm | FieldValues) {
        if (loading) return;

        post({
            ...data,
            latitude,
            longitude,
        });
        reset();
    }

    useEffect(() => {
        if (data && data.isSuccess) {
            router.push(`/community/${data.post.id}`);
        }
    }, [data, router]);

    return (
        <Layout canGoBack title="Write Post">
            <form className="px-4 py-10" onSubmit={handleSubmit(onSubmit)}>
                <Textarea
                    register={register("question", { required: true })}
                    label="Ask a question"
                    placeholder="Ask a question!"
                />
                <Button name={loading ? "Loading..." : "Submit"} />
            </form>
        </Layout>
    );
}
