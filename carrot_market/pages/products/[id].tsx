import Button from "@/components/button";
import Layout from "@/components/layout";
import useMutation from "@/libs/client/useMutation";
import useUser from "@/libs/client/useUser";
import { cls } from "@/libs/client/utils";
import { Product } from "@prisma/client";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";

interface IProduct extends Product {
    user: {
        id: string | number;
        name: string;
        profileImage: string;
    };
}

interface IProductResponse {
    isSuccess: boolean;
    product: IProduct;
    relatedProduct: Product[];
    isLiked: boolean;
}

const ItemDetail: NextPage = () => {
    const router = useRouter();
    const { user, isLoading } = useUser();
    const { mutate } = useSWRConfig();
    const { data, mutate: boundMutate } = useSWR<IProductResponse>(
        router.query.id ? `/api/products/${router.query.id}` : null
    );
    const [toggleFavorite] = useMutation(
        `/api/products/${router.query.id}/favorite`
    );

    function onFavoriteClick() {
        if (!data) return;
        toggleFavorite({});
        boundMutate({ ...data, isLiked: !data.isLiked }, false);
    }

    return (
        <Layout canGoBack>
            <div className="px-4 py-10">
                <div>
                    <div className="relative pb-80">
                        <Image
                            layout="fill"
                            alt="productImage"
                            src={`https://imagedelivery.net/YgDzKoC5M4EUjo9dkUT0aQ/${data?.product.image}/public`}
                            className="bg-slate-300 object-cover"
                        />
                    </div>
                    <div className="flex items-center py-3 space-x-3 border-t border-b cursor-pointer">
                        <Image
                            width={48}
                            height={48}
                            alt="profilePhoto"
                            src={`https://imagedelivery.net/YgDzKoC5M4EUjo9dkUT0aQ/${data?.product.user.profileImage}/profileImage`}
                            className="w-12 h-12 rounded-full bg-slate-300"
                        />
                        <div>
                            <p className="text-sm font-medium text-gray-700">
                                {data?.product.user.name}
                            </p>
                            <Link
                                href={`/users/profiles/${data?.product.user.id}`}
                                legacyBehavior
                            >
                                <a className="text-xs font-medium text-gray-700">
                                    View profile &rarr;
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-3xl font-bold text-gray-900">
                            {data?.product?.name}
                        </h1>
                        <span className="mt-3 text-3xl text-gray-900">
                            {data?.product?.price}
                        </span>
                        <p className="my-6 text-base text-gary-700">
                            {data?.product?.description}
                        </p>
                        <div className="flex items-center justify-between space-x-2">
                            <Button name="Talk to seller" />
                            <button
                                onClick={onFavoriteClick}
                                className={cls(
                                    "flex items-center justify-center p-3  transition-all rounded-md",
                                    data?.isLiked
                                        ? "hover:bg-red-100 hover:text-red-500  text-red-500"
                                        : "hover:bg-gray-100 hover:text-gray-500  text-gray-400"
                                )}
                            >
                                {data?.isLiked ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-6 h-6 "
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="mt-5 text-2xl font-bold text-gray-900">
                        Similar items
                    </h2>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        {data?.relatedProduct.map((product) => (
                            <Link
                                href={`/products/${product.id}`}
                                legacyBehavior
                                key={product.id}
                            >
                                <a>
                                    <div className="w-full h-56 mb-4 bg-slate-300" />
                                    <h3 className="-mb-1 text-gray-700">
                                        {product.name}
                                    </h3>
                                    <span className="text-sm font-medium text-gary-900">
                                        {product.price}
                                    </span>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ItemDetail;
