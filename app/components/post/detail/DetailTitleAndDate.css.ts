import { style } from "@vanilla-extract/css";

export const titleFrame = style({
  width: "100%",
  height: "fit-content",
  margin: "16px 0 16px 0",
  display: "flex",
  alignItems: "center",
  color: "rgba(236, 236, 236)",
});

export const title = style({
  fontSize: "25px",
  width: "100%",
  overflowWrap: "break-word",
});

export const categoryFrame = style({
  display: "flex",
  flexDirection: "row",
  width: "fit-content",
});

export const category = style({
  marginRight: "10px",
  color: "rgba(94, 94, 94)",
});

export const dateAndTitleFrame = style({
  height: "fit-content",
  color: "rgba(94, 94, 94)",
  padding: "0.25rem 10px 0.75rem 0",
  textAlign: "end",
  borderBottom: "1px solid rgba(94, 94, 94)",
  display: "flex",
  justifyContent: "space-between",
});
