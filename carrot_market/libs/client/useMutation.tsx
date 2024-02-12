import { useState } from "react";

interface IUseMutationState<T> {
    loading: boolean;
    data?: T;
    error?: object;
}

type TUseMutationResult<T> = [(data: any) => void, IUseMutationState<T>];

export default function useMutation<T = any>(
    url: string
): TUseMutationResult<T> {
    const [state, setState] = useState<IUseMutationState<T>>({
        loading: false,
        data: undefined,
        error: undefined,
    });

    function mutation(data: any) {
        setState((prev) => ({ ...prev, loading: true }));
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((respnse) => respnse.json().catch(() => {}))
            .then((json) => setState((prev) => ({ ...prev, data: json })))
            .catch((error) => setState((prev) => ({ ...prev, error: error })))
            .finally(() => setState((prev) => ({ ...prev, loading: false })));
    }

    return [mutation, { ...state }];
}
