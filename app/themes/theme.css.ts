import {
  createGlobalTheme,
  createThemeContract,
  createTheme,
} from "@vanilla-extract/css";

import { white, grey } from "../styles/colors.css";

const root = createGlobalTheme("#root", {});

const themeColor = createThemeContract({
  fontColor: {
    textColor: null,
    accentColor: null,
  },
});

export const ligthTheme = createTheme(themeColor, {
  fontColor: {
    textColor: grey[300],
    accentColor: "black",
  },
});

export const darkTheme = createTheme(themeColor, {
  fontColor: {
    textColor: white[100],
    accentColor: "white",
  },
});

export const vars = { ...root, themeColor };
