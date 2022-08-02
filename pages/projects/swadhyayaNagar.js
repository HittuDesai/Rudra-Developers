import Head from "next/head";
import { SwadhyayaNagarComponent } from "../../components/pages/SwadhyayaNagarComponent";

export default function SwadhyayaNagarPage() {
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
