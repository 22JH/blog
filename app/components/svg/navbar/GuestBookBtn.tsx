"use client";

import { assignInlineVars } from "@vanilla-extract/dynamic";
import { usePathname } from "next/navigation";
import { topBarText } from "../../navbars/Topbar.css";
import { vars } from "@/app/styles/themes/theme.css";

export default function GuestBookBtn() {
  const pathname = usePathname();
  const isActive = pathname === "/guest-book";
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1236_3779)">
          <path
            d="M4 3.5V0.5"
            stroke={
              isActive
                ? vars.themeColor.buttonColor.activeColor
                : vars.themeColor.buttonColor.notActiveColor
            }
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 3.5V0.5"
            stroke={
              isActive
                ? vars.themeColor.buttonColor.activeColor
                : vars.themeColor.buttonColor.notActiveColor
            }
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 3.5V0.5"
            stroke={
              isActive
                ? vars.themeColor.buttonColor.activeColor
                : vars.themeColor.buttonColor.notActiveColor
            }
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 2H1.5C0.947715 2 0.5 2.44772 0.5 3V12.5C0.5 13.0523 0.947715 13.5 1.5 13.5H12.5C13.0523 13.5 13.5 13.0523 13.5 12.5V3C13.5 2.44772 13.0523 2 12.5 2Z"
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
          <clipPath id="clip0_1236_3779">
            <rect width="24" height="24" fill="white" />
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
        GuestBook
      </p>
    </>
  );
}
