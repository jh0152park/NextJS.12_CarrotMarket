import { UseFormRegisterReturn } from "react-hook-form";

interface TextareaProps {
    label: string;
    placeholder: string;
    register: UseFormRegisterReturn;
}

export default function Textarea({
    label,
    placeholder,
    register,
}: TextareaProps) {
    return (
        <div>
            <label className="block mb-1 text-sm font-medium text-gary-700">
                {label}
            </label>

            <textarea
                rows={4}
                placeholder={placeholder}
                {...register}
                className="w-full mt-1 mb-5 border-gray-300 rounded-md shadow-sm foucs:ring-2 focus:border-orange-500 focus:ring-orange-500"
            />
        </div>
    );
}
