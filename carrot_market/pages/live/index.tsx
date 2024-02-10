import FloatingButton from "@/components/floatingButton";
import Layout from "@/components/layout";

export default function Live() {
    return (
        <Layout hasTabBar title="라이브">
            <div className="px-4 py-10 space-y-4 divide-y-2">
                {[1, 2, 3, 4, 5].map((_, i) => (
                    <div key={i} className="pt-4" px-4>
                        <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
                        <h3 className="mt-2 text-lg font-medium text-gray-700 ">
                            Let's try potatos!
                        </h3>
                    </div>
                ))}
                <FloatingButton href="/live/create">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                    </svg>
                </FloatingButton>
            </div>
        </Layout>
    );
}
