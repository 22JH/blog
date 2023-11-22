import { vars } from "@/app/styles/themes/theme.css";
import { style, keyframes } from "@vanilla-extract/css";

const gradientWave = keyframes({
  "0%": {
    opacity: 0,
  },
  "50%": {
    opacity: 1,
  },
  "100%": {
    opacity: 0,
  },
});

export const loadingBox = style({
  width: "100%",
  height: "100%",
  minWidth: 300,
  top: 0,
  zIndex: 3,
  opacity: 0,
  position: "absolute",
  backgroundColor: vars.themeColor.backgroundColor.textBoxColor,
  animation: `${gradientWave} 2s ease infinite`,
  borderRadius: 10,
});
