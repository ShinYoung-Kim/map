export const saveBookmark = (position: kakao.maps.LatLng) => {
	const message = {
		type: "saveBookmark",
		payload: {
			lat: position.getLat(),
			lng: position.getLng(),
		},
	};

	window.ReactNativeWebView.postMessage(JSON.stringify(message));
	document.ReactNativeWebView.postMessage(JSON.stringify(message));
};

export const getBookmark = () => {
	const message = {
		type: "getBookmark",
	};

	window.ReactNativeWebView.postMessage(JSON.stringify(message));
	document.ReactNativeWebView.postMessage(JSON.stringify(message));
};
