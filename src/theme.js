import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#ff7a1a", contrastText: "#0b0d10" },
    secondary: { main: "#3fd0d4" },
    background: { default: "#08090c", paper: "#111318" },
    text: { primary: "#f2efe9", secondary: "#9aa0a8" },
    divider: "rgba(255,255,255,0.08)",
  },
  shape: { borderRadius: 4 },
  typography: {
    fontFamily: "'Manrope', sans-serif",
    h1: {
      fontFamily: "'Bebas Neue', sans-serif",
      letterSpacing: "0.02em",
      lineHeight: 0.9,
    },
    h2: {
      fontFamily: "'Bebas Neue', sans-serif",
      letterSpacing: "0.02em",
      lineHeight: 0.95,
    },
    h3: { fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" },
    h4: { fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" },
    h5: { fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" },
    overline: { letterSpacing: "0.3em", fontWeight: 700 },
    button: { fontWeight: 700, letterSpacing: "0.12em" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 2, padding: "12px 28px" },
        contained: { boxShadow: "0 10px 40px -10px rgba(255,122,26,0.6)" },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: "1px solid rgba(255,255,255,0.08)",
        },
      },
    },
  },
});
