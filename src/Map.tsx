import { useEffect, useState } from "react";

const { kakao } = window;

function Map() {
    const [position, setPosition] = useState({ latitude: 37.5665, longitude: 126.9780 });
    const listener = (event: MessageEvent) => {
        if (event.origin !== 'app') {
            setPosition({ latitude: 0, longitude: 0 });
            return;
        } else {
            setPosition({ latitude: 10, longitude: 10 });
        }

        const position = event.data;
        setPosition(position);
        loadMap(position);
    }

    window.addEventListener('message', listener);

    useEffect(() => {
        loadMap(position);
    }, [])

    function loadMap({ latitude, longitude }: { latitude: number, longitude: number }) {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(latitude, longitude),
            level: 3
        };
        const map = new kakao.maps.Map(container!, options);
        return map;
    }

    return (
        <div>
            <div id="map" />
            <span>lat: {position.latitude}</span>
            <span>lng: {position.longitude}</span>
        </div>
    );
}

export default Map;
