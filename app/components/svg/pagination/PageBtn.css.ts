import { vars } from "@/app/styles/themes/theme.css";
import { style, globalStyle } from "@vanilla-extract/css";

export const pageBtnContainer = style({
  cursor: "pointer",
});

export const pageBtn = style({
  fill: vars.themeColor.buttonColor.notActiveColor,
  ":hover": {
    fill: vars.themeColor.buttonColor.activeColor,
  },
});
