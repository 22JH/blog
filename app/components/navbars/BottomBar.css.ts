import { vars } from "@/app/styles/themes/theme.css";
import { style } from "@vanilla-extract/css";

export const bottomBar = style({
  "@media": {
    "(min-width: 640px)": {
      display: "none",
    },
  },
  position: "fixed",
  bottom: 0,
  width: "100vw",
  height: "68px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: vars.themeColor.backgroundColor.navbarColor,
  zIndex: 1,
  backdropFilter: "blur(15px)",
});
export const bottomBarContent = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px 20px",
  flex: 1,
});
