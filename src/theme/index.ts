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
  palette,
  typography: {
    fontFamily: "Outfit, sans-serif",
  },
});
