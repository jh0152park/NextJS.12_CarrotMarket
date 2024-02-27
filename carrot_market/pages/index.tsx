import FloatingButton from "@/components/floatingButton";
import Layout from "@/components/layout";
import ProductSummary from "@/components/productSummary";
import useUser from "@/libs/client/useUser";
import { Product } from "@prisma/client";
import Head from "next/head";
import useSWR from "swr";

export interface IProduct extends Product {
    _count: {
        favorite: number;
        message: number;
    };
}

interface IProductResponse {
    isSuccess: boolean;
    products: IProduct[];
}

export default function Home() {
    const { user, isLoading } = useUser();
    const { data } = useSWR<IProductResponse>("/api/products");

    console.log(data);

    return (
        <Layout title="홈" hasTabBar>
            <Head>
                <title>Home</title>
            </Head>
            <div className="flex flex-col py-10 space-y-5">
                {data?.products?.map((product) => (
                    <ProductSummary
                        id={product.id}
                        key={product.id}
                        product={product.name}
                        description={product.description}
                        price={product.price}
                        like={product._count.favorite}
                        message={1}
                    />
                ))}
                <FloatingButton href="/products/upload">
                    <svg
                        className="w-6 h-6"
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
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                    </svg>
                </FloatingButton>
            </div>
        </Layout>
    );
}
