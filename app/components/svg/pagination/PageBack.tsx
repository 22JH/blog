"use client";

import * as styles from "./PageBtn.css";

export default function PageBack() {
  return (
    <div className={styles.pageBtnContainer}>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 7.5L11 0V15L3 7.5Z" className={styles.pageBtn} />
      </svg>
    </div>
  );
}
