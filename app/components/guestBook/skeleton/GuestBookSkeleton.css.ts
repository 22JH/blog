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
      marginBottom: "140px",
    },
  },
});

export const guestBook = style({
  display: "flex",
  flexDirection: "row",
  margin: "15px 0",
});
export const gusetBookThumbnail = style({
  marginRight: "10px",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  overflow: "hidden",
  backgroundColor: vars.themeColor.backgroundColor.accentColor,
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
  backgroundColor: vars.themeColor.backgroundColor.accentColor,
  height: 16,
  width: 50,
  borderRadius: 15,
});

export const guestBookText = style({
  backgroundColor: vars.themeColor.backgroundColor.accentColor,
  borderRadius: 15,
  width: "20vw",
  height: 30,
  padding: "10px",
  "@media": {
    "(max-width: 640px)": {
      maxWidth: "70vw",
    },
  },
});
