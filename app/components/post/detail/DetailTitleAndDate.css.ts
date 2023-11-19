import { vars } from "@/app/styles/themes/theme.css";
import { style } from "@vanilla-extract/css";

export const titleFrame = style({
  width: "100%",
  height: "fit-content",
  margin: "16px 0 5px 0",
  display: "flex",
  alignItems: "center",
  // color: "rgba(236, 236, 236)",
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
  gap: 5,
});

export const category = style({
  margin: 0,
  fontSize: 14,
  color: vars.themeColor.fontColor.accentSubColor,
  backgroundColor: vars.themeColor.backgroundColor.accentColor,
  borderRadius: 5,
  padding: "2px 5px",
  fontWeight: 600,
});

export const dateAndTitleFrame = style({
  height: "fit-content",
  padding: "0.25rem 10px 0.75rem 0",
  textAlign: "end",
  color: vars.themeColor.fontColor.accentSubColor,
  borderBottom: vars.themeColor.borderColor.notHoverColor,
  borderBottomStyle: "solid",
  borderBottomWidth: 1,
  display: "flex",
  justifyContent: "space-between",
});
