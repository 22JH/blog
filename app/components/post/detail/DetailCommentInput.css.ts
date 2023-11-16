import { createVar, style } from "@vanilla-extract/css";

export const thumbnailBorder = createVar();

export const detailCommentContainer = style({
  flex: 1,
  height: "50px",
  display: "flex",
  flexDirection: "column",
  marginTop: "5px",
  marginBottom: "80px",
});

export const commentInputContainer = style({
  display: "flex",
  position: "relative",
  flexDirection: "row",
  alignItems: "center",
});

export const commentThumbnail = style({
  borderRadius: "50%",
  overflow: "hidden",
  margin: "5px 10px 5px 0",
  position: "relative",
  width: "45px",
  height: "45px",
  border: thumbnailBorder,
});

export const comment = style({
  flex: 1,
  backgroundColor: "transparent",
  height: "fit-content",
  color: "white",
  border: "none",
  borderBottom: "1px solid rgb(64, 64, 64)",
  transition: "all 0.2s",
  marginTop: "10px",
  paddingBottom: "5px",
  position: "relative",
  paddingRight: "30px",
  fontSize: "16px",
  "::placeholder": {
    color: "rgb(64, 64, 64)",
  },
  ":focus": {
    borderBottom: "1px solid white",
  },
});

export const commentCount = style({
  color: "white",
});

export const submitBtn = style({
  backgroundColor: "transparent",
  position: "absolute",
  right: "5px",
  cursor: "pointer",
});
