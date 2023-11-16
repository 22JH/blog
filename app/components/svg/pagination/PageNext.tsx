/** @jsxImportSource @emotion/react */

"use client";

import { css } from "@emotion/react";

const pageNextContainer = css`
  cursor: pointer;
  &:hover {
    path {
      fill: rgb(200, 200, 200);
    }
  }
`;

export default function PageNext() {
  return (
    <div css={pageNextContainer}>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 7.5L4 0V15L12 7.5Z" fill="rgb(42,42,42)" />
      </svg>
    </div>
  );
}
