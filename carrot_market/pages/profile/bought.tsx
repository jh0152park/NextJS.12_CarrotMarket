import Layout from "@/components/layout";
import ProductList from "@/components/productList";

export default function Bought() {
    return (
        <Layout canGoBack title="구매내역">
            <div className="flex flex-col py-10 space-y-5">
                <ProductList kind="purchases" />
            </div>
        </Layout>
    );
}
