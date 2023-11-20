import { style } from "@vanilla-extract/css";

export const toggleBtn = style({
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  position: "absolute",
  right: "40px",
  top: "50%",
  transform: "translate(0, -50%)",
  "@media": {
    "(max-width: 640px)": {
      right: "20px",
    },
  },
});
