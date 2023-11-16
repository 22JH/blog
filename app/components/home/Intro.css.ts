import { style } from "@vanilla-extract/css";

export const introContainer = style({
  width: "100%",
  height: "100%",
  display: "flex",
  color: "rgb(220,220,220)",
  alignContent: "center",
  justifyContent: "center",
  flexDirection: "column",
  "@media": {
    "(max-width: 640px)": {
      flexDirection: "column-reverse",
    },
  },
});

export const introFrame = style({
  display: "flex",
  flexDirection: "row",
});

export const introThreeModel = style({
  flex: 1,
  display: "flex",
  position: "relative",
  backgroundColor: "rgb(16,16,16)",
  minWidth: 200,
  minHeight: 0,
  alignItems: "center",
  justifyContent: "center",
  // "@media": {
  //   "(max-width: 640px)": {
  //     height: 300,
  //     flex: 1.5,
  //   },
  // },
});

export const introAbout = style({
  flex: 1.5,
  fontSize: 16,
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
