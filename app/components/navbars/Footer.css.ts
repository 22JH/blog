import { vars } from "@/app/styles/themes/theme.css";
import { style } from "@vanilla-extract/css";

export const FooterContainer = style({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  height: 20,
  fontSize: 13,
  // borderTop: vars.themeColor.borderColor.notHoverColor,
  // borderTopWidth: 0.5,
  // borderTopStyle: "solid",
  color: vars.themeColor.fontColor.accentSubColor,
  marginTop: 50,
  paddingLeft: 10,
  "@media": {
    "(max-width: 640px)": {
      marginTop: 30,
    },
  },
});
