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
  color: "rgba(236, 236, 236)",
  fontWeight: 500,
  textTransform: "uppercase",
  marginTop: "10px",
  marginLeft: "10px",
  opacity: 0,
  animation: `${slideInFromLeft} 1s cubic-bezier(0.145, 0.86, 0.43, 1) forwards`,
  transform: "translateX(-5%)",
});

export const postConatiner = style({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  position: "relative",
});

export const postCategory = style({
  margin: 0,
  fontSize: "16px",
  color: "rgba(56, 56, 56)",
  marginBottom: "15px",
  fontWeight: 600,
});

export const post = style({
  width: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "row",
  height: "fit-content",
  padding: "20px 10px 35px 10px",
  margin: "15px 0",
  borderBottom: "1px solid rgba(67, 67, 67, 0.5)",
  ":hover": {
    borderBottom: "1px solid white",
    transition: "0.3s all",
  },
  "@media": {
    "(max-width: 802px)": {
      flexDirection: "column",
      paddingBottom: "30px",
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
  width: "180px",
  height: "180px",
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
  fontSize: "16px",
  marginBottom: "10px",
  color: "rgb(236, 236, 236)",
});

export const date = style({
  whiteSpace: "nowrap",
  color: "rgba(94, 94, 94)",
  marginLeft: "10px",
});

export const categoryFrame = style({
  display: "flex",
  flexDirection: "row",
});

export const previewContent = style({
  height: "100px",
  width: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontWeight: 300,
  "@media": {
    "(max-width: 802px)": {
      maxHeight: 50,
      fontSize: 14,
    },
  },
});
