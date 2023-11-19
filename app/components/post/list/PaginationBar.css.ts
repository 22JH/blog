import { vars } from "@/app/styles/themes/theme.css";
import { createVar, style } from "@vanilla-extract/css";

export const paginationBarContainer = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  marginBottom: 100,
});

export const numberContainer = style({
  width: "80%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
});

export const pageNumber = style({
  display: "flex",
  fontSize: "20px",
  margin: "0 calc(80% / 5 / 2)",
  ":hover": {
    color: vars.themeColor.fontColor.accentColor,
  },
});
