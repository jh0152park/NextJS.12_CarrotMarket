import Layout from "@/components/layout";
import ProductList from "@/components/productList";

export default function Love() {
    return (
        <Layout canGoBack title="관심목록">
            <div className="flex flex-col py-10 space-y-5">
                <ProductList kind="favorite" />
            </div>
        </Layout>
    );
}
