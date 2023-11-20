"use client";

import { usePathname } from "next/navigation";
import * as styles from "./Footer.css";

export default function Footer() {
  const pathName = usePathname();
  if (pathName === "/guest-book") {
    return;
  }
  return <div className={styles.FooterContainer}>© 2023 powered by Joo</div>;
}
