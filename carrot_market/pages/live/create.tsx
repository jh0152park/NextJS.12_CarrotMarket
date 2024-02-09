import Button from "@/components/button";
import Layout from "@/components/layout";

export default function Create() {
    return (
        <Layout hasTabBar title="라이브">
            <div className="px-5 py-10 space-y-5">
                <div>
                    <label
                        htmlFor="price"
                        className="block mb-1 text-sm font-medium text-gary-700"
                    >
                        Name
                    </label>
                    <div className="relative flex items-center rounded-md shadow-sm">
                        <input
                            id="price"
                            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none pl-7 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                            type="text"
                        />
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="price"
                        className="block mb-1 text-sm font-medium text-gary-700"
                    >
                        Price
                    </label>
                    <div className="relative flex items-center rounded-md shadow-sm">
                        <div className="absolute left-0 flex items-center justify-center pl-3 ">
                            <span className="text-sm text-gray-500 pointer-events-none ">
                                $
                            </span>
                        </div>
                        <input
                            id="price"
                            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none pl-7 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                            type="text"
                            placeholder="0.00"
                        />
                        <div className="absolute right-0 flex items-center pr-3 pointer-events-none">
                            <span className="text-gray-500">USD</span>
                        </div>
                    </div>
                </div>
                <div>
                    <label className="block mb-1 text-sm font-medium text-gary-700">
                        Description
                    </label>

                    <textarea
                        rows={4}
                        className="w-full mt-1 border-gray-300 rounded-md shadow-sm foucs:ring-2 focus:border-orange-500 focus:ring-orange-500"
                    />
                </div>

                <Button name="Go Live" />
            </div>
        </Layout>
    );
}
