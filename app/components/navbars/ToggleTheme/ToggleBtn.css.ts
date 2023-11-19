import { style } from "@vanilla-extract/css";

export const toggleBtn = style({
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  position: "absolute",
  right: "30px",
  top: "50%",
  transform: "translate(0, -50%)",
});
