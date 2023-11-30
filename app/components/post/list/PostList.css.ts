import { vars } from "@/app/styles/themes/theme.css";
import { keyframes, style } from "@vanilla-extract/css";

const slideInFromLeft = keyframes({
  "0%": {
    transform: "translateX(-5%)",
    opacity: 0,
  },
  "100%": {
    transform: "translateX(0%)",
    opacity: 1,
  },
});

export const categoryTitle = style({
  // fontWeight: 500,
  textTransform: "uppercase",
  marginTop: 10,
  marginLeft: 10,
  opacity: 0,
  animation: `${slideInFromLeft} 1s cubic-bezier(0.145, 0.86, 0.43, 1) forwards`,
  transform: "translateX(-5%)",
});

export const postContainer = style({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  position: "relative",
});

export const postCategory = style({
  margin: 0,
  fontSize: 14,
  height: "fit-content",
  color: vars.themeColor.fontColor.accentSubColor,
  backgroundColor: vars.themeColor.backgroundColor.accentColor,
  borderRadius: 5,
  padding: "2px 5px",
  // fontWeight: 600,
  whiteSpace: "nowrap",
});

export const post = style({
  width: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "row",
  height: "fit-content",
  padding: "20px 10px 25px 10px",
  margin: "15px 0",
  borderBottomWidth: 1.5,
  borderBottomStyle: "solid",
  borderBottomColor: vars.themeColor.borderColor.notHoverColor,

  "@media": {
    "(max-width: 820px)": {
      flexDirection: "column",
      paddingBottom: "30px",
    },
    "(min-width: 820px)": {
      ":hover": {
        borderBottomColor: vars.themeColor.borderColor.hoverColor,
        transition: "0.3s all",
      },
    },
  },
});

export const thumbnail = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  borderRadius: "5px",
  overflow: "hidden",
  width: "140px",
  height: "140px",
  aspectRatio: "1/1",
  "@media": {
    "(max-width: 820px)": {
      width: "100%",
      height: "150px",
    },
  },
});

export const textInfo = style({
  flex: 1,
  marginLeft: "15px",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  "@media": {
    "(max-width: 820px)": {
      marginLeft: 0,
    },
  },
});

export const titleAndDate = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  "@media": {
    "(max-width: 820px)": {
      marginTop: 20,
    },
  },
});

export const title = style({
  margin: 0,
  fontSize: 20,
  marginBottom: "10px",
});

export const date = style({
  color: vars.themeColor.fontColor.accentSubColor,
  whiteSpace: "nowrap",
  marginLeft: "10px",
});

export const categoryFrame = style({
  display: "flex",
  flexDirection: "row",
  gap: 5,
  marginBottom: "15px",
  overflow: "scroll",
  "::-webkit-scrollbar": {
    display: "none",
  },
});

export const previewContent = style({
  height: "100px",
  width: "100%",

  "@media": {
    "(max-width: 800px)": {
      maxHeight: 60,
      fontSize: 14,
    },
  },
});

export const previewContentText = style({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  wordBreak: "break-word",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  fontSize: 14,
  lineHeight: "22px",
});
