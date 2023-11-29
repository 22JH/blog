import { vars } from "@/app/styles/themes/theme.css";
import { style } from "@vanilla-extract/css";

export const themeContainer = style({
  backgroundColor: vars.themeColor.backgroundColor.bodyColor,
  width: "100%",
  height: "100%",
  minHeight: "100vh",
});
