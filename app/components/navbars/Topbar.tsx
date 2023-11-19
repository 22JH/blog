import Link from "next/link";
import { sidebarLinks } from "../../constants/index";
import * as styles from "./Topbar.css";
import ToggleBtn from "./ToggleTheme/ToggleBtn";

export default function Topbar() {
  return (
    <nav className={styles.topbar}>
      <Link href="/" className={styles.topbarLogo}>
        <div>
          <h1>이주형</h1>
        </div>
      </Link>
      <div className={styles.topbarLargeScreen}>
        {sidebarLinks.map((link) => {
          return (
            <Link
              href={link.route}
              key={link.label}
              className={styles.topBarContent}
            >
              <link.imgURL aria-label={link.label} />
            </Link>
          );
        })}
      </div>
      <ToggleBtn />
    </nav>
  );
}
