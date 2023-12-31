import { vars } from "@/app/styles/themes/theme.css";
import { style } from "@vanilla-extract/css";

export const guestBookInputContainer = style({
  width: "45vw",
  position: "fixed",
  bottom: "40px",
  height: "fit-content",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  minWidth: "576px",
  "@media": {
    "(max-width: 640px)": {
      bottom: "80px",
      width: "90vw",
      minWidth: "100px",
    },
  },
});

export const guestComment = style({
  flex: 1,
  backgroundColor: vars.themeColor.boxColor.notHoverColor,
  color: vars.themeColor.fontColor.textColor,
  border: vars.themeColor.borderColor.notHoverColor,
  borderWidth: 1,
  borderStyle: "solid",
  borderRadius: "10px",
  height: "50px",
  padding: "0px 20px 0px 15px",
  resize: "none",
  fontSize: 16,
  width: 0,
  ":focus": {
    outline: "none",
  },
});
export const sendBtn = style({
  position: "absolute",
  top: "55%",
  right: "10px",
  transform: "translate(0, -50%)",
});

export const commentThumbnail = style({
  borderRadius: "50%",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  width: "45px",
  marginRight: "10px",
  height: "45px",
  borderColor: vars.themeColor.borderColor.notHoverColor,
  borderWidth: 1,
  borderStyle: "solid",
  backdropFilter: "blur(15px)",
});
