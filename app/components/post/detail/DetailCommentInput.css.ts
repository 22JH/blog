import { vars } from "@/app/styles/themes/theme.css";
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
  color: vars.themeColor.fontColor.textColor,
  border: "none",
  borderBottom: vars.themeColor.borderColor.notHoverColor,
  borderBottomStyle: "solid",
  borderBottomWidth: 1,
  transition: "all 0.2s",
  marginTop: "10px",
  paddingBottom: "5px",
  position: "relative",
  paddingRight: "30px",
  fontSize: "16px",
  "::placeholder": {
    color: vars.themeColor.fontColor.subColor,
  },
  ":focus": {
    outline: "none",
    borderBottom: vars.themeColor.borderColor.hoverColor,
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
  },
});

export const commentCount = style({
  color: vars.themeColor.fontColor.accentColor,
});

export const submitBtn = style({
  backgroundColor: "transparent",
  position: "absolute",
  right: "5px",
  cursor: "pointer",
});
