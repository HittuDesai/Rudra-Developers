import { SwadhyayaNagarCanvas } from "../components/SwadhyayaNagarCanvas";

export const SwadhyayaNagarComponent = ({
	data,
	absoluteWidth,
	absoluteHeight,
}) => {
	return (
		<>
			<SwadhyayaNagarCanvas
				data={data}
				absoluteWidth={absoluteWidth}
				absoluteHeight={absoluteHeight}
			/>
		</>
	);
};
