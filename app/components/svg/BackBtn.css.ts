import { vars } from "@/app/styles/themes/theme.css";
import { keyframes, style } from "@vanilla-extract/css";

const slideInFromLeft = keyframes({
  "0%": {
    transform: "translateX(-50%)",
    opacity: 0,
  },
  "100%": {
    transform: "translateX(0%)",
    opacity: 1,
  },
});

export const backBtnContainer = style({
  position: "fixed",
  left: "calc(27.5vw - 170px)",
  top: "20%",
  opacity: 0,
  animation: `${slideInFromLeft} 1s 0.2s cubic-bezier(0.145, 0.86, 0.43, 1) forwards`,
  backgroundColor: "transparent",
  "@media": {
    "(max-width: 820px)": {
      left: "calc(27.5vw - 140px)",
      top: "50%",
      transform: "translate(0, -50%)",
      zIndex: 3,
    },
    "(max-width: 640px)": {
      left: 0,
      top: 0,
      marginTop: "20px",
      marginLeft: "4vw",
    },
  },
});

export const backBtn = style({
  cursor: "pointer",
  transition: "fill 0.2s",
  stroke: vars.themeColor.borderColor.hoverColor,
  strokeWidth: 1.5,
  ":hover": {
    fill: vars.themeColor.borderColor.hoverColor,
  },
});
