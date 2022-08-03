import { useEffect, useRef, useState } from "react";
import { Canvas } from "../base/Canvas";

export const SwadhyayaNagarCanvas = () => {
	const [context, setContext] = useState(null);
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvasElement = canvasRef.current;
		setContext(canvasElement.getContext("2d"));
	}, []);

	//todo Add calculations for width and height of canvas using the latitude and longitude bounds
	const [canvasWidth, setCanvasWidth] = useState(800);
	const [canvasHeight, setCanvasHeight] = useState(800);

	return (
		<Canvas
			canvasRef={canvasRef}
			canvasWidth={canvasWidth}
			canvasHeight={canvasHeight}
		/>
	);
};
