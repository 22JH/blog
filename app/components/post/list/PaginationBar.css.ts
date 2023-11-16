import { createVar, style } from "@vanilla-extract/css";

export const activeColor = createVar();

export const paginationBarContainer = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
});

export const numberContainer = style({
  width: "80%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
});

export const pageNumber = style({
  display: "flex",
  color: activeColor,
  fontSize: "20px",
  margin: "0 calc(80% / 5 / 2)",
  ":hover": {
    color: "rgb(200, 200, 200)",
  },
});
export const isActive = style({
  color: "rgb(200, 200, 200)",
});
