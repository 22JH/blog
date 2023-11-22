import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as styles from "./GuestBookSkeleton.css";

function Comment({ width }: { width: string }) {
  return (
    <div className={styles.guestBook}>
      <div className={styles.gusetBookThumbnail}></div>
      <div className={styles.guestBookInfo}>
        <div className={styles.nameAndDate}></div>
        <div
          className={styles.guestBookText}
          style={assignInlineVars({ width })}
        ></div>
      </div>
    </div>
  );
}

export default function GuestBookSkeleton() {
  return (
    <div className={styles.guestBooks}>
      <Comment width="20vw" />
      <Comment width="15vw" />
      <Comment width="35vw" />
      <Comment width="50vw" />
      <Comment width="10vw" />
      <Comment width="35vw" />
      <Comment width="40vw" />
    </div>
  );
}
