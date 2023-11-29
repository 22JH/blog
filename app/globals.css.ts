import { globalStyle, fontFace } from "@vanilla-extract/css";
import { vars } from "./styles/themes/theme.css";

// const NotoSans = fontFace([
//   {
//     src: 'url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap")',
//     fontWeight: "light",
//   },
//   {
//     src: 'url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap")',
//     fontWeight: "normal",
//   },
//   {
//     src: 'url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&display=swap")',
//     fontWeight: "bold",
//   },
// ]);

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  overflowX: "hidden",
});

globalStyle("html::-webkit-scrollbar", {
  display: "none",
});

globalStyle("*", {
  boxSizing: "border-box",
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  // fontFamily: NotoSans,
});

globalStyle("a", {
  textDecoration: "none",
});

globalStyle("h1, h2, h3, h4, h5, p", {
  margin: 0,
});

globalStyle("h1, h2, h3, h4, h5", {
  color: vars.themeColor.fontColor.accentColor,
});

globalStyle("p, span", {
  color: vars.themeColor.fontColor.textColor,
});
