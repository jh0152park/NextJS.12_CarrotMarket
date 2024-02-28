import { cls } from "@/libs/client/utils";
import Link from "next/link";
import { useRouter } from "next/router";

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
    canGoBack?: boolean;
    hasTabBar?: boolean;
}

export default function Layout({
    title,
    canGoBack,
    hasTabBar,
    children,
}: LayoutProps) {
    const router = useRouter();

    function onClick() {
        router.back();
    }

    return (
        <div>
            <div className="fixed top-0 flex items-center justify-center w-full h-12 max-w-xl px-10 text-lg font-medium text-gray-800 bg-white border-b">
                {canGoBack ? (
                    <button onClick={onClick} className="absolute left-4">
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
                                d="M15 19l-7-7 7-7"
                            ></path>
                        </svg>
                    </button>
                ) : null}
                {title ? (
                    <span className={cls(canGoBack ? "mx-auto" : "", "")}>
                        {title}
                    </span>
                ) : null}
            </div>
            <div className={cls("pt-12", hasTabBar ? "pb-16" : "")}>
                {children}
            </div>
            {hasTabBar ? (
                <nav className="fixed bottom-0 flex items-center justify-between w-full max-w-xl px-10 pt-3 pb-5 text-gray-800 bg-white border-t text-medium">
                    <Link href="/" legacyBehavior>
                        <a
                            className={cls(
                                "flex flex-col items-center space-y-2",
                                router.pathname === "/" ? "text-orange-500" : ""
                            )}
                        >
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
                                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                />
                            </svg>
                            <span>홈</span>
                        </a>
                    </Link>

                    <Link href="/community" legacyBehavior>
                        <a
                            className={cls(
                                "flex flex-col items-center space-y-2",
                                router.pathname === "/community"
                                    ? "text-orange-500"
                                    : ""
                            )}
                        >
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
                                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                                />
                            </svg>

                            <span>동네생활</span>
                        </a>
                    </Link>

                    <Link href="/chats" legacyBehavior>
                        <a
                            className={cls(
                                "flex flex-col items-center space-y-2",
                                router.pathname === "/chats"
                                    ? "text-orange-500"
                                    : ""
                            )}
                        >
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
                                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                                />
                            </svg>

                            <span>채팅</span>
                        </a>
                    </Link>

                    <Link href="/streams" legacyBehavior>
                        <a
                            className={cls(
                                "flex flex-col items-center space-y-2",
                                router.pathname === "/live"
                                    ? "text-orange-500"
                                    : ""
                            )}
                        >
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

                            <span>라이브 </span>
                        </a>
                    </Link>

                    <Link href="/profile" legacyBehavior>
                        <a
                            className={cls(
                                "flex flex-col items-center space-y-2",
                                router.pathname === "/profile"
                                    ? "text-orange-500"
                                    : ""
                            )}
                        >
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
                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                />
                            </svg>

                            <span>프로필</span>
                        </a>
                    </Link>
                </nav>
            ) : null}
        </div>
    );
}
