import Map from "./Map";
import { describe, expect, it } from "vitest";
import { renderHook } from "@testing-library/react";

describe("Map 컴포넌트 테스트", () => {
	it("postMessage로 position을 받으면, console에 찍힌다.", () => {
		const map = renderHook(() => Map());
		map;
		window.postMessage(
			{
				type: "position",
				payload: { lat: 37.123, lng: 127.123 },
			},
			"app"
		);
		expect(console.log).toHaveBeenCalledWith("in");
		expect(console.log).toHaveBeenCalledWith({
			lat: 37.123,
			lng: 127.123,
		});
	});

	it("message의 origin이 app이 아니면, console에 찍히지 않는다.", () => {
		const map = renderHook(() => Map());
		map;
		window.postMessage(
			{
				type: "position",
				payload: { lat: 37.123, lng: 127.123 },
			},
			"not app"
		);
		expect(console.log).not.toHaveBeenCalledWith("in");
		expect(console.log).not.toHaveBeenCalledWith({
			lat: 37.123,
			lng: 127.123,
		});
	});
});
