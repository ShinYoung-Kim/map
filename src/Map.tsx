import { useEffect } from "react";

const { kakao } = window;

function Map() {
    const defaultPosition = { latitude: 37.506502, longitude: 127.053617 };

    function initWebView() {
        const listener = (event: MessageEvent) => {
            if (event.origin !== 'app') {
                return;
            }

            const position = event.data;
            console.log('in');
            console.log(position);
            loadMap(position);
        }

        window.addEventListener('message', listener);
    }

    function loadMap({ latitude, longitude }: { latitude: number, longitude: number }) {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(latitude, longitude),
            level: 3
        };
        const map = new kakao.maps.Map(container!, options);
        return map;
    }

    useEffect(() => {
        loadMap(defaultPosition);
        initWebView();
    }, [])

    return (
        <div id="map" />
    );
}

export default Map;
