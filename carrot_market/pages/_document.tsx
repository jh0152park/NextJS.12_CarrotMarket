import Document, { Head, Html, Main, NextScript } from "next/document";

class CustomDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="ko">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
