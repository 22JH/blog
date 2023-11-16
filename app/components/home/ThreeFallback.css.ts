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
  top: 0,
  zIndex: 3,
  opacity: 0,
  position: "absolute",
  background: "rgb(20,20,20)",
  animation: `${gradientWave} 2s ease infinite`,
});
