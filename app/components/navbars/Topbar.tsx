/**@jsxImportSource @emotion/react */

"use client";

import Link from "next/link";
import { sidebarLinks } from "../../constants/index";
import { usePathname } from "next/navigation";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as styles from "./Topbar.css";

export default function Topbar() {
  const pathname = usePathname();
  return (
    <nav className={styles.topbar}>
      <Link href="/" className={styles.topbarLogo}>
        <div>
          <h1>이주형</h1>
        </div>
      </Link>
      <div className={styles.topbarLargeScreen}>
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes("/post") && link.route.includes("/post")) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={styles.topBarContent}
            >
              <link.imgURL aria-label={link.label} />
              <p
                style={assignInlineVars({
                  color: isActive ? "rgb(226,226,226)" : "#464646",
                })}
                className={styles.topBarText}
              >
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
