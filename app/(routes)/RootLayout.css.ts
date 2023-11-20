import { style } from "@vanilla-extract/css";

export const mainContent = style({
  width: "45vw",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  marginTop: 80,
  minWidth: 576,
  "@media": {
    "(max-width: 640px)": {
      minWidth: "260px",
      width: "90vw",
      marginTop: 60,
    },
  },
});

export const mainContentContainer = style({
  display: "flex",
  justifyContent: "center",
  height: "fit-content",
  "@media": {
    "(max-width: 640px)": {
      marginBottom: 80,
      height: "auto",
    },
  },
});
