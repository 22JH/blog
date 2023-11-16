/** @jsxImportSource @emotion/react */

"use client";

import { css } from "@emotion/react";

const pageBackContainer = css`
  cursor: pointer;
  fill: rgb(42, 42, 42);

  &:hover {
    path {
      fill: rgb(200, 200, 200);
    }
  }
`;

export default function PageBack() {
  return (
    <div css={pageBackContainer}>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 7.5L11 0V15L3 7.5Z" fill="rgb(42,42,42)" />
      </svg>
    </div>
  );
}
