export default function Home() {
    return (
        <div
            id="container"
            className="grid flex-col min-h-screen gap-10 px-20 py-20 bg-slate-400 xl:grid-cols-3 lg:grid-cols-2 xl:place-content-center"
        >
            <div
                id="first-div"
                className="flex flex-col justify-between p-6 bg-white shadow-xl dark:bg-black rounded-3xl"
            >
                <span className="text-3xl font-semibold dark:text-white">
                    Select Item
                </span>

                <ul>
                    {[1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className="flex justify-between my-2 dark:text-white"
                        >
                            <span className="text-gray-500 dark:text-gray-100">
                                Grey Chair
                            </span>
                            <span className="font-semibold ">$170</span>
                        </div>
                    ))}
                </ul>

                <div className="flex justify-between pt-2 mt-2 border-t-2 border-dashed dark:text-white">
                    <span>Total</span>
                    <span className="font-semibold ">$970</span>
                </div>
                <button className="block w-2/4 p-3 mx-auto mt-5 text-center text-white transition-all bg-blue-500 dark:border-gray-100 dark:border dark:bg-black dark:text-gray-200 rounded-xl dark:hover:bg-gray-600 hover:bg-blue-600 active:bg-yellow-400 focus:text-red-400">
                    Checkout
                </button>
            </div>

            <div
                id="second-div"
                className="overflow-hidden bg-white shadow-xl rounded-2xl group"
            >
                <div className="p-6 portrait:bg-blue-500 landscape:bg-teal-400 pb-14 xl:pb-40">
                    <span className="text-2xl text-white">Profile</span>
                </div>
                <div className="relative p-6 bg-white rounded-3xl -top-5">
                    <div className="relative flex items-end justify-between -mt-16">
                        <div className="flex flex-col items-center">
                            <span className="text-sm text-gray-500">Order</span>
                            <span className="font-medium ">$340</span>
                        </div>
                        <div
                            id="avatar"
                            className="w-24 h-24 transition-colors bg-gray-400 rounded-full group-hover:bg-red-200"
                        ></div>
                        <div className="flex flex-col items-center">
                            <span className="text-sm text-gray-500">Spent</span>
                            <span className="font-medium ">$2,310</span>
                        </div>
                    </div>

                    <div className="relative flex flex-col items-center mt-10 -mb-5 ">
                        <span className="text-xl font-medium">Tony Molloy</span>
                        <span className="text-sm text-gray-500">
                            New York, USA
                        </span>
                    </div>
                </div>
            </div>

            <div
                id="last-div"
                className="p-10 bg-white shadow-xl rounded-2xl lg:col-span-2 xl:col-span-1"
            >
                <div className="flex items-center justify-between mb-5">
                    <span>←</span>
                    <div className="space-x-3 ">
                        <span>⭐️ 4.9</span>
                        <span className="p-2 rounded-md shadow-xl ">❤️</span>
                    </div>
                </div>

                <div className="mb-5 bg-zinc-400 h-72" />

                <div className="flex flex-col">
                    <span className="text-lg font-medium ">Swoon Lounge</span>
                    <span className="text-xs text-gray-500 ">Chair</span>
                    <div className="flex items-center justify-between mt-3 mb-5">
                        <div className="space-x-2">
                            <button className="w-5 h-5 transition-all bg-yellow-500 rounded-full focus:ring-2 ring-yellow-500 ring-offset-2"></button>
                            <button className="w-5 h-5 transition-all bg-indigo-500 rounded-full focus:ring-2 ring-indigo-500 ring-offset-2"></button>
                            <button className="w-5 h-5 transition-all bg-teal-500 rounded-full focus:ring-2 ring-teal-500 ring-offset-2"></button>
                        </div>
                        <div className="flex items-center space-x-5">
                            <button className="flex items-center justify-center p-3 text-xl text-gray-500 bg-blue-200 rounded-lg aspect-square w-11">
                                -
                            </button>
                            <span>1</span>
                            <button className="flex items-center justify-center p-3 text-xl text-gray-500 bg-blue-200 rounded-lg aspect-square w-11">
                                +
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-2xl font-medium ">$450</span>
                    <button className="px-8 py-2 text-sm text-center text-white bg-blue-500 rounded-lg">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}
