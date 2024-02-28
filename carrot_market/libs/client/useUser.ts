import { User } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

interface IProfileResponse {
    isSuccess: boolean;
    profile: User;
}

export default function useUser() {
    const router = useRouter();
    const { data, error } = useSWR<IProfileResponse>("/api/users/me");

    useEffect(() => {
        if (data && !data.isSuccess) {
            router.replace("/enter");
        }
    }, [data, router]);

    return { user: data?.profile, isLoading: !data && !error };
}
