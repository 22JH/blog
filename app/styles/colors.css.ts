import { styleVariants } from "@vanilla-extract/css";

export const white = styleVariants({
  100: { color: "rgb(226,226,266)" },
  200: { color: "rgb(220,220,220)" },
  300: { color: "rgb(200,200,200)" },
});

export const grey = styleVariants({
  100: { color: "rgb(96,96,96)" },
  200: { color: "rgb(56,56,56)" },
  300: { color: "rgb(30,30,30)" },
});
