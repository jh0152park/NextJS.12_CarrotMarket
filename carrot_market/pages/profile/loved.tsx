import Layout from "@/components/layout";
import ProductSummary from "@/components/productSummary";

export default function Love() {
    return (
        <Layout canGoBack>
            <div className="flex flex-col py-10 space-y-5">
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
                    <ProductSummary
                        product="iPhone 20 Pro Max"
                        description="White"
                        price={200}
                        like={99}
                        message={123}
                        id={i}
                        key={i}
                    />
                ))}
            </div>
        </Layout>
    );
}
