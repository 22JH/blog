import * as styles from "./PostListSkeleton.css";

function LoadingBox() {
  return (
    <div className={styles.post}>
      <div className={styles.thumbnail}></div>
      <div className={styles.textInfo}>
        <div className={styles.titleAndDate}>
          <div className={styles.title}></div>
          <div className={styles.date}></div>
        </div>
        <div className={styles.categoryFrame}></div>
        <div className={styles.previewContent}></div>
      </div>
    </div>
  );
}

export default function PostListSkeleton() {
  return (
    <>
      <div className={styles.categoryTitle}></div>
      <div className={styles.postContainer}>
        <LoadingBox />
        <LoadingBox />
        <LoadingBox />
      </div>
    </>
  );
}
