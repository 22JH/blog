import { style } from "@vanilla-extract/css";

export const introContainer = style({
  width: "100%",
  display: "flex",
  color: "rgb(220,220,220)",
  alignContent: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "calc(100dvh - 80px)",
  "@media": {
    "(max-width: 640px)": {
      height: "calc(100dvh - 80px - 68px)",
    },
  },
});

export const introFrame = style({
  display: "flex",
  flexDirection: "row",
  "@media": {
    "(max-width: 1000px)": {
      flexDirection: "column-reverse",
    },
  },
});

export const introThreeModel = style({
  flex: 1,
  display: "flex",
  position: "relative",
  minWidth: 200,
  minHeight: 0,
  alignItems: "center",
  justifyContent: "center",
});

export const introAbout = style({
  flex: 1.5,
  fontSize: 22,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  rowGap: 10,
  height: "100%",
  "@media": {
    "(max-width: 640px)": {
      justifyContent: "flex-start",
    },
  },
});

export const socialFrame = style({
  marginTop: 40,
  display: "flex",
  justifyContent: "flex-end",
  "@media": {
    "(max-width: 640px)": {
      marginTop: 10,
    },
  },
});

export const social = style({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  columnGap: 5,
  marginLeft: 10,
});
