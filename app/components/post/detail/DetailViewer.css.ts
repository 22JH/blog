import { style, globalStyle } from "@vanilla-extract/css";

export const detailViewerContainer = style({
  marginTop: 30,
  display: "flex",
  flexDirection: "column",
  borderBottom: "1px solid rgb(36, 36, 36)",
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
  backgroundColor: "rgb(30, 30, 30)",
  color: "rgb(226, 226, 226)",
  padding: "5px 15px",
  justifyContent: "space-evenly",
  transition: "0.1s all",
  ":hover": {
    backgroundColor: "rgb(94, 94, 94)",
  },
});

export const detailNeighborPostText = style({
  whiteSpace: "nowrap",
  width: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontSize: "16px",
});

export const customViewer = style({});

globalStyle(`${customViewer} > *`, {
  color: "rgba(236, 236, 236)",
});
globalStyle(`${customViewer} pre`, {
  backgroundColor: "rgb(24, 24, 24)",
});

globalStyle(`${customViewer} p`, {
  fontSize: "16px",
  color: "white",
});

globalStyle(`${customViewer} .operator`, {
  backgroundColor: "inherit",
});
