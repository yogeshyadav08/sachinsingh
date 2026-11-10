import { Link } from "react-router-dom";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircleOutlined";
import { heroImg, projects } from "../data.js";
import ProjectCard from "../components/ProjectCard.jsx";
import cv from "../assets/ssrcv.pdf";

const stats = [
  ["10+", "Years Experience"],
  ["1200+", "Shots Delivered"],
  ["150+", "Productions"],
  ["6", "Studios"],
];

export default function Home() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={heroImg}
          alt="Cinematic VFX shot"
          width={1920}
          height={1088}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            animation: "kb 20s ease-out forwards",
            "@keyframes kb": {
              from: { transform: "scale(1.15)" },
              to: { transform: "scale(1)" },
            },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, #08090c 5%, rgba(8,9,12,.4) 50%, rgba(8,9,12,.7))",
          }}
        />
        <Container
          maxWidth="lg"
          sx={{ position: "relative", pb: { xs: 8, md: 12 } }}
        >
          <Typography variant="overline" color="primary">
            Senior VFX Compositor · Nuke · Compositing
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "4.5rem", md: "9rem" }, my: 2 }}
          >
            Making the
            <br />
            <Box component="span" sx={{ color: "primary.main" }}>
              impossible
            </Box>{" "}
            real.
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ maxWidth: 520, fontSize: 18, mb: 4 }}
          >
            I'm Sachin Singh Rajput — 10+ years crafting explosions, oceans,
            magic and worlds for film, series and commercials.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              variant="contained"
              size="large"
              component="a"
              href={cv}
              download="ssrcv.pdf"
            >
              Download CV
            </Button>
            <Button
              variant="outlined"
              size="large"
              color="inherit"
              component={Link}
              to="/contact"
            >
              Hire Me
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {stats.map(([n, l]) => (
            <Grid key={l} size={{ xs: 6, md: 3 }}>
              <Typography
                variant="h2"
                sx={{ fontSize: "4rem", color: "primary.main" }}
              >
                {n}
              </Typography>
              <Typography variant="overline" color="text.secondary">
                {l}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Stack
          direction="row"
          sx={{
            mb: 4,
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Box>
            <Typography variant="overline" color="primary">
              Selected Work
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "3rem", md: "4.5rem" } }}
            >
              Thumbnails
            </Typography>
          </Box>
          <Button component={Link} to="/work" color="secondary">
            View all →
          </Button>
        </Stack>
        <Grid container spacing={3}>
          {projects.slice(0, 3).map((p, i) => (
            <Grid key={p.title} size={{ xs: 12, md: i === 0 ? 12 : 6 }}>
              <ProjectCard p={p} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box
        sx={{
          py: 12,
          textAlign: "center",
          borderTop: 1,
          borderColor: "divider",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "3rem", md: "5rem" } }}
          >
            Have a shot that needs magic?
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ mt: 4 }}
            component={Link}
            to="/contact"
          >
            Let's talk
          </Button>
        </Container>
      </Box>
    </>
  );
}
