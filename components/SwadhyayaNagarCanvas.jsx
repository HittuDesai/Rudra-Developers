import { useEffect, useRef } from "react";
import { drawCircle, drawLine } from "../utility/canvas";

export const SwadhyayaNagarCanvas = ({ data }) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		if (!data) return;
		const canvasElement = canvasRef.current;
		const canvasContext = canvasElement.getContext("2d");
		for (const object of data)
			drawCircle(canvasContext, object.x, object.y, 3);

		for (const i = 0; i < data.length; i++) {
			if (i + 1 === data.length) {
				drawLine(
					canvasContext,
					data[i].x,
					data[i].y,
					data[0].x,
					data[0].y
				);
				canvasContext.fill();
				return;
			}
			drawLine(
				canvasContext,
				data[i].x,
				data[i].y,
				data[i + 1].x,
				data[i + 1].y
			);
		}
	}, [data]);

	return <canvas ref={canvasRef} width={500} height={500} />;
};
