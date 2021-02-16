import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
});

const overrides = {
  breakpoints,
  colors: {
    black: "#000000",
    gray: {
      5: "#E0E0E0",
      900: "#191919",
    },
    orange: "#DF3c12",
    primary: {
      10: "#B8F0E5",
      15: "#01A3A6",
      20: "#02A3A6",
      25: "#00869D",
      30: "#046173",
      40: "#013543",
      100: "red",
      200: "red",
      500: "red",
      600: "red",
    },
    white: "#FFFFFF",
    text: {
      primary: "#1D1D1B",
    },
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
    button: "Inter",
  },
};

export default extendTheme(overrides as any);
