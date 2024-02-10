import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";

export default function Edit() {
    return (
        <Layout canGoBack>
            <div className="px-4 py-10 space-y-4">
                <div className="flex items-center mb-5 space-x-3">
                    <div className="rounded-full w-14 h-14 bg-slate-500" />
                    <label
                        htmlFor="picture"
                        className="px-3 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md shadow-sm cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                        Change
                        <input
                            id="picture"
                            type="file"
                            className="hidden"
                            accept="image/*"
                        />
                    </label>
                </div>

                <Input
                    label="Email address"
                    name="input"
                    kind="email"
                    required
                />
                <Input
                    label="Phone number"
                    name="input"
                    kind="phone"
                    required
                />

                <Button name="Upload profile" />
            </div>
        </Layout>
    );
}
