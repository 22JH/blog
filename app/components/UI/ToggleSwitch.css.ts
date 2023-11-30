import { vars } from "@/app/styles/themes/theme.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  position: "absolute",
  textAlign: "center",
  zIndex: 1,
  right: 5,
  top: 5,
});

export const toggleSwitch = style({
  position: "absolute",
  WebkitAppearance: "none",
});

export const switchLabel = style({
  position: "relative",
  cursor: "pointer",
  display: "inline-block",
  width: "53px",
  height: "23px",
  background: "transparent",
  border: vars.themeColor.borderColor.hoverColor,
  borderWidth: 1,
  borderStyle: "solid",
  borderRadius: "20px",
  transition: "0.2s",
  "@media": {
    "(min-width: 820px)": {
      ":hover": {
        background: vars.themeColor.backgroundColor.accentColor,
      },
    },
  },

  selectors: {
    [`${toggleSwitch}:checked + &`]: {
      background: vars.themeColor.borderColor.hoverColor,
      border: vars.themeColor.borderColor.hoverColor,
    },
  },
});

export const onOffBtn = style({
  position: "absolute",
  top: "3px",
  left: "4px",
  display: "inline-block",
  width: "15px",
  height: "15px",
  borderRadius: "20px",
  background: vars.themeColor.borderColor.hoverColor,
  transition: "0.2s",
  selectors: {
    [`${toggleSwitch}:checked+${switchLabel} > &`]: {
      left: 35,
      background: vars.themeColor.backgroundColor.bodyColor,
    },
  },
});
