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
import * as styles from "./DetailViewer.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

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
    <div className={styles.detailViewerContainer}>
      <div className={styles.customViewer}>
        <Viewer
          height="100%"
          initialValue={post?.content || ""}
          plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        />
      </div>
      <div className={styles.detailNeighborPostFrame}>
        <div className={styles.detailNeighborPostBox}>
          {previousPostTitle && (
            <Link
              href={changeKrUrl(previousPostTitle)}
              className={styles.detailNeighborPostBoxLink}
              style={{ alignItems: "flex-start" }}
              scroll={true}
            >
              <span className={styles.detailNeighborPostDirection}>
                Previous
              </span>
              <h3 className={styles.detailNeighborPostText}>
                {previousPostTitle}
              </h3>
            </Link>
          )}
        </div>
        <div className={styles.detailNeighborPostBox}>
          {nextPostTitle && (
            <Link
              href={changeKrUrl(nextPostTitle)}
              className={styles.detailNeighborPostBoxLink}
              style={assignInlineVars({ alignItems: "flex-end" })}
              scroll={true}
            >
              <span className={styles.detailNeighborPostDirection}>Next</span>
              <h3
                className={styles.detailNeighborPostText}
                style={assignInlineVars({ direction: "ltr", textAlign: "end" })}
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
