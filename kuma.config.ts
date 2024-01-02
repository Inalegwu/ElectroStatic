import { createTheme } from "@kuma-ui/core";

const theme = createTheme({
  colors: {
    black: "#000000",
    white: "#ffffff",
    blue: "blue",
  },
  spacings: {
    sm: "0.5rem",
    md: "1rem",
  },
  breakpoints: {
    sm: "400px",
    md: "700px",
  },
  components: {
    Button: {
      defaultProps: {
        border: "none",
        background: "none",
        bg: "black", // bg is short for background
        p: "10px", // p is short for padding
      },
    },
  },
});

type UserTheme = typeof theme;

declare module "@kuma-ui/core" {
  export interface Theme extends UserTheme {}
}

export default theme;
