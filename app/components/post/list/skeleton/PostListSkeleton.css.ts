import { vars } from "@/app/styles/themes/theme.css";
import { style } from "@vanilla-extract/css";

export const categoryTitle = style({
  marginTop: 10,
  marginLeft: 10,
  width: 100,
  height: 50,
  backgroundColor: vars.themeColor.backgroundColor.accentColor,
  animation: `${vars.blink} 1s ease infinite`,
  opacity: 0,
  borderRadius: 10,
});

export const postContainer = style({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  position: "relative",
});

export const postCategory = style({
  margin: 0,
  height: "fit-content",
  color: vars.themeColor.fontColor.accentSubColor,
  backgroundColor: vars.themeColor.backgroundColor.accentColor,
  animation: `${vars.blink} 1s ease infinite`,
  opacity: 0,
  borderRadius: 5,
  padding: "2px 5px",
});

export const post = style({
  width: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "row",
  height: "fit-content",
  padding: "20px 10px 25px 10px",
  margin: "15px 0",
  "@media": {
    "(max-width: 820px)": {
      flexDirection: "column",
      paddingBottom: "30px",
    },
  },
});

export const thumbnail = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  borderRadius: 10,
  overflow: "hidden",
  width: "140px",
  height: "140px",
  aspectRatio: "1/1",
  backgroundColor: vars.themeColor.backgroundColor.accentColor,
  animation: `${vars.blink} 1s ease infinite`,
  opacity: 0,
  "@media": {
    "(max-width: 820px)": {
      width: "100%",
      height: "150px",
    },
  },
});

export const textInfo = style({
  flex: 1,
  marginLeft: "15px",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  "@media": {
    "(max-width: 820px)": {
      marginLeft: 0,
    },
  },
});

export const titleAndDate = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  "@media": {
    "(max-width: 820px)": {
      marginTop: 20,
    },
  },
});

export const title = style({
  margin: 0,
  width: 200,
  height: 16,
  borderRadius: 10,
  backgroundColor: vars.themeColor.backgroundColor.accentColor,
  animation: `${vars.blink} 1s ease infinite`,
  opacity: 0,
  marginBottom: "10px",
});

export const date = style({
  borderRadius: 10,
  backgroundColor: vars.themeColor.backgroundColor.accentColor,
  animation: `${vars.blink} 1s ease infinite`,
  opacity: 0,
  height: 16,
  width: 50,
  marginLeft: "10px",
});

export const categoryFrame = style({
  display: "flex",
  flexDirection: "row",
  marginBottom: "15px",
  width: 150,
  height: 16,
  borderRadius: 10,
  backgroundColor: vars.themeColor.backgroundColor.accentColor,
  animation: `${vars.blink} 1s ease infinite`,
  opacity: 0,
});

export const previewContent = style({
  height: "100px",
  width: "100%",
  borderRadius: 10,
  backgroundColor: vars.themeColor.backgroundColor.accentColor,
  animation: `${vars.blink} 1s ease infinite`,
  opacity: 0,
  "@media": {
    "(max-width: 820px)": {
      maxHeight: 50,
    },
  },
});
