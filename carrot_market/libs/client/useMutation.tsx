import { useState } from "react";

interface IUseMutationState {
    loading: boolean;
    data?: object;
    error?: object;
}

type TUseMutationResult = [(data: any) => void, IUseMutationState];

export default function useMutation(url: string): TUseMutationResult {
    const [state, setState] = useState({
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
