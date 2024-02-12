import type { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
    label?: string;
    name?: string;
    kind?: "email" | "phone" | "text" | "price" | "number";
    register: UseFormRegisterReturn;
    [key: string]: any;
}

export default function Input({
    label,
    name,
    kind,
    register,
    ...options
}: InputProps) {
    if (kind === "email") {
        return (
            <>
                <label
                    htmlFor={name}
                    className="text-sm font-medium text-gary-700"
                >
                    {label}
                </label>
                <div className="mt-1 mb-5">
                    <input
                        className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                        type="email"
                        id={name}
                        {...options}
                        {...register}
                    />
                </div>
            </>
        );
    } else if (kind === "phone") {
        return (
            <>
                <label
                    htmlFor={name}
                    className="text-sm font-medium text-gary-700"
                >
                    {label}
                </label>
                <div className="mt-1 mb-5">
                    <div className="flex rounded-md shadow-sm">
                        <span className="flex items-center justify-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 select-none bg-gray-50 rounded-l-md">
                            +82
                        </span>
                        <input
                            id={name}
                            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md rounded-l-none shadow-sm appearance-none focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                            type="number"
                            {...options}
                            {...register}
                        />
                    </div>
                </div>
            </>
        );
    } else if (kind === "text") {
        return (
            <>
                <div>
                    <label
                        htmlFor={name}
                        className="block mb-1 text-sm font-medium text-gary-700"
                    >
                        {label}
                    </label>
                    <div className="relative flex items-center rounded-md shadow-sm">
                        <input
                            id={name}
                            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none pl-7 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                            type="text"
                            {...options}
                            {...register}
                        />
                    </div>
                </div>
            </>
        );
    } else if (kind === "price") {
        return (
            <>
                <div>
                    <label
                        htmlFor={name}
                        className="block mb-1 text-sm font-medium text-gary-700"
                    >
                        {label}
                    </label>
                    <div className="relative flex items-center rounded-md shadow-sm">
                        <div className="absolute left-0 flex items-center justify-center pl-3 ">
                            <span className="text-sm text-gray-500 pointer-events-none ">
                                ￦
                            </span>
                        </div>
                        <input
                            id={name}
                            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none pl-7 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                            type="number"
                            placeholder="0.00"
                            {...options}
                            {...register}
                        />
                        <div className="absolute right-0 flex items-center pr-3 pointer-events-none">
                            <span className="text-gray-500">KRW</span>
                        </div>
                    </div>
                </div>
            </>
        );
    } else if (kind === "number") {
        return (
            <>
                <div className="mb-5">
                    <label
                        htmlFor={name}
                        className="block mb-1 text-sm font-medium text-gary-700"
                    >
                        {label}
                    </label>
                    <div className="relative flex items-center rounded-md shadow-sm">
                        <input
                            id={name}
                            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none pl-7 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                            type="number"
                            {...options}
                            {...register}
                        />
                    </div>
                </div>
            </>
        );
    }
}
