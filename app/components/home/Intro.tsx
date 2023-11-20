import Three from "./Three";
import * as styles from "./Intro.css";
import { socialLinks } from "@/app/constants/socials";
import Link from "next/link";
import { assignInlineVars } from "@vanilla-extract/dynamic";

export default function Intro() {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introFrame}>
        <div className={styles.introAbout}>
          <h2>안녕하세요</h2>
          <h2>프론트엔드 개발자</h2>
          <h2>이주형입니다</h2>
          <p className={styles.introDescription}>
            문제를 고민하고 탐구하는 것을 좋아하며, 이를 해결해나가는 과정과
            결과가 저의 원동력 입니다.
          </p>
          <p className={styles.introDescription}>
            이곳은 제가 겪었던 문제의 과정과 결과를 기록하기 위한 저장소 입니다.
          </p>
        </div>
        <div className={styles.introThreeModel}>
          <Three />
        </div>
      </div>
      <div className={styles.socialFrame}>
        {socialLinks.map((link) => {
          return (
            <Link legacyBehavior href={link.route} key={link.label}>
              <a target="_blank" rel="noreferrer" className={styles.social}>
                <link.imgURL />
                <p>{link.label}</p>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
