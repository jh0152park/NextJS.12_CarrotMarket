import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import Textarea from "@/components/textarea";
import useMutation from "@/libs/client/useMutation";
import { Product } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface IUploadProductsForm {
    name: string;
    price: number;
    description: string;
    photo: FileList;
}

interface IUploadProductMutation {
    isSuccess: boolean;
    product: Product;
}

const Upload: NextPage = () => {
    const router = useRouter();
    const { register, handleSubmit, watch } = useForm<IUploadProductsForm>();
    const [uploadProduct, { data, loading }] =
        useMutation<IUploadProductMutation>("/api/products");

    const [productPreview, setProductPreview] = useState("");
    const productPhoto = watch("photo");

    async function onSubmit({
        name,
        price,
        description,
        photo,
    }: FieldValues | IUploadProductsForm) {
        if (loading) return;

        if (photo && photo.length > 0) {
            const { uploadURL } = await (await fetch(`/api/files`)).json();
            const form = new FormData();

            form.append("file", photo[0], name);
            const {
                result: { id },
            } = await (
                await fetch(uploadURL, {
                    method: "POST",
                    body: form,
                })
            ).json();
            uploadProduct({ name, price, description, photo, photoId: id });
        } else {
            uploadProduct({ name, price, description, photo });
        }
    }

    useEffect(() => {
        if (data?.isSuccess) {
            router.push(`/products/${data.product.id}`);
        }
    }, [data]);

    useEffect(() => {
        if (productPhoto && productPhoto.length > 0) {
            const file = productPhoto[0];
            setProductPreview(URL.createObjectURL(file));
        }
    }, [productPhoto]);

    return (
        <Layout canGoBack>
            <form
                className="px-4 py-16 space-y-5"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    {productPreview ? (
                        <img
                            src={productPreview}
                            className="w-full h-48 text-gray-600 rounded-md aspect-video"
                        />
                    ) : (
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

                            <input
                                {...register("photo")}
                                className="hidden"
                                type="file"
                                accept="image/*"
                            />
                        </label>
                    )}
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
