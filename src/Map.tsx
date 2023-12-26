import { useEffect, useState } from "react";

const { kakao } = window;

declare global {
    interface Document {
        ReactNativeWebView: {
            postMessage: (message: string) => void;
        }
    }

    interface Window {
        ReactNativeWebView: {
            postMessage: (message: string) => void;
        }
    }
}

function Map() {
    const [position, setPosition] = useState({ latitude: 37.5665, longitude: 126.9780 });
    const listener = (event: MessageEvent) => {
        const data = typeof event.data !== 'object' ? JSON.parse(event.data) : event.data;
        if (data.type === 'map') {
            const positionByApp = JSON.parse(event.data);
            setPosition(positionByApp);
            loadMap(positionByApp);
        }
    }

    useEffect(() => {
        loadMap(position);
        document.addEventListener('message', listener as EventListener);
        window.addEventListener('message', listener as EventListener);
    }, [])

    function loadMap({ latitude, longitude }: { latitude: number, longitude: number }) {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(latitude, longitude),
            level: 3,
        };

        const map = new kakao.maps.Map(container!, options);

        const marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(latitude, longitude),
        });
        marker.setMap(map);
    }

    return (
        <div id="map" />
    );
}

export default Map;
