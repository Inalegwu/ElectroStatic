import { createTheme } from "@kuma-ui/core";

const theme = createTheme({
  colors: {
    primary: {
      100: "hsl(300,100,100)",
      200: "hsl(300,100,90)",
    },
    black: "#000000",
    white: "#ffffff",
  },
  spacings: {
    sm: "2px",
    md: "4px",
    lg: "8px",
    xl: "10px",
    xxl: "12px",
    xxxl: "14px",
  },
  radii: {
    sm: "2px",
    md: "4px",
    lg: "8px",
    xl: "10px",
    xxl: "12px",
    xxxl: "14px",
    hg: "99999px",
  },
  breakpoints: {},
  components: {
    Button: {
      defaultProps: {
        border: "none",
        transition: "0.5s ease-in-out",
        outline: "none",
      },
    },
    Input: {
      defaultProps: {
        border: "none",
      },
    },
  },
});

type UserTheme = typeof theme;

declare module "@kuma-ui/core" {
  export interface Theme extends UserTheme {}
}

export default theme;
