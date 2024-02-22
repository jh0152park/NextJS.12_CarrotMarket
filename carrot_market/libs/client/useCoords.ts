import { useEffect, useState } from "react";

interface ICoordinateState {
    latitude: null | number;
    longitude: null | number;
}

export default function useCoords() {
    const [coords, setCoords] = useState<ICoordinateState>({
        latitude: null,
        longitude: null,
    });

    function onSuccess(position: GeolocationPosition) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setCoords({
            latitude,
            longitude,
        });
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(onSuccess);
    }, []);

    return coords;
}
