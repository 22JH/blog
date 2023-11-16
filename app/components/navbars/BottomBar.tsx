/**@jsxImportSource @emotion/react */

"use client";

import { css } from "@emotion/react";
import Link from "next/link";
import { sidebarLinks } from "../../constants/index";

const topbar = () => css`
  @media (min-width: 640px) {
    & {
      display: none;
    }
  }
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 68px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgba(16, 16, 16, 0.8);
  z-index: 1;
  backdrop-filter: blur(15px);

  .bottom-bar-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    flex: 1;
    p {
      margin-left: 10px;
    }
    .is-active-p {
      color: rgba(236, 236, 236);
    }
    .not-active-p {
      color: #464646;
    }
  }
`;

export default function Bottombar() {
  return (
    <nav css={topbar}>
      {sidebarLinks.map((link) => {
        return (
          <Link
            href={link.route}
            key={link.label}
            className="bottom-bar-content"
          >
            <link.imgURL />
          </Link>
        );
      })}
    </nav>
  );
}
