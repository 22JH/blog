import { vars } from "@/app/styles/themes/theme.css";
import { createVar, keyframes, style } from "@vanilla-extract/css";

const slideInFromLeft = keyframes({
  "0%": {
    transform: "translateX(-100%)",
    opacity: 0,
  },
  "100%": {
    transform: "translateX(0%)",
    opacity: 1,
  },
});
export const categoryContainer = style({
  position: "fixed",
  left: "calc(27.5vw - 190px)",
  top: "30%",
  overflow: "scroll",
  width: "fit-content",
  "::-webkit-scrollbar": {
    display: "none",
  },
  "@media": {
    "(max-width: 1020px)": {
      position: "initial",
      transform: "translate(0, 0)",
      display: "flex",
      marginBottom: "16px",
      width: "100%",
    },
  },
});

export const categories = style({
  paddingInlineStart: 0,
  marginTop: 0,
  "@media": {
    "(max-width: 1020px)": {
      width: "100%",
      display: "flex",
      margin: 0,
      padding: 0,
    },
  },
});

export const category = style({
  width: "fit-content",
  listStyleType: "none",
  margin: "8px 0",
  opacity: 0,
  animation: `${slideInFromLeft} 0.4s cubic-bezier(0.145, 0.86, 0.43, 1) forwards`,
  transform: "translateX(-100%)",
  // textWrap: "nowrap",
});

export const categoryColor = createVar();

export const categoryText = style({
  color: categoryColor,
  textDecoration: "none",
  display: "flex",
  whiteSpace: "nowrap",
  // fontSize: 16,

  "@media": {
    "(max-width: 1020px)": {
      display: "inline-block",
      marginRight: "10px",
    },
  },
});

// export const categoryGlassContainer = style({
//   position: "sticky",
//   width: "100%",
//   height: 45,
// });

// export const categoryGlass = style({
//   position: "sticky",
//   width: "100%",
//   height: 15,
//   backgroundColor: vars.themeColor.backgroundColor.glassColor,
//   backdropFilter: "blur(2px)",
//   zIndex: 4,
//   display: "flex",
// });
