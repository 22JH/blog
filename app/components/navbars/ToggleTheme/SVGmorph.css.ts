import { vars } from "@/app/styles/themes/theme.css";
import { style } from "@vanilla-extract/css";

export const pathStyle = style({
  stroke: vars.themeColor.borderColor.hoverColor,
  strokeWidth: 1,
  fill: "none",
});
