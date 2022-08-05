import { useEffect, useRef } from "react";
import { fillRectangle } from "../utility/canvas";

export const SwadhyayaNagarCanvas = ({
	data,
	absoluteWidth,
	absoluteHeight,
}) => {
	const canvasRef = useRef(null);
	const canvasSideLength = 700;

	useEffect(() => {
		if (!data) return;

		const canvasElement = canvasRef.current;
		const canvasContext = canvasElement.getContext("2d");
		const scaleFactorX = canvasSideLength / absoluteWidth;
		const scaleFactorY = canvasSideLength / absoluteHeight;
		canvasContext.scale(scaleFactorX, scaleFactorY);
		fillRectangle(canvasContext, 0, 0, canvasSideLength, canvasSideLength);

		canvasContext.beginPath();
		canvasContext.moveTo(data[data.length - 1].x, data[data.length - 1].y);
		for (const i = 0; i < data.length; i++) {
			canvasContext.lineTo(data[i].x, data[i].y);
		}
		canvasContext.closePath();
		canvasContext.fillStyle = "red";
		canvasContext.fill();
	}, [data]);

	return (
		<canvas
			ref={canvasRef}
			width={canvasSideLength}
			height={canvasSideLength}
		/>
	);
};
