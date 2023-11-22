import { style } from "@vanilla-extract/css";

export const introContainer = style({
  width: "100%",
  display: "flex",
  color: "rgb(220,220,220)",
  alignContent: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "calc(100dvh - 80px - 70px)",
  "@media": {
    "(max-width: 640px)": {
      /** topbar, bottombar, footer */
      height: "calc(100dvh - 60px - 60px - 70px)",
    },
  },
});

export const introFrame = style({
  display: "flex",
  flexDirection: "row",
  gap: 15,
  "@media": {
    "(max-width: 620px)": {
      flexDirection: "column-reverse",
    },
  },
});

export const introThreeModel = style({
  // flex: 1,
  display: "flex",
  position: "relative",
  minWidth: "300px",
  alignItems: "center",
  justifyContent: "center",
});

export const introAbout = style({
  flex: 1,
  fontSize: 20,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  rowGap: 10,
  height: "fit-content",
  "@media": {
    "(max-width: 640px)": {
      fontSize: 18,
      justifyContent: "flex-start",
      rowGap: 5,
    },
  },
});

export const introDescription = style({
  fontSize: 16,
});

export const socialFrame = style({
  marginTop: 40,
  display: "flex",
  justifyContent: "flex-end",
  "@media": {
    "(max-width: 640px)": {
      marginTop: 20,
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
