import { vars } from "@/app/styles/themes/theme.css";
import { style, globalStyle } from "@vanilla-extract/css";

export const detailViewerContainer = style({
  marginTop: 30,
  display: "flex",
  flexDirection: "column",
  borderBottom: vars.themeColor.borderColor.notHoverColor,
  borderBottomStyle: "solid",
  borderBottomWidth: "1px",
});

export const detailNeighborPostFrame = style({
  display: "flex",
  flexDirection: "row",
  height: "70px",
  gap: "0 20px",
  margin: "45px 0 30px 0",
  justifyContent: "space-between",
});

export const detailNeighborPostBox = style({
  flex: 1,
  width: "100%",
  overflow: "hidden",
});

export const detailNeighborPostBoxLink = style({
  borderRadius: "5px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: vars.themeColor.boxColor.notHoverColor,
  padding: "5px 15px",
  justifyContent: "space-evenly",
  transition: "0.1s all",
  ":hover": {
    backgroundColor: vars.themeColor.boxColor.hoverColor,
  },
});

export const detailNeighborPostDirection = style({
  color: vars.themeColor.fontColor.accentSubColor,
});

export const detailNeighborPostText = style({
  whiteSpace: "nowrap",
  width: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontSize: "16px",
  color: vars.themeColor.fontColor.textColor,
});

export const customViewer = style({});

globalStyle(`${customViewer} > *`, {
  color: vars.themeColor.fontColor.textColor,
});
globalStyle(`${customViewer} pre`, {
  backgroundColor: vars.themeColor.backgroundColor.accentColor,
});

globalStyle(`${customViewer} p`, {
  fontSize: 16,
  color: vars.themeColor.fontColor.textColor,
  marginTop: 5,
});

globalStyle(`${customViewer} .operator`, {
  backgroundColor: "inherit",
});

globalStyle(`${customViewer} code`, {
  backgroundColor: vars.themeColor.backgroundColor.accentColor,
  color: vars.themeColor.borderColor.hoverColor + "!important",
});
globalStyle(`${customViewer} h1`, {
  color: vars.themeColor.fontColor.accentColor,
  marginBottom: 18,
});
globalStyle(`${customViewer} h2`, {
  color: vars.themeColor.fontColor.accentColor,
  marginBottom: 18,
});
globalStyle(`${customViewer} h3`, {
  color: vars.themeColor.fontColor.accentColor,
  marginBottom: 18,
});
globalStyle(`${customViewer} h4`, {
  color: vars.themeColor.fontColor.accentColor,
  marginBottom: 18,
});
globalStyle(`${customViewer} h5`, {
  color: vars.themeColor.fontColor.accentColor,
  marginBottom: 18,
});
globalStyle(`${customViewer} ul`, {
  marginTop: 10,
});
globalStyle(`${customViewer} li`, {
  marginTop: 10,
});
