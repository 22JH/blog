import { style } from "@vanilla-extract/css";

export const comments = style({
  display: "flex",
  flexDirection: "column",
  color: "white",
  marginTop: "15px 0",
});

export const commentAmount = style({
  marginTop: "20px",
  color: "rgb(94, 94, 94)",
});

export const comment = style({
  margin: "5px 0",
  display: "flex",
  flexDirection: "row",
  height: "fit-content",
});

export const commenterImage = style({
  borderRadius: "50%",
  overflow: "hidden",
  margin: "5px 10px 5px 0",
  position: "relative",
  width: "45px",
  height: "45px",
});

export const commenterInfo = style({
  flex: 1,
});

export const commenterNameAndDate = style({
  display: "flex",
  alignItems: "flex-end",
  margin: "5px 0",
});

export const commenterName = style({
  fontSize: "15px",
  marginRight: "5px",
});

export const commentDate = style({
  fontSize: "12px",
  color: "rgb(100, 100, 100)",
});
export const commentText = style({
  color: "rgb(200, 200, 200)",
});
