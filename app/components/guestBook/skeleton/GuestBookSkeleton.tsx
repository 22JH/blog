import * as styles from "./GuestBookSkeleton.css";

function Comment() {
  return (
    <div className={styles.guestBook}>
      <div className={styles.gusetBookThumbnail}></div>
      <div className={styles.guestBookInfo}>
        <div className={styles.nameAndDate}></div>
        <div className={styles.guestBookText}></div>
      </div>
    </div>
  );
}

export default function GuestBookSkeleton() {
  return (
    <div className={styles.guestBooks}>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}
