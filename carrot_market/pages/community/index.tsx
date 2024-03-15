import FloatingButton from "@/components/floatingButton";
import Layout from "@/components/layout";
import useCoords from "@/libs/client/useCoords";
import { Post, User } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import useSWR from "swr";
import client from "../../libs/server/client";

interface IExtendPost extends Post {
    user: User;
    _count: {
        wondering: number;
        answers: number;
    };
}

interface IPostsResponse {
    posts: IExtendPost[];
}

const Community: NextPage<IPostsResponse> = ({ posts }) => {
    // const { latitude, longitude } = useCoords();
    // const { data } = useSWR<IPostsResponse>(
    //     latitude && longitude
    //         ? `/api/posts?latitude=${latitude}&longitude=${longitude}`
    //         : null
    // );

    return (
        <Layout title="동네생활" hasTabBar>
            <div className="px-4 py-16 space-y-8">
                {posts?.map((post) => (
                    <Link
                        key={post.id}
                        href={`/community/${post.id}`}
                        legacyBehavior
                    >
                        <a className="flex flex-col items-start cursor-pointer">
                            <span className="flex items-center px-3 py-1 text-xs font-medium text-gray-800 bg-gray-100 rounded-full">
                                동네질문
                            </span>
                            <div className="mt-2 text-gary-700">
                                <span className="font-medium text-orange-500">
                                    Q.
                                </span>{" "}
                                {post.question}
                            </div>
                            <div className="flex items-center justify-between w-full mt-5 text-xs font-medium text-gary-500">
                                <span>{post.user.name}</span>
                                <span>{post.createdAt.toString()}</span>
                            </div>
                            <div className="flex w-full pt-3 mt-3 space-x-5 border-t border-b-[2px] text-gary-700">
                                <span className="flex items-center space-x-2 text-sm">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        ></path>
                                    </svg>
                                    <span>
                                        궁금해요 {post._count?.wondering}
                                    </span>
                                </span>
                                <span className="flex items-center space-x-2 text-sm">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                        ></path>
                                    </svg>
                                    <span>답변 {post._count?.answers}</span>
                                </span>
                            </div>
                        </a>
                    </Link>
                ))}
                <FloatingButton href="/community/write">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        ></path>
                    </svg>
                </FloatingButton>
            </div>
        </Layout>
    );
};

export async function getStaticProps() {
    const posts = await client.post.findMany({
        include: {
            user: true,
        },
    });

    return {
        props: {
            posts: JSON.parse(JSON.stringify(posts)),
        },
    };
}

export default Community;
