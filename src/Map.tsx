import { useEffect, useRef, useState } from "react";
import BookmarkButton from "./component/BookmarkButton";
import SaveButton from "./component/SaveButton";

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
    const markerRef = useRef<kakao.maps.Marker>();
    const listener = (event: MessageEvent) => {
        const data = typeof event.data !== 'object' ? JSON.parse(event.data) : event.data;
        if (data.type === 'map') {
            const positionByApp = JSON.parse(event.data);
            setPosition(positionByApp);
            loadMap(positionByApp);
        }
    }

    useEffect(() => {
        const map = loadMap(position);
        document.addEventListener('message', listener as EventListener);
        window.addEventListener('message', listener as EventListener);
        addMarker(map);
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

        return map;
    }

    function addMarker(map: kakao.maps.Map) {
        kakao.maps.event.addListener(map, 'click', function (mouseEvent: kakao.maps.event.MouseEvent) {
            const latlng = mouseEvent.latLng;
            const marker = new kakao.maps.Marker({
                position: latlng,
            });

            if (!markerRef.current) {
                markerRef.current = marker;
                marker.setMap(map);
                return;
            }

            markerRef.current.setPosition(latlng);
        });
    }

    return (
        <div>
            <div id="map" />
            <BookmarkButton />
            <SaveButton />
        </div>
    );
}

export default Map;
