import { PostType } from "@/app/types/post.type";
import * as styles from "./PostList.css";
import Image from "next/image";
import Link from "next/link";
import { changeKrUrl } from "@/app/lib/changeKrUrl";
import { getRelativeTime } from "@/app/lib/getRelativeTime";

interface PropType {
  posts: PostType[];
  category: string;
}

export default function PostList({ posts, category }: PropType) {
  return (
    <>
      <h1 className={styles.categoryTitle}>{category}</h1>
      <div className={styles.postContainer}>
        {posts.map((postInfo: PostType) => {
          const date = getRelativeTime(postInfo.createdAt!);
          return (
            <Link
              href={{ pathname: `/post/detail/${changeKrUrl(postInfo.title)}` }}
              shallow={true}
              style={{ color: "white" }}
              key={postInfo._id}
              className={styles.post}
            >
              <div className={styles.thumbnail}>
                {postInfo?.thumbnail ? (
                  <Image
                    src={postInfo?.thumbnail}
                    alt="thumbnail"
                    sizes="(max-width: 900px) 50vw, 100vw"
                    fill={true}
                    style={{ objectFit: "cover" }}
                    priority={true}
                    blurDataURL={postInfo?.thumbnail}
                  />
                ) : (
                  <Image
                    src="/assets/no-img.svg"
                    alt="thumbnail"
                    height="100"
                    width="100"
                  />
                )}
              </div>
              <div className={styles.textInfo}>
                <div className={styles.titleAndDate}>
                  <h2 className={styles.title}>{postInfo.title}</h2>
                  <p className={styles.date}>{date}</p>
                </div>
                <div className={styles.categoryFrame}>
                  {postInfo.categories.map((category) => {
                    return (
                      <h3 className={styles.postCategory} key={category._id}>
                        {category.label}
                      </h3>
                    );
                  })}
                </div>
                <div className={styles.previewContent}>
                  <span>{postInfo.previewContent}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
