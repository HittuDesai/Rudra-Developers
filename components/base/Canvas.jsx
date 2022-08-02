import { useEffect, useRef } from "react";

export const Canvas = ({
	canvasRef,
	canvasWidth = 100,
	canvasHeight = 100,
}) => {
	useEffect(() => {
		const canvasElement = canvasRef.current;
		const canvasContext = canvasElement.getContext("2d");
	}, []);
	return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />;
};
