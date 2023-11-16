import { keyframes } from "@vanilla-extract/css";
import { style } from "@vanilla-extract/css";

const showup = keyframes({
  "0%": {
    transform: "translateY(100%)",
  },
  "100%": {
    transform: "translateY(0)",
  },
});
export const wrtieDetailContainer = style({
  zIndex: 3,
  backgroundColor: "rgb(33, 33, 33)",
  borderRadius: "10px",
  position: "absolute",
  width: "100vw",
  height: "100dvh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  animation: `${showup} 0.25s ease-in 0s 1 normal forwards running`,
});

export const detailFrame = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  width: "768px",
});

export const thumbnailContent = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  marginRight: "20px",
});

export const thumbnailPreview = style({
  position: "relative",
  borderRadius: "5px",
  overflow: "hidden",
  width: "180px",
  height: "180px",
  display: "block",
});
export const contentPreview = style({
  width: "100%",
  flex: 1,
});
export const categoryHashtag = style({
  flex: 1,
  marginLeft: "20px",
});

export const previewText = style({
  width: "100%",
  // height: "100px",
  backgroundColor: "black",
  height: "fit",
  color: "rgba(236, 236, 236)",
  border: "none",
  resize: "none",
  outline: "none",
});

export const categoryText = style({
  margin: 0,
  color: "rgb(236, 236, 236)",
});
