import { useEffect } from "react";

const { kakao } = window;

function Map() {
    function initWebView() {
        const listener = (event: MessageEvent) => {
            // const position = JSON.parse(event.data);
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
            // center: new kakao.maps.LatLng(37.506502, 127.053617),
            level: 3
        };
        const map = new kakao.maps.Map(container!, options);
        return map;
    }

    useEffect(() => {
        initWebView();
        loadMap();
    }, [])

    return (
        <div id="map" />
    );
}

export default Map;
