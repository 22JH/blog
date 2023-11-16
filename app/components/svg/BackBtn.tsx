/** @jsxImportSource @emotion/react */

"use client";
import { css } from "@emotion/react";
import { usePathname, useRouter } from "next/navigation";

const backBtnContainer = css`
  position: fixed;
  left: calc(27.5vw - 170px);
  top: 20%;
  opacity: 0;
  animation: slideInFromLeft 1s 0.2s cubic-bezier(0.145, 0.86, 0.43, 1) forwards;
  background-color: transparent;
  @media (max-width: 820px) {
    left: calc(27.5vw - 140px);
    top: 50%;
    transform: translate(0, -50%);
    z-index: 3;
  }
  @media (max-width: 640px) {
    left: 0;
    top: 0;
    margin-top: 20px;
    margin-left: 4vw;
  }
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-50%);
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }
  path {
    cursor: pointer;
    transition: fill 0.2s;
    &:hover {
      fill: white;
    }
  }
`;

export default function BackBtn({ color = "white" }: { color: string }) {
  const pathname = usePathname();
  const router = useRouter();
  if (!pathname.includes("/detail")) return;
  return (
    <div css={backBtnContainer} onClick={() => router.back()}>
      <svg
        width="61"
        height="40"
        viewBox="0 0 61 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.6756 12.0594V17.772H41.401C41.5366 17.772 41.6608 17.772 41.7907 17.772C41.9036 17.772 42.0109 17.772 42.1238 17.7757C42.366 17.7782 42.6076 17.795 42.8466 17.826C43.0841 17.8598 43.3142 17.9209 43.5299 18.0075C43.7453 18.0961 43.9417 18.2119 44.1115 18.3504C44.2813 18.4896 44.4241 18.6484 44.5351 18.8217C44.6414 18.9972 44.7174 19.1835 44.7609 19.3755C44.7985 19.5681 44.8193 19.7626 44.823 19.9575C44.823 20.0482 44.8287 20.1362 44.8287 20.2251V27.5739C44.8287 27.6646 44.823 27.7522 44.823 27.8415C44.8193 28.0365 44.7985 28.2309 44.7609 28.4235C44.7174 28.6154 44.6414 28.8016 44.5351 28.9769C44.4241 29.1502 44.2813 29.309 44.1115 29.4482C43.9418 29.5868 43.7454 29.7026 43.5299 29.7911C43.3142 29.8777 43.0841 29.9388 42.8466 29.9726C42.6076 30.0038 42.366 30.0207 42.1238 30.0234C42.0109 30.0234 41.9036 30.027 41.7907 30.027C41.6608 30.027 41.5366 30.027 41.401 30.027H34.6756V35.8299C34.6756 36.4169 33.1001 37.1698 32.2249 36.4649C31.4851 35.8657 19.7961 26.4481 17.3623 24.4772C17.1408 24.3324 16.9923 24.1278 16.9445 23.9016V23.8861C16.9577 23.6904 17.0749 23.5087 17.2663 23.3872C19.7001 21.4163 31.4851 11.9664 32.2249 11.3668C33.1001 10.6614 34.6756 11.252 34.6756 12.0594Z"
          fill="transparent"
          stroke={color}
        />
      </svg>
    </div>
  );
}
