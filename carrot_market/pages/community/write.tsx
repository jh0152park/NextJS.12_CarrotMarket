import Button from "@/components/button";

export default function Write() {
    return (
        <form className="px-4 py-10">
            <textarea
                rows={4}
                placeholder="Ask a question!"
                className="w-full mt-1 mb-5 border-gray-300 rounded-md shadow-sm  foucs:ring-2 focus:border-orange-500 focus:ring-orange-500"
            />
            <Button name="Submit" />
        </form>
    );
}
