import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import Textarea from "@/components/textarea";
import useMutation from "@/libs/client/useMutation";
import type { NextPage } from "next";
import { FieldValues, useForm } from "react-hook-form";

interface IUploadProductsForm {
    name: string;
    price: number;
    description: string;
}

const Upload: NextPage = () => {
    const { register, handleSubmit, reset } = useForm<IUploadProductsForm>();
    const [uploadProduct, { data, loading }] = useMutation("/api/products");

    function onSubmit(data: FieldValues | IUploadProductsForm) {
        if (loading) return;
        uploadProduct(data);
    }

    return (
        <Layout canGoBack>
            <form
                className="px-4 py-16 space-y-5"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <label className="flex items-center justify-center w-full h-48 text-gray-600 border-2 border-gray-300 border-dashed rounded-md hover:text-orange-500 hover:border-orange-500">
                        <svg
                            className="w-12 h-12 cursor-pointer"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                        >
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <input className="hidden" type="file" />
                    </label>
                </div>

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
                    register={register("description", { required: true })}
                    placeholder=""
                    label="Description"
                />

                <Button name={loading ? "Loading..." : "Upload product"} />
            </form>
        </Layout>
    );
};

export default Upload;
