export default function Write() {
    return (
        <form className="px-4 py-10">
            <textarea
                rows={4}
                placeholder="Ask a question!"
                className="w-full mt-1 border-gray-300 rounded-md shadow-sm foucs:ring-2 focus:border-orange-500 focus:ring-orange-500"
            />
            <button className="w-full px-4 py-2 mt-2 text-sm font-medium text-white transition-all bg-orange-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 hover:bg-orange-600">
                Submit
            </button>
        </form>
    );
}
