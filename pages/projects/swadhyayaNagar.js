import Head from "next/head";
import { SwadhyayaNagarComponent } from "../../components/SwadhyayaNagarComponent";
import { data } from "../../data";

export default function SwadhyayaNagarPage({
	newData,
	absoluteWidth,
	absoluteHeight,
}) {
	return (
		<>
			<Head>
				<title>Rudra Developers - Swadhyaya Nagar</title>
				<meta
					name="description"
					content="Swadhyaya Nagar by Rudra Developers"
				/>
			</Head>
			<SwadhyayaNagarComponent
				data={newData}
				absoluteWidth={absoluteWidth}
				absoluteHeight={absoluteHeight}
			/>
		</>
	);
}

export function getServerSideProps() {
	const X = data.map(object => object.x);
	const Y = data.map(object => object.y);
	const minX = Math.min(...X);
	const maxX = Math.max(...X);
	const minY = Math.min(...Y);
	const maxY = Math.max(...Y);

	const absoluteWidth = maxX - minX;
	const absoluteHeight = maxY - minY;
	const indexOfLeft = X.indexOf(minX);
	const indexOfTop = Y.indexOf(maxY);

	const originX = data[indexOfLeft].x;
	const originY = data[indexOfTop].y;
	const newData = data.map(object => {
		const oldX = object.x;
		const oldY = object.y;
		const newX = oldX - originX;
		const newY = originY - oldY;
		return { ...object, x: newX, y: newY };
	});

	return {
		props: {
			newData,
			absoluteWidth,
			absoluteHeight,
		},
	};
}
