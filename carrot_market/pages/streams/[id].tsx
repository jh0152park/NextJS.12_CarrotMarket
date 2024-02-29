import Layout from "@/components/layout";
import Message from "@/components/message";
import useMutation from "@/libs/client/useMutation";
import { Stream } from "@prisma/client";
import { useRouter } from "next/router";
import { FieldValues, useForm } from "react-hook-form";
import useSWR from "swr";

interface IStreamResponse {
    isSuccess: boolean;
    stream: Stream;
}

interface IMessageForm {
    message: string;
}

export default function LiveDetail() {
    const router = useRouter();
    const { register, handleSubmit, reset } = useForm<IMessageForm>();

    const [sendMessage, { loading, data: sendMessageData }] = useMutation(
        `/api/streams/${router.query.id}/messages`
    );
    const { data } = useSWR<IStreamResponse>(
        router.query.id ? `/api/streams/${router.query.id}` : null
    );

    function onSubmit(form: IMessageForm | FieldValues) {
        if (loading) return;

        reset();
        sendMessage(form);
    }

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
                    {[...new Array(50)].map((_, i) => (
                        <>
                            <Message
                                message="Hi how much are you selling them for ?"
                                sent={false}
                            />
                            <Message message="I want ￦20,000" sent={true} />
                            <Message message="미쳤어" sent={false} />
                        </>
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
