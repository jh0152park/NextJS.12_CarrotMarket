import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

function fetcher(url: string) {
    return fetch(url).then((response) => response.json());
}

export default function useUser() {
    const router = useRouter();
    const { data, error } = useSWR("/api/users/me", fetcher);

    //return router.replace("/enter");

    return data;
}
