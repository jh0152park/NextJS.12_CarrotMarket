import { NextPage } from "next";

const Post: NextPage = () => {
    return <h1>HI</h1>;
};

export function getStaticProps() {
    return {
        propos: {},
    };
}

export default Post;
