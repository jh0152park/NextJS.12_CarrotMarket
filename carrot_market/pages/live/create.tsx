import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import Textarea from "@/components/textarea";

export default function Create() {
    return (
        <Layout hasTabBar title="라이브">
            <div className="px-5 py-10 space-y-5">
                <Input name="name" label="Name" kind="text" />
                <Input name="price" label="Price" kind="price" />
                <div>
                    <label className="block mb-1 text-sm font-medium text-gary-700">
                        Description
                    </label>

                    <Textarea placeholder="" />
                </div>

                <Button name="Go Live" />
            </div>
        </Layout>
    );
}
