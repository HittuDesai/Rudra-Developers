import Head from "next/head";
import { SwadhyayaNagarComponent } from "../../components/pages/SwadhyayaNagarComponent";
import { data } from "../../data";

export default function SwadhyayaNagarPage() {
	console.log(data);
	return (
		<>
			<Head>
				<title>Rudra Developers - Swadhyaya Nagar</title>
				<meta
					name="description"
					content="Swadhyaya Nagars by Rudra Developers"
				/>
			</Head>
			<SwadhyayaNagarComponent />
		</>
	);
}
