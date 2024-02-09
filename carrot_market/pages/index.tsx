import Layout from "@/components/layout";
import ProductSummary from "@/components/productSummary";

export default function Home() {
    return (
        <Layout title="홈" hasTabBar>
            <div className="flex flex-col py-10 space-y-5">
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
                    <ProductSummary
                        product="iPhone 20 Pro Max"
                        description="White"
                        price={200}
                        like={1}
                        chat={1}
                    />
                ))}
                <button className="fixed p-4 text-white transition-colors bg-orange-400 rounded-full shadow-xl cursor-pointer hover:bg-orange-500 bottom-24 right-5">
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
                </button>
            </div>
        </Layout>
    );
}
