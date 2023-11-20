// import { blink } from "@/app/styles/common-style/blink";
import { vars } from "@/app/styles/themes/theme.css";
import { style } from "@vanilla-extract/css";

export const titleFrame = style({
  width: "80%",
  height: 30,
  margin: "16px 0 5px 0",
  borderRadius: 15,
  backgroundColor: vars.themeColor.backgroundColor.accentColor,
  animation: `${vars.blink} 1s ease infinite`,
  opacity: 0,
});

export const dateAndTitleFrame = style({
  height: "fit-content",
  padding: "0.25rem 10px 0.75rem 0",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  rowGap: 10,
});

export const categoryFrame = style({
  width: 100,
  backgroundColor: vars.themeColor.backgroundColor.accentColor,
  animation: `${vars.blink} 1s ease infinite`,
  opacity: 0,
  borderRadius: 15,
  height: 25,
});

export const detailDate = style({
  width: 50,
  height: 25,
  backgroundColor: vars.themeColor.backgroundColor.accentColor,
  animation: `${vars.blink} 1s ease infinite`,
  opacity: 0,
  borderRadius: 15,
});

export const detailViewerContainer = style({
  marginTop: 30,
  display: "flex",
  flexDirection: "column",
  gap: 15,
  backgroundColor: vars.themeColor.backgroundColor.accentColor,
  animation: `${vars.blink} 1s ease infinite`,
  opacity: 0,
  borderRadius: 15,
  height: "80dvh",
  width: "100%",
});
