import { style } from "@vanilla-extract/css";

export const mainContent = style({
  width: "45vw",
  // height: "auto",
  // minWidth: "500px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  // height: "calc(100dvh - 80px)",
  "@media": {
    "(max-width: 640px)": {
      minWidth: "260px",
      width: "90vw",
      // height: "calc(100dvh - 80 - 68px)",
    },
  },
});

export const mainContentContainer = style({
  display: "flex",
  justifyContent: "center",
  height: "fit-content",
  "@media": {
    "(max-width: 640px)": {
      marginBottom: "80px",
      height: "auto",
    },
  },
});
