import { vars } from "@/app/styles/themes/theme.css";
import { style } from "@vanilla-extract/css";

export const categoryContainer = style({
  position: "fixed",
  left: "calc(27.5vw - 200px)",
  top: "27%",
  overflow: "scroll",
  width: "fit-content",
  height: "51dvh",
  paddingRight: 10,
  "::-webkit-scrollbar": {
    display: "none",
  },
  "@media": {
    "(max-width: 1020px)": {
      position: "initial",
      transform: "translate(0, 0)",
      display: "flex",
      height: "fit-content",
      marginBottom: "16px",
      width: "100%",
    },
    "(min-width: 1020px)": {
      ":before": {
        content: "",
        position: "sticky",
        top: -1,
        left: 0,
        width: "100%",
        height: "30px",
        display: "block",
        background: vars.themeColor.backgroundColor.glassGradientColorTop,
        zIndex: 5,
      },
      ":after": {
        content: "",
        position: "sticky",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "45px",
        display: "block",
        transition: "0.2s all",
        background: vars.themeColor.backgroundColor.glassGradientColorBottom,
        zIndex: 5,
      },
    },
  },
});
