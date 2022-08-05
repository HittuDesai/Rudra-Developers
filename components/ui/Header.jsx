import { useRouter } from "next/router";
import { AppBar, Grid, IconButton, Link, Typography } from "@mui/material";
import FoundationIcon from "@mui/icons-material/Foundation";

export function Header() {
	const router = useRouter();
	return (
		<AppBar position="sticky">
			<Grid
				container
				direction="row"
				alignItems="center"
				justifyContent="space-between"
				padding="1rem"
			>
				<IconButton>
					<FoundationIcon />
				</IconButton>
				<Typography
					variant="overline"
					onClick={() => router.push("/projects")}
				>
					<Link color="inherit">Projects</Link>
				</Typography>
			</Grid>
		</AppBar>
	);
}
