import Input from "@/components/input";
import Layout from "@/components/layout";
import Message from "@/components/message";
import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
    return (
        <Layout canGoBack>
            <div className="px-4 py-10 space-y-4">
                {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
                    <>
                        <Message
                            message="Hi how much are you selling them for ?"
                            sent={false}
                        />
                        <Message message="I want ￦20,000" sent={true} />
                        <Message message="미쳤어" sent={false} />
                    </>
                ))}

                <div className="fixed inset-x-0 left-0 right-0 w-full max-w-md mx-auto bottom-2">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            className="w-full pr-12 border-gray-300 rounded-full shadow-sm focus:ring-orange-500 focus:out-line-none focus:border-orange-500"
                        />
                        <div className="absolute inset-y-0 right-0 flex py-2 pr-2">
                            <button className="flex items-center px-3 text-sm text-white bg-orange-500 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 hover:bg-orange-600">
                                &rarr;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ChatDetail;
