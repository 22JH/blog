import { style } from "@vanilla-extract/css";

export const categoryContainer = style({
  position: "fixed",
  left: "calc(27.5vw - 190px)",
  top: "30%",
  overflow: "scroll",
  width: "fit-content",
  "::-webkit-scrollbar": {
    display: "none",
  },
  "@media": {
    "(max-width: 820px)": {
      position: "initial",
      transform: "translate(0, 0)",
      display: "flex",
      marginBottom: "16px",
      width: "100%",
    },
  },
});
