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
    "(max-width: 820px)": {
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
  "@media": {
    "(max-width: 820px)": {
      width: "100%",
      display: "flex",
      margin: 0,
      padding: 0,
    },
  },
});

export const category = style({
  width: "auto",
  listStyleType: "none",
  margin: "10px 0",
  opacity: 0,
  animation: `${slideInFromLeft} 0.4s cubic-bezier(0.145, 0.86, 0.43, 1) forwards`,
  transform: "translateX(-100%)",
});

export const categoryColor = createVar();

export const categoryText = style({
  // textWrap: "nowrap",
  color: categoryColor,
  textDecoration: "none",
  "@media": {
    "(max-width: 820px)": {
      display: "inline-block",
      marginRight: "10px",
    },
  },
});

// @media (max-width: 820px) {
//   .categoryContainer {
//     position: initial;
//     transform: translate(0, 0);
//     display: flex;
//     margin-bottom: 16px;
//     width: 100%;
//   }
//   .categories {
//     width: 100%;
//     display: flex;
//     margin: 0;
//     padding: 0;
//   }
//   .category {
//     display: inline-block;
//     margin-right: 10px;
//   }
// }
