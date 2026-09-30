import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#ed6447", contrastText: "#ffffff" },
    secondary: { main: "#167b82" },
    background: { default: "#f3f6f5", paper: "#ffffff" },
    text: { primary: "#172d36", secondary: "#52666d" },
    divider: "rgba(23, 45, 54, 0.14)",
  },
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: '"DM Sans", sans-serif',
    button: { fontWeight: 650, textTransform: "none" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 6, minHeight: 44, paddingInline: 18 },
        containedPrimary: { color: "#ffffff" },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(229, 240, 231, 0.1)",
          backgroundImage: "none",
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
