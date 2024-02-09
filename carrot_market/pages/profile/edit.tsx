import Button from "@/components/button";

export default function Edit() {
    return (
        <div className="px-4 py-10 space-y-4">
            <div className="flex items-center space-x-3">
                <div className="rounded-full w-14 h-14 bg-slate-500" />
                <label
                    htmlFor="picture"
                    className="px-3 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md shadow-sm cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                    Change
                    <input
                        id="picture"
                        type="file"
                        className="hidden"
                        accept="image/*"
                    />
                </label>
            </div>
            <div className="space-y-1">
                <label
                    htmlFor="email"
                    className="text-sm font-medium text-gary-700"
                >
                    Email address
                </label>

                <input
                    className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    type="email"
                    required
                    id="email"
                />
            </div>
            <div className="space-y-1">
                <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gary-700"
                >
                    Phone Number
                </label>

                <div className="flex rounded-md shadow-sm">
                    <span className="flex items-center justify-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 select-none bg-gray-50 rounded-l-md">
                        +82
                    </span>
                    <input
                        className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md rounded-l-none shadow-sm appearance-none focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                        type="number"
                        required
                        id="phone"
                    />
                </div>
            </div>

            <Button name="Upload profile" />
        </div>
    );
}
