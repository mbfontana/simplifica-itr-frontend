import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    background: {
      default: "#ffffff",
      // secondary: "#F6F8FA";
    },
    primary: {
      main: "#00a82d",
      light: "#14cc45",
    },
    secondary: {
      main: "#cada2a",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50",
    },
    divider: "rgba(0,0,0,0.12)",
    text: {
      primary: "#000000",
      secondary: "#737373", //#CCCCCC previous
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontSize: 16,
    fontFamily: ["Rubik"].join(","),
    h1: {
      fontSize: "3.5rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.75rem",
    },
    h3: {
      fontSize: "0.9rem", // before: 0.875rem
      fontWeight: 500,
    },
    body1: {
      fontSize: "1.2rem",
    },
    body2: {
      fontSize: "0.975rem",
    },
    button: {
      fontSize: "1.125rem",
    },
  },
});
