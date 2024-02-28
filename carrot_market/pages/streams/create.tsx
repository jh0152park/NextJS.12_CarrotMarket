import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import Textarea from "@/components/textarea";
import useMutation from "@/libs/client/useMutation";
import { Stream } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface ICreateForm {
    name: string;
    price: number;
    description: string;
}

interface ICreateResponse {
    isSuccess: boolean;
    stream: Stream;
}

export default function Create() {
    const router = useRouter();
    const [createStream, { data, loading }] =
        useMutation<ICreateResponse>(`/api/streams`);
    const { register, handleSubmit } = useForm<ICreateForm>();

    function onSubmit(form: ICreateForm | FieldValues) {
        if (loading) return;
        createStream(form);
    }

    useEffect(() => {
        if (data && data.isSuccess) {
            router.push(`/streams/${data.stream.id}`);
        }
    }, [data, router]);

    return (
        <Layout hasTabBar title="라이브 생성">
            <form
                className="px-5 py-10 space-y-5"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                    register={register("name", { required: true })}
                    name="name"
                    label="Name"
                    kind="text"
                />
                <Input
                    register={register("price", { required: true })}
                    name="price"
                    label="Price"
                    kind="price"
                />
                <Textarea
                    label="Description"
                    register={register("description", { required: true })}
                    placeholder=""
                />

                <Button name={loading ? "Loading..." : "Go Live"} />
            </form>
        </Layout>
    );
}
