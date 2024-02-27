import { IProduct } from "@/pages";
import useSWR from "swr";
import ProductSummary from "./productSummary";

interface IProductListProps {
    kind: "favorites" | "sales" | "purchases";
}

interface IRecord {
    id: number;
    product: IProduct;
}

interface IProductListResponse {
    [key: string]: IRecord[];
}

export default function ProductList({ kind }: IProductListProps) {
    const { data } = useSWR<IProductListResponse>(`/api/users/me/${kind}`);
    if (!data) {
        return null;
    }

    return (
        <>
            {data[kind]?.map((record) => (
                <ProductSummary
                    product={record.product.name}
                    description={record.product.description}
                    price={record.product.price}
                    like={record.product._count.favorite}
                    // message={123}
                    id={record.product.id}
                    key={record.id}
                />
            ))}
        </>
    );
}
