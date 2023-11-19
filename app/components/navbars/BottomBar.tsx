import Link from "next/link";
import { sidebarLinks } from "../../constants/index";
import { bottomBar, bottomBarContent } from "./BottomBar.css";

export default function Bottombar() {
  return (
    <nav className={bottomBar}>
      {sidebarLinks.map((link) => {
        return (
          <Link href={link.route} key={link.label} className={bottomBarContent}>
            <link.imgURL />
          </Link>
        );
      })}
    </nav>
  );
}
