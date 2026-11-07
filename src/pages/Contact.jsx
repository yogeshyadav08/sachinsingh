import { useState } from "react";
import {
  Alert,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/MailOutlined";
import PlaceIcon from "@mui/icons-material/PlaceOutlined";

const EMAIL = "ssrvfx14@gmail.com";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Container maxWidth="lg" sx={{ pt: 18, pb: 10 }}>
      <Grid container spacing={8}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography variant="overline" color="primary">
            Contact
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "4rem", md: "6rem" }, mb: 3 }}
          >
            Let's create something epic.
          </Typography>
          <Stack spacing={2}>
            <Stack direction="row" spacing={1.5}>
              <MailIcon color="primary" />
              <Typography>{EMAIL}</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <PlaceIcon color="primary" />
              <Typography>India · Available worldwide</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack
            component="form"
            spacing={3}
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget);
              window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Project from " + f.get("name"))}&body=${encodeURIComponent(String(f.get("message")))}`;
              setSent(true);
            }}
          >
            <TextField
              name="name"
              label="Your name"
              required
              variant="filled"
            />
            <TextField
              name="email"
              label="Email"
              type="email"
              required
              variant="filled"
            />
            <TextField
              name="message"
              label="Tell me about your project"
              required
              multiline
              rows={6}
              variant="filled"
            />
            <Button type="submit" variant="contained" size="large">
              Send message
            </Button>
            {sent && (
              <Alert severity="success">
                Your email app is opening — thanks for reaching out!
              </Alert>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
