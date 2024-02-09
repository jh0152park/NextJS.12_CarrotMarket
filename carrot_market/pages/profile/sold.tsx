import ProductSummary from "@/components/productSummary";

export default function Sold() {
    return (
        <div className="flex flex-col py-10 space-y-5">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
                <ProductSummary
                    product="iPhone 20 Pro Max"
                    description="White"
                    price={200}
                    like={99}
                    chat={123}
                />
            ))}
        </div>
    );
}
