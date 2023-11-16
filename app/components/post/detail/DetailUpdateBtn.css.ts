import { style, createVar } from "@vanilla-extract/css";

export const isAdmin = createVar();

export const detailUpdateBtn = style({
  position: "fixed",
  bottom: "30px",
  right: "50px",
  zIndex: 2,
  display: isAdmin,
});
