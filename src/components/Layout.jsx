import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  Typography,
  IconButton,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink as Link } from "react-router-dom";
import { theme } from "../theme.js";

const nav = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Layout({ children }) {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const closeMobileMenu = () => setMobileMenuAnchor(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: "rgba(8,9,12,0.7)",
          backdropFilter: "blur(12px)",
          borderBottom: 1,
          padding: 2,
          borderColor: "divider",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Typography
              component={Link}
              to="/"
              variant="h5"
              sx={{
                color: "text.primary",
                textDecoration: "none",
                fontSize: { xs: "1.25rem", sm: "1.5rem" },
              }}
            >
              SACHIN
              <Box component="span" sx={{ color: "primary.main" }}>
                .
              </Box>
              VFX
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              {nav.map((n) => (
                <Button
                  key={n.to}
                  component={Link}
                  to={n.to}
                  size="small"
                  color="inherit"
                  style={({ isActive }) =>
                    isActive ? { color: "#ff7a1a" } : undefined
                  }
                  sx={{ px: 2, fontSize: 12 }}
                >
                  {n.label}
                </Button>
              ))}
            </Stack>
            <IconButton
              color="inherit"
              aria-label="Open navigation menu"
              aria-controls={
                mobileMenuAnchor ? "mobile-navigation-menu" : undefined
              }
              aria-haspopup="true"
              aria-expanded={mobileMenuAnchor ? "true" : undefined}
              onClick={(event) => setMobileMenuAnchor(event.currentTarget)}
              sx={{ display: { xs: "inline-flex", sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="mobile-navigation-menu"
              anchorEl={mobileMenuAnchor}
              open={Boolean(mobileMenuAnchor)}
              onClose={closeMobileMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {nav.map((n) => (
                <MenuItem
                  key={n.to}
                  component={Link}
                  to={n.to}
                  onClick={closeMobileMenu}
                >
                  {n.label}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="main" sx={{ minHeight: "100vh" }}>
        {children}
      </Box>
      <Box
        component="footer"
        sx={{ borderTop: 1, borderColor: "divider", py: 5 }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Sachin Singh — VFX Artist
          </Typography>
          <Stack direction="row">
            <IconButton
              aria-label="Instagram"
              color="inherit"
              component="a"
              href="https://www.instagram.com/ssr_1651?exln=MWV2OTBoempzcGY2Zg%3D%3D&utm_source=qr"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              color="inherit"
              component="a"
              href="https://www.linkedin.com/in/sachin-singh-639b80143"
            >
              <LinkedInIcon />
            </IconButton>
            {/* <IconButton aria-label="Vimeo" color="inherit">
              <VimeoIcon />
            </IconButton> */}
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
