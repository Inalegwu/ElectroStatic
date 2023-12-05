import { createTheme } from "@kuma-ui/core";

const theme = createTheme({
  colors: {
    red: {
      100: "#ff6b6b",
    },
    black: "#000000",
    white: "#ffffff",
  },
  spacings: {},
  breakpoints: {},
  components: {},
});

type UserTheme = typeof theme;

declare module "@kuma-ui/core" {
  export interface Theme extends UserTheme {}
}

export default theme;
