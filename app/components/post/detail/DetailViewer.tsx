/** @jsxImportSource @emotion/react */

"use client";
import { Viewer } from "@toast-ui/react-editor";
// @ts-ignore
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "prismjs/themes/prism.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import Prism from "prismjs";
import Link from "next/link";
import { changeKrUrl } from "@/app/lib/changeKrUrl";
import {
  customViewer,
  detailNeighborPostBox,
  detailNeighborPostBoxLink,
  detailNeighborPostFrame,
  detailNeighborPostText,
  detailViewerContainer,
} from "./DetailViewer.css";

interface PropType {
  post: {
    content: string;
  };
  previousPostTitle: string | null;
  nextPostTitle: string | null;
}

export default function DetailViewer({
  post,
  previousPostTitle,
  nextPostTitle,
}: PropType) {
  return (
    <div className={detailViewerContainer}>
      <div className={customViewer}>
        <Viewer
          height="100%"
          initialValue={post?.content || ""}
          plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        />
      </div>
      <div className={detailNeighborPostFrame}>
        <div className={detailNeighborPostBox}>
          {previousPostTitle && (
            <Link
              href={changeKrUrl(previousPostTitle)}
              className={detailNeighborPostBoxLink}
              style={{ alignItems: "flex-start" }}
            >
              <span>Previous</span>
              <h3 className={detailNeighborPostText}>{previousPostTitle}</h3>
            </Link>
          )}
        </div>
        <div className={detailNeighborPostBox}>
          {nextPostTitle && (
            <Link
              href={changeKrUrl(nextPostTitle)}
              className={detailNeighborPostBoxLink}
              style={{ alignItems: "flex-end" }}
            >
              <span>Next</span>
              <h3
                className={detailNeighborPostText}
                style={{ direction: "ltr", textAlign: "end" }}
              >
                {nextPostTitle}
              </h3>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
