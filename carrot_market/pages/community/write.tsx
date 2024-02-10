import Button from "@/components/button";
import Textarea from "@/components/textarea";

export default function Write() {
    return (
        <form className="px-4 py-10">
            <Textarea placeholder="Ask a question!" />
            <Button name="Submit" />
        </form>
    );
}
