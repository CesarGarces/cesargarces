import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9c27b0",
    },
    background: {
      default: "#1122001d1",
      paper: "rgba(124, 58, 237, 0.627)",
    },
  },
});

export default darkTheme;
