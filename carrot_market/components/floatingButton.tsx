import Link from "next/link";

interface FloatingButtonProps {
    href: string;
    children: React.ReactNode;
}

export default function FloatingButton({
    href,
    children,
}: FloatingButtonProps) {
    return (
        <Link href={href} legacyBehavior>
            <a className="fixed p-4 text-white transition-colors bg-orange-400 rounded-full shadow-xl cursor-pointer hover:bg-orange-500 bottom-24 right-5">
                {children}
            </a>
        </Link>
    );
}
