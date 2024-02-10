import Button from "@/components/button";
import Layout from "@/components/layout";
import Textarea from "@/components/textarea";

export default function Write() {
    return (
        <Layout canGoBack>
            <form className="px-4 py-10">
                <Textarea placeholder="Ask a question!" />
                <Button name="Submit" />
            </form>
        </Layout>
    );
}
