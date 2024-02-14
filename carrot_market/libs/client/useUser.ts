import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function useUser() {
    const router = useRouter();
    const { data, error } = useSWR("/api/users/me");

    useEffect(() => {
        if (data && !data.isSuccess) {
            router.replace("/enter");
        }
    }, [data, router]);

    return { user: data?.profile, isLoading: !data && !error };
}
