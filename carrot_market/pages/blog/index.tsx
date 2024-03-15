import matter from "gray-matter";
import Layout from "@/components/layout";
import { readFileSync, readdirSync } from "fs";
import { NextPage } from "next";
import Link from "next/link";

interface IPost {
    title: string;
    date: string;
    category: string;
    slug: string;
}

const Blog: NextPage<{ posts: IPost[] }> = ({ posts }) => {
    return (
        <Layout title="Blog">
            <h1 className=" font-bold text-lg">Latest Posts</h1>
            {posts.map((post, index) => (
                <div key={index} className=" mb-5">
                    <Link href={`/blog/${post.slug}`} legacyBehavior>
                        <a>
                            <span className=" text-lg text-red-500">
                                {post.title}
                            </span>
                            <div>
                                <span>
                                    {post.date} / {post.category}
                                </span>
                            </div>
                        </a>
                    </Link>
                </div>
            ))}
        </Layout>
    );
};

export async function getStaticProps() {
    const posts = readdirSync("./posts").map((file) => {
        const content = readFileSync(`./posts/${file}`, "utf-8");
        const [slug, _] = file.split(".");
        return { ...matter(content).data, slug: slug };
    });
    return {
        props: { posts },
    };
}

export default Blog;
