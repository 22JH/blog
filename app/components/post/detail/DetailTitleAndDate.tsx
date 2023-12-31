import * as styles from "./DetailTitleAndDate.css";

interface PropType {
  title: string;
  categories: string[];
  postDate: string;
}

export default function DetailTitleAndDate({
  title,
  categories,
  postDate,
}: PropType) {
  return (
    <>
      <div className={styles.titleFrame}>
        <h1>{title}</h1>
      </div>
      <div className={styles.dateAndTitleFrame}>
        <div className={styles.categoryFrame}>
          {categories.map((cat) => {
            return <h4 className={styles.category}>{cat}</h4>;
          })}
        </div>
        <div className={styles.detailDate}>{postDate}</div>
      </div>
    </>
  );
}
