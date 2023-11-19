import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./styles/themes/theme.css";

globalStyle("html, body", {
  margin: 0,
  padding: 0,
});
globalStyle("body::-webkit-scrollbar", {
  display: "none",
});

globalStyle("*", {
  boxSizing: "border-box",
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
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

globalStyle("body, html", {
  backgroundColor: vars.themeColor.backgroundColor.bodyColor,
});
