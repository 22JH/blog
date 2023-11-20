import { vars } from "@/app/styles/themes/theme.css";
import { style } from "@vanilla-extract/css";

export const topbar = style({
  position: "fixed",
  top: "-1px",
  width: "100vw",
  height: "80px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  backdropFilter: "blur(15px)",
  backgroundColor: vars.themeColor.backgroundColor.navbarColor,
  zIndex: 1,
  "@media": {
    "(max-width: 640px)": {
      height: 60,
    },
  },
});

export const topbarLogo = style({
  color: "white",
  marginLeft: "50px",
  "@media": {
    "(max-width: 640px)": {
      position: "absolute",
      left: "50%",
      transform: "translate(-50%, 0)",
      marginLeft: 0,
    },
  },
});

export const topbarLargeScreen = style({
  display: "flex",
  position: "absolute",
  left: "50%",
  transform: "translate(-50%, 0)",
  justifyContent: "center",
  "@media": {
    "(max-width: 640px)": {
      display: "none !important",
    },
    "(max-width: 820px)": {
      padding: "20px 25px",
    },
  },
});

export const topBarContent = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 32px",
});

export const topBarText = style({
  whiteSpace: "nowrap",
  marginLeft: "10px",
  "@media": {
    "(max-width: 820px)": {
      display: "none",
    },
  },
});
