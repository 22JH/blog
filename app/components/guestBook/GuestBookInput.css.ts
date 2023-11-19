import { vars } from "@/app/styles/themes/theme.css";
import { style } from "@vanilla-extract/css";

export const guestBookInputContainer = style({
  width: "45vw",
  minWidth: "500px",
  position: "fixed",
  bottom: "40px",
  height: "fit-content",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  "@media": {
    "(max-width: 640px)": {
      bottom: "70px",
      width: "90vw",
      minWidth: "100px",
    },
  },
});

export const guestComment = style({
  flex: 1,
  backgroundColor: vars.themeColor.boxColor.notHoverColor,
  backdropFilter: "blur(15px)",
  color: vars.themeColor.fontColor.textColor,
  border: vars.themeColor.borderColor.notHoverColor,
  borderWidth: 1,
  borderStyle: "solid",
  borderRadius: "10px",
  height: "50px",
  padding: "0px 20px 0px 15px",
  resize: "none",
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
  backdropFilter: "blur(15px)",
});
