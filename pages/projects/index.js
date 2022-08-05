import { Grid } from "@mui/material";
import Head from "next/head";
import { Header } from "../../components/Header";
import { ProjectCard } from "../../components/ProjectCard";

export default function SwadhyayaNagarPage() {
	return (
		<>
			<Head>
				<title>Rudra Developers - Projects</title>
				<meta
					name="description"
					content="Projects by Rudra Developers"
				/>
			</Head>
			<Header />
			<Grid
				container
				direction="row"
				alignItems="center"
				justifyContent="space-evenly"
				columns={3}
			>
				<ProjectCard
					projectName="Swadhyaya Nagar"
					projectLink="swadhyayaNagar"
				/>
				<ProjectCard
					projectName="Palihill"
					projectLink="swadhyayaNagar"
				/>
				<ProjectCard
					projectName="Pali Heights"
					projectLink="swadhyayaNagar"
				/>
			</Grid>
		</>
	);
}
