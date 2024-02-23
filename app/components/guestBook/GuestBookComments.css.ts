import { vars } from "@/app/styles/themes/theme.css";
import { style } from "@vanilla-extract/css";

export const guestBooks = style({
  display: "flex",
  flexDirection: "column",
  marginBottom: "120px",
  paddingBottom: "10px",
  borderBottom: vars.themeColor.borderColor.notHoverColor,
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  "::-webkit-scrollbar": {
    display: "none",
  },
  "@media": {
    "(max-width: 640px)": {
      marginBottom: "70px",
    },
  },
});

export const guestBook = style({
  display: "flex",
  flexDirection: "row",
  margin: "15px 0",
  "@media": {
    "(max-width: 640px)": {
      margin: "10px 0",
    },
  },
});
export const gusetBookThumbnail = style({
  marginRight: "10px",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  overflow: "hidden",
});

export const guestBookInfo = style({
  display: "flex",
  flexDirection: "column",
});

export const nameAndDate = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  marginBottom: "5px",
});

export const guestBookText = style({
  backgroundColor: vars.themeColor.backgroundColor.textBoxColor,
  borderRadius: "10px",
  overflowWrap: "break-word",
  maxWidth: "35vw",
  padding: "10px",
  fontSize: "16px",
  display: "flex",
  flexDirection: "row",
  "@media": {
    "(max-width: 640px)": {
      maxWidth: "70vw",
    },
  },
});

export const name = style({
  color: vars.themeColor.fontColor.accentColor,
  marginRight: "5px",
});

export const date = style({
  color: vars.themeColor.fontColor.subColor,
  fontSize: "12px",
});
