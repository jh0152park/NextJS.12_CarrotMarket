import matter from "gray-matter";
import Layout from "@/components/layout";
import { readFileSync, readdirSync } from "fs";
import { NextPage } from "next";

interface IPost {
    title: string;
    date: string;
    category: string;
}

const Blog: NextPage<{ posts: IPost[] }> = ({ posts }) => {
    return (
        <Layout title="Blog">
            <h1 className=" font-bold text-lg">Latest Posts</h1>
            {posts.map((post, index) => (
                <div key={index} className=" mb-5">
                    <span className=" text-lg text-red-500">{post.title}</span>
                    <div>
                        <span>
                            {post.date} / {post.category}
                        </span>
                    </div>
                </div>
            ))}
        </Layout>
    );
};

export async function getStaticProps() {
    const posts = readdirSync("./posts").map((file) => {
        const content = readFileSync(`./posts/${file}`, "utf-8");
        return matter(content).data;
    });
    return {
        props: { posts },
    };
}

export default Blog;
