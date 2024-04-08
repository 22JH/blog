import { globalStyle, style } from "@vanilla-extract/css";

export const titleInput = style({
  width: "100%",
  height: "8vh",
  fontSize: "5vh",
  backgroundColor: "rgba(16, 16, 16)",
  color: "rgba(236, 236, 236)",
  paddingRight: "10px",
});

export const editorContainer = style({
  backgroundColor: "rgba(16, 16, 16)",
  flex: 1,
});

export const confirmButton = style({
  position: "fixed",
  bottom: 0,
  right: 0,
  height: "50px",
});

globalStyle(`.toastui-editor > *`, {
  color: "white",
});

globalStyle(".toastui-editor-contents > *", {
  color: "white !important",
});

globalStyle(".toastui-editor-contents > h2", {
  fontSize: "28px",
});

globalStyle(".toastui-editor-md-code-block-line-background", {
  backgroundColor: "rgb(24, 24, 24)",
});
globalStyle(".toastui-editor-defaultUI", {
  border: "none",
});

globalStyle(`.toastui-editor-contents pre`, {
  backgroundColor: "rgb(24, 24, 24)",
  margin: "0 10px",
});
globalStyle(`.operator`, {
  backgroundColor: "rgb(24, 24, 24) !important",
});
