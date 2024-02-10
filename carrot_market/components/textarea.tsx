interface TextareaProps {
    placeholder: string;
}


export default function Textarea({placeholder}: TextareaProps) {
    return (
        <textarea
            rows={4}
            placeholder={placeholder}
            className="w-full mt-1 mb-5 border-gray-300 rounded-md shadow-sm foucs:ring-2 focus:border-orange-500 focus:ring-orange-500"
        />
    );
}
