import { Box, Container, Grid, Typography } from "@mui/material";
import { projects } from "../data.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Work() {
  return (
    <Container maxWidth="lg" sx={{ pt: 18, pb: 10 }}>
      <Typography variant="overline" color="primary">
        Portfolio
      </Typography>
      <Typography
        variant="h1"
        sx={{ fontSize: { xs: "4rem", md: "7rem" }, mb: 2 }}
      >
        Showreel & Work
      </Typography>
      <Box
        sx={{
          aspectRatio: "16/9",
          mb: 6,
          border: 1,
          borderColor: "divider",
          overflow: "hidden",
        }}
      >
        <Box
          component="iframe"
          title="Showreel"
          src="https://player.vimeo.com/video/1048584480?h=f262ad1962"
          allowFullScreen
          allow="autoplay; fullscreen; picture&picture"
          sx={{ width: "100%", height: "100%", border: 0 }}
        />
      </Box>
      <Grid container spacing={3}>
        {projects.map((p) => (
          <Grid key={p.title} size={{ xs: 12, md: 6 }}>
            <ProjectCard p={p} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
