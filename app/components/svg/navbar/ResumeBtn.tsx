"use client";

import { usePathname } from "next/navigation";
import { topBarText } from "../../navbars/Topbar.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { vars } from "@/app/styles/themes/theme.css";

export default function ResumeBtn() {
  const pathname = usePathname();
  const isActive = pathname === "/resume";
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 15 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1236_2171)">
          <path
            d="M13 0.5H2C1.44772 0.5 1 0.947715 1 1.5V12.5C1 13.0523 1.44772 13.5 2 13.5H13C13.5523 13.5 14 13.0523 14 12.5V1.5C14 0.947715 13.5523 0.5 13 0.5Z"
            stroke={
              isActive
                ? vars.themeColor.buttonColor.activeColor
                : vars.themeColor.buttonColor.notActiveColor
            }
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 4.5H10"
            stroke={
              isActive
                ? vars.themeColor.buttonColor.activeColor
                : vars.themeColor.buttonColor.notActiveColor
            }
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 7H10"
            stroke={
              isActive
                ? vars.themeColor.buttonColor.activeColor
                : vars.themeColor.buttonColor.notActiveColor
            }
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 9.5H10"
            stroke={
              isActive
                ? vars.themeColor.buttonColor.activeColor
                : vars.themeColor.buttonColor.notActiveColor
            }
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1236_2171">
            <rect
              width="14"
              height="14"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
      <p
        style={assignInlineVars({
          color: isActive
            ? vars.themeColor.buttonColor.activeColor
            : vars.themeColor.buttonColor.notActiveColor,
        })}
        className={topBarText}
      >
        Resume
      </p>
    </>
  );
}
