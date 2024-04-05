import Link from "next/link";
import { sidebarLinks } from "../../constants/index";
import { bottomBar, bottomBarContent } from "./BottomBar.css";
import ResumeBtn from "../svg/navbar/ResumeBtn";

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
      <Link
        legacyBehavior
        href="https://docs.google.com/document/d/e/2PACX-1vQQvSr_qPBY-C60QpYF4irQ-mQ34mH3zdZfxKkOFC374rlZ62dUyJXnRjpZo3Ye0XQfeo4TpNig5loP/pub">
        <a target="_blank" rel="noreferrer" className={bottomBarContent}>
          <ResumeBtn />
        </a>
      </Link>
    </nav>
  );
}
