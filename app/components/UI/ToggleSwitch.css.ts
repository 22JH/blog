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
  border: "2px solid rgb(226,226,226)",
  borderRadius: "20px",
  transition: "0.2s",
  ":hover": {
    background: "rgb(56,56,56)",
  },
  selectors: {
    [`${toggleSwitch}:checked + &`]: {
      background: "transparent",
      border: "2px solid rgb(226,226,226)",
    },
    [`${toggleSwitch}:checked+&:hover`]: {
      background: "rgb(56,56,56)",
    },
  },
});

export const onOffBtn = style({
  position: "absolute",
  top: "3px",
  left: "3px",
  display: "inline-block",
  width: "15px",
  height: "15px",
  borderRadius: "20px",
  background: "rgb(226,226,226)",
  transition: "0.2s",
  selectors: {
    [`${toggleSwitch}:checked+${switchLabel} > &`]: {
      left: "30px",
      background: "rgb(226,226,226)",
      boxShadow: "1px 2px 3px #00000020",
    },
  },
});
