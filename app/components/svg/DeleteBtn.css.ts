import { vars } from "@/app/styles/themes/theme.css";
import { style } from "@vanilla-extract/css";

export const deleteBtnContainer = style({
  display: "flex",
  marginLeft: 10,
  alignItems: "center",
});

export const deleteBtn = style({
  fill: vars.themeColor.buttonColor.notActiveColor,
  ":hover": {
    fill: vars.themeColor.buttonColor.activeColor,
  },
});
