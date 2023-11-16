"use client";

import { usePathname } from "next/navigation";

export default function HomeBtn() {
  const pathname = usePathname();
  const isActive = pathname === "/";
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1236_674)">
        <path
          d="M0.5 7L7 0.5L13.5 7"
          stroke={isActive ? "white" : "#464646"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.5 8.5V13.5H11.5V8.5"
          stroke={isActive ? "white" : "#464646"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1236_674">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
