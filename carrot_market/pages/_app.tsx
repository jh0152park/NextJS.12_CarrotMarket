import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

function fetcher(url: string) {
    return fetch(url).then((response) => response.json());
}

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SWRConfig
            value={{
                fetcher: (url: string) =>
                    fetch(url).then((response) => response.json()),
            }}
        >
            <div className="w-full max-w-lg mx-auto">
                <Component {...pageProps} />
            </div>
        </SWRConfig>
    );
}
