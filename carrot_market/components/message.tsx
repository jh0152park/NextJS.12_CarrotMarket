interface MessageProps {
    message: string;
    sent?: boolean;
}

export default function Message({ message, sent = false }: MessageProps) {
    if (sent) {
        return (
            <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
                <div className="w-8 h-8 rounded-full bg-slate-400" />
                <div className="w-1/2 p-2 text-sm text-gray-700 border border-gray-300 rounded-md">
                    <p>{message}</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-400" />
                <div className="w-1/2 p-2 text-sm text-gray-700 border border-gray-300 rounded-md">
                    <p>{message}</p>
                </div>
            </div>
        );
    }
}
