import { createTheme } from "@mui/material/styles";
// @ts-ignore - fontsource is not typed
import "@fontsource/outfit";
// @ts-ignore - fontsource is not typed
import "@fontsource/domine";

const palette = {
  primary: {
    main: "#4e0911",
    light: "#905f66",
    dark: "#260707",
  },
  neutral: {
    light: "#faf1ec",
    dark: "#e4cec2",
  },
};

export const theme = createTheme({
  palette: {
    ...palette,
    background: {
      default: palette.neutral.dark,
    },
  },
  typography: {
    fontFamily: "Outfit, sans-serif",
    h1: {
      fontFamily: "Domine, serif",
    },
    h2: {
      fontFamily: "Domine, serif",
    },
    h3: {
      fontFamily: "Domine, serif",
    },
    h4: {
      fontFamily: "Domine, serif",
    },
  },
});
