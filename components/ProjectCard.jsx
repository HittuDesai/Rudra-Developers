import { Card, CardHeader, Grid, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";

export function ProjectCard({ projectName, projectLink }) {
	const router = useRouter();
	return (
		<Grid item columns={1} flexGrow={1}>
			<Card onClick={() => router.push(`/projects/${projectLink}`)}>
				<Paper elevation={5}>
					<CardHeader
						title={
							<Typography variant="h4" align="center">
								{projectName}
							</Typography>
						}
					/>
				</Paper>
			</Card>
		</Grid>
	);
}
