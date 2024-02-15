import FloatingButton from "@/components/floatingButton";
import Layout from "@/components/layout";
import ProductSummary from "@/components/productSummary";
import useUser from "@/libs/client/useUser";
import Head from "next/head";

export default function Home() {
    const { user, isLoading } = useUser();

    return (
        <Layout title="홈" hasTabBar>
            <Head>
                <title>Home</title>
            </Head>
            <div className="flex flex-col py-10 space-y-5">
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
                    <ProductSummary
                        product="iPhone 20 Pro Max"
                        description="White"
                        price={200}
                        like={1}
                        message={1}
                        id={i}
                        key={i}
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
