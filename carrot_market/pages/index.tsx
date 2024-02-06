export default function Home() {
    return (
        // <div className="flex-col min-h-screen px-20 py-20 space-y-10 bg-slate-400">
        //     <div className="p-6 bg-white shadow-xl rounded-3xl">
        //         <span className="text-3xl font-semibold">Select Item</span>

        //         <ul>
        //             {[1, 2, 3, 4].map((i) => (
        //                 <div
        //                     key={i}
        //                     className="flex justify-between my-2 odd:bg-blue-300 even:bg-yellow-300"
        //                 >
        //                     <span className="text-gray-500">Grey Chair</span>
        //                     <span className="font-semibold ">$170</span>
        //                 </div>
        //             ))}
        //         </ul>

        //         <div className="flex justify-between pt-2 mt-2 border-t-2 border-dashed ">
        //             <span>Total</span>
        //             <span className="font-semibold ">$970</span>
        //         </div>
        //         <button className="w-2/4 p-3 mx-auto mt-5 text-center text-white bg-blue-500 rounded-xl hover:bg-blue-300 active:bg-yellow-400 focus:text-red-400 ">
        //             Checkout
        //         </button>
        //     </div>

        //     <div className="overflow-hidden bg-white shadow-xl rounded-2xl group">
        //         <div className="p-6 bg-blue-500 pb-14">
        //             <span className="text-2xl text-white">Profile</span>
        //         </div>
        //         <div className="relative p-6 bg-white rounded-3xl -top-5">
        //             <div className="relative flex items-end justify-between -mt-16">
        //                 <div className="flex flex-col items-center">
        //                     <span className="text-sm text-gray-500">Order</span>
        //                     <span className="font-medium ">$340</span>
        //                 </div>
        //                 <div
        //                     id="avatar"
        //                     className="w-24 h-24 transition-colors bg-gray-400 rounded-full group-hover:bg-red-200"
        //                 ></div>
        //                 <div className="flex flex-col items-center">
        //                     <span className="text-sm text-gray-500">Spent</span>
        //                     <span className="font-medium ">$2,310</span>
        //                 </div>
        //             </div>

        //             <div className="relative flex flex-col items-center mt-10 -mb-5 ">
        //                 <span className="text-xl font-medium">Tony Molloy</span>
        //                 <span className="text-sm text-gray-500">
        //                     New York, USA
        //                 </span>
        //             </div>
        //         </div>
        //     </div>

        //     <div className="p-10 bg-white shadow-xl rounded-2xl">
        //         <div className="flex items-center justify-between mb-5">
        //             <span>←</span>
        //             <div className="space-x-3 ">
        //                 <span>⭐️ 4.9</span>
        //                 <span className="p-2 rounded-md shadow-xl ">❤️</span>
        //             </div>
        //         </div>

        //         <div className="mb-5 bg-zinc-400 h-72" />

        //         <div className="flex flex-col">
        //             <span className="text-lg font-medium ">Swoon Lounge</span>
        //             <span className="text-xs text-gray-500 ">Chair</span>
        //             <div className="flex items-center justify-between mt-3 mb-5">
        //                 <div className="space-x-2">
        //                     <button className="w-5 h-5 transition-all bg-yellow-500 rounded-full focus:ring-2 ring-yellow-500 ring-offset-2"></button>
        //                     <button className="w-5 h-5 transition-all bg-indigo-500 rounded-full focus:ring-2 ring-indigo-500 ring-offset-2"></button>
        //                     <button className="w-5 h-5 transition-all bg-teal-500 rounded-full focus:ring-2 ring-teal-500 ring-offset-2"></button>
        //                 </div>
        //                 <div className="flex items-center space-x-5">
        //                     <button className="flex items-center justify-center p-3 text-xl text-gray-500 bg-blue-200 rounded-lg aspect-square w-11">
        //                         -
        //                     </button>
        //                     <span>1</span>
        //                     <button className="flex items-center justify-center p-3 text-xl text-gray-500 bg-blue-200 rounded-lg aspect-square w-11">
        //                         +
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="flex items-center justify-between">
        //             <span className="text-2xl font-medium ">$450</span>
        //             <button className="px-8 py-2 text-sm text-center text-white bg-blue-500 rounded-lg">
        //                 Add to cart
        //             </button>
        //         </div>
        //     </div>
        // </div>

        <form className="flex flex-col p-5 space-y-2 ">
            <input
                type="text"
                required
                placeholder="Username"
                className="p-1 border border-gray-400 rounded-lg peer"
            />
            <span className="hidden peer-invalid:block peer-invalid:text-red-500">
                This isput is invalid
            </span>
            <input type="submit" value="Login" className="" />
        </form>
    );
}
