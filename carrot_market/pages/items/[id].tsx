import Layout from "@/components/layout";
import type { NextPage } from "next";

const ItemDetail: NextPage = () => {
    return (
        <Layout canGoBack>
            <div className="px-4 py-10">
                <div>
                    <div className="h-96 bg-slate-300" />
                    <div className="flex items-center py-3 space-x-3 border-t border-b cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-slate-300" />
                        <div>
                            <p className="text-sm font-medium text-gray-700">
                                Steve Jebs
                            </p>
                            <p className="text-xs font-medium text-gray-700">
                                View profile &rarr;
                            </p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Galaxy S50
                        </h1>
                        <span className="mt-3 text-3xl text-gray-900">
                            $140
                        </span>
                        <p className="my-6 text-base text-gary-700">
                            My money&apos;s in that office, right? If she start
                            giving me some bullshit about it ain&apos;t there,
                            and we got to go someplace else and get it, I&apos;m
                            gonna shoot you in the head then and there. Then
                            I&apos;m gonna shoot that bitch in the kneecaps,
                            find out where my goddamn money is. She gonna tell
                            me too. Hey, look at me when I&apos;m talking to
                            you, motherfucker. You listen: we go in there, and
                            that ni**a Winston or anybody else is in there, you
                            the first motherfucker to get shot. You understand?
                        </p>
                        <div className="flex items-center justify-between space-x-2">
                            <button className="flex-1 py-3 font-medium text-white transition-all bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                                Talk to seller
                            </button>
                            <button className="flex items-center justify-center p-3 text-gray-400 transition-all rounded-md hover:bg-gray-100 hover:text-gray-500">
                                <svg
                                    className="w-6 h-6 "
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Similar items
                    </h2>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        {[1, 2, 3, 4, 5, 6].map((_, i) => (
                            <div key={i}>
                                <div className="w-full h-56 mb-4 bg-slate-300" />
                                <h3 className="-mb-1 text-gray-700">
                                    Galaxy S60
                                </h3>
                                <span className="text-sm font-medium text-gary-900">
                                    $6
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ItemDetail;
