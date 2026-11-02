import {
  Box,
  Container,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { skills } from "../data.js";

const timeline = [
  [
    "2021 — Now",
    "Senior Compositor",
    "Leading destruction & pyro on feature films",
  ],
  [
    "2016 — 2021",
    "Compositor",
    "Water, smoke and particle simulations for streaming series",
  ],
  [
    "2014 — 2016",
    "Roto Prep Artist",
    "Keying, matchmove and integration for commercials",
  ],
];

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ pt: 18, pb: 10 }}>
      <Grid container spacing={8}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="overline" color="primary">
            About me
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "4rem", md: "6rem" }, mb: 3 }}
          >
            Ten Plus years of pixels & physics.
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ fontSize: 17, lineHeight: 1.8 }}
          >
            I'm Sachin Singh Rajput, a Visual Effects Artist at Dneg India. I
            have honed my skills and developed a deep passion for learning and
            mastering new software and techniques to meet evolving industry
            requirements. I am eager to bring my expertise and dedication to
            your team, contributing to high-quality work within stipulated
            deadlines.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Toolkit
          </Typography>
          <Stack spacing={3}>
            {skills.map((s) => (
              <Box key={s.name}>
                <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                  <Typography sx={{ fontWeight: 700 }}>{s.name}</Typography>
                  <Typography color="text.secondary">{s.level}%</Typography>
                </Stack>
                <LinearProgress
                  variant="determinate"
                  value={s.level}
                  sx={{ mt: 1, height: 4, bgcolor: "divider" }}
                />
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
      <Typography variant="h3" sx={{ mt: 12, mb: 4 }}>
        Experience
      </Typography>
      {timeline.map(([y, r, d]) => (
        <Grid
          container
          key={y}
          sx={{ py: 3, borderTop: 1, borderColor: "divider" }}
        >
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography color="primary" sx={{ fontWeight: 700 }}>
              {y}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h5">{r}</Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography color="text.secondary">{d}</Typography>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
}
