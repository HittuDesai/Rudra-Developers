import { useEffect, useRef, useState } from "react";
import { Coordinate } from "../../utility/classes/Coordinate";
import { PairOfCoordinates } from "../../utility/classes/PairOfCoordinates";
import { Canvas } from "../base/Canvas";

export const SwadhyayaNagarCanvas = () => {
	const [context, setContext] = useState(null);
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvasElement = canvasRef.current;
		setContext(canvasElement.getContext("2d"));

		const one = new Coordinate(53.32055555555556, -1.7297222222222221);
		const two = new Coordinate(53.31861111111111, -1.6997222222222223);
		const pair = new PairOfCoordinates(one, two);
		console.log(pair.distance());
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
