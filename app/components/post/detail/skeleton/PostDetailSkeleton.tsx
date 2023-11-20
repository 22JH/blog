import * as styles from "./PostDetailSkeleton.css";

export default function PostDetailSkeleton() {
  return (
    <>
      <div className={styles.titleFrame} />
      <div className={styles.dateAndTitleFrame}>
        <div className={styles.categoryFrame} />
        <div className={styles.detailDate} />
      </div>
      <div className={styles.detailViewerContainer}></div>
    </>
  );
}
