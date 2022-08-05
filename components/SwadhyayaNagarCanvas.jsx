import { useEffect, useRef } from "react";
import { fillRectangle, drawCircle, drawLine } from "../utility/canvas";

export const SwadhyayaNagarCanvas = ({ data }) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		if (!data) return;
		const canvasElement = canvasRef.current;
		const canvasContext = canvasElement.getContext("2d");
		fillRectangle(
			canvasContext,
			0,
			0,
			canvasContext.canvas.width,
			canvasContext.canvas.height
		);
		// for (const object of data)
		// 	drawCircle(canvasContext, object.x, object.y, 3);

		canvasContext.beginPath();
		canvasContext.moveTo(data[data.length - 1].x, data[data.length - 1].y);
		for (const i = 0; i < data.length; i++) {
			canvasContext.lineTo(data[i].x, data[i].y);
		}
		canvasContext.closePath();
		canvasContext.fillStyle = "red";
		canvasContext.fill();
	}, [data]);

	return <canvas ref={canvasRef} width={500} height={500} />;
};
