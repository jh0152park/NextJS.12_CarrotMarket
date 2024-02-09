interface ButtonProps {
    name?: string;
}

export default function Button({ name }: ButtonProps) {
    return (
        <button className="w-full max-w-lg px-4 py-3 text-sm font-medium text-white transition-all bg-orange-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 hover:bg-orange-600">
            {name}
        </button>
    );
}
