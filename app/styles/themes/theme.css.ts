import {
  createGlobalTheme,
  createThemeContract,
  createTheme,
} from "@vanilla-extract/css";

import { white, grey } from "../colors.css";

const root = createGlobalTheme("#root", {});

const themeColor = createThemeContract({
  fontColor: {
    textColor: null,
    accentColor: null,
    subColor: null,
    accentSubColor: null,
  },
  buttonColor: {
    notActiveColor: null,
    activeColor: null,
  },
  backgroundColor: {
    bodyColor: null,
    accentColor: null,
    navbarColor: null,
    textBoxColor: null,
  },
  boxColor: {
    notHoverColor: null,
    hoverColor: null,
  },
  borderColor: {
    notHoverColor: null,
    hoverColor: null,
  },
});

export const ligthTheme = createTheme(themeColor, {
  fontColor: {
    textColor: grey[300],
    subColor: white[500],
    accentSubColor: white[500],
    accentColor: "black",
  },
  buttonColor: {
    notActiveColor: white[500],
    activeColor: "black",
  },
  backgroundColor: {
    bodyColor: white[100],
    accentColor: white[200],
    navbarColor: "rgba(" + white[100] + ", 0.8)",
    textBoxColor: white[400],
  },
  boxColor: {
    notHoverColor: white[200],
    hoverColor: white[300],
  },
  borderColor: {
    notHoverColor: white[400],
    hoverColor: grey[100],
  },
});

export const darkTheme = createTheme(themeColor, {
  fontColor: {
    textColor: white[100],
    subColor: grey[300],
    accentColor: "white",
    accentSubColor: grey[200],
  },
  buttonColor: {
    notActiveColor: grey[100],
    activeColor: white[100],
  },
  backgroundColor: {
    bodyColor: grey[500],
    accentColor: grey[400],
    navbarColor: "rgba(" + grey[500] + ", 0.8)",
    textBoxColor: grey[300],
  },
  boxColor: {
    notHoverColor: grey[400],
    hoverColor: grey[100],
  },
  borderColor: {
    notHoverColor: grey[200],
    hoverColor: white[300],
  },
});

export const vars = { ...root, themeColor };
