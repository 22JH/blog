"use client";

import { GusetBookType } from "@/app/types/gusetBook.type";
import Image from "next/image";
import * as styles from "./GuestBookComments.css";
import { getRelativeTime } from "@/app/lib/getRelativeTime";
import { useEffect, useRef } from "react";

export default function GuestBookComments({
  comments,
}: {
  comments: GusetBookType[] | null;
}) {
  const commentsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (comments?.length) {
      commentsRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [comments?.length]);
  return (
    <div className={styles.guestBooks}>
      {comments &&
        comments.map((comment: GusetBookType) => {
          return (
            <div className={styles.guestBook} key={comment._id}>
              <div className={styles.gusetBookThumbnail}>
                <Image
                  src={comment.thumbnail}
                  width={40}
                  height={40}
                  alt="user-thumbnail"
                  sizes="(max-width: 900px) 50vw, 100vw"
                />
              </div>
              <div className={styles.guestBookInfo}>
                <div className={styles.nameAndDate}>
                  <p className={styles.name}>{comment.name}</p>
                  <p className={styles.date}>
                    {getRelativeTime(comment.createdAt!)}
                  </p>
                </div>
                <div className={styles.guestBookText}>
                  <p>{comment.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      <div ref={commentsRef} />
    </div>
  );
}
