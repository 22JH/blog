import { vars } from "@/app/styles/themes/theme.css";
import { style } from "@vanilla-extract/css";

export const resumeContainer = style({
  borderRadius: 5,
  display: "flex",
  flexDirection: "column",
  // marginBottom: 120,
});

export const resumeTitle = style({
  margin: "10px 0",
  fontSize: 22,
});

export const linkBtnFrame = style({
  display: "flex",
  columnGap: 15,
  borderBottom: vars.themeColor.borderColor.hoverColor,
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  paddingBottom: 5,
  height: "auto",
});

export const linkBtn = style({
  display: "flex",
  alignItems: "center",
  columnGap: 2,
  color: vars.themeColor.buttonColor.activeColor,
});
export const resumeSubTitle = style({
  marginBottom: 12,
  marginTop: 20,
  fontSize: 21,
  textDecoration: "underline",
});

export const resumeAccent = style({
  margin: "5px 0",
  fontSize: 17,
});
export const resumeText = style({
  fontSize: 14,
  textIndent: 10,
  lineHeight: "30px",
  color: vars.themeColor.fontColor.middleAccentColor,
  "::before": {
    content: "• ",
  },
  "@media": {
    "(max-width: 640px)": {
      lineHeight: "26px",
    },
  },
});
