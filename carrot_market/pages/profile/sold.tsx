import Layout from "@/components/layout";
import ProductList from "@/components/productList";
import ProductSummary from "@/components/productSummary";

export default function Sold() {
    return (
        <Layout canGoBack title="판매내역">
            <div className="flex flex-col py-10 space-y-5">
                <ProductList kind="sales" />
            </div>
        </Layout>
    );
}
