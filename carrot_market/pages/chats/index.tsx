import Layout from "@/components/layout";

export default function Chats() {
    return (
        <Layout title="채팅" hasTabBar>
            <div className="py-10 divide-y-[1px]">
                {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
                    <div
                        key={i}
                        className="flex items-center px-4 py-3 space-x-3 cursor-pointer"
                    >
                        <div className="w-10 h-10 rounded-full bg-slate-300" />
                        <div>
                            <p className="text-gray-700 ">Steve Jebs</p>
                            <p className="text-sm text-gray-700">
                                See you tomorrow in the corner at 2pm!
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
}
