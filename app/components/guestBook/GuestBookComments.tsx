"use client";

import { GusetBookType } from "@/app/types/gusetBook.type";
import Image from "next/image";
import * as styles from "./GuestBookComments.css";
import { getRelativeTime } from "@/app/lib/getRelativeTime";
import { useEffect, useRef, useState } from "react";
import { useOptimistic } from "react";
import { getSession } from "next-auth/react";
import { UserType } from "@/app/types/post.type";
import GuestBookInput from "@/app/components/guestBook/GusetBookInput";

export default function GuestBookComments({
  comments,
}: {
  comments: GusetBookType[] | null;
}) {
  const [userInfo, setUserInfo] = useState<UserType | null>(null);
  const commentsRef = useRef<HTMLDivElement>(null);

  const [optimisticComments, addOptimisticComments] = useOptimistic(
    comments!,
    (state: GusetBookType[], newComments: string) => [
      ...state,
      {
        text: newComments,
        name: userInfo?.user.name || "",
        thumbnail: userInfo?.user.image || "",
        pending: true,
      },
    ]
  );

  useEffect(() => {
    (async function () {
      const session = (await getSession()) as UserType;
      if (session) setUserInfo(session);
    })();
  }, []);

  useEffect(() => {
    if (comments?.length) {
      commentsRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [comments?.length]);

  return (
    <>
      <div className={styles.guestBooks}>
        {optimisticComments &&
          optimisticComments.map((comment: GusetBookType) => {
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
                    <p>
                      {comment.text}
                      {comment?.pending && "전송중"}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        <div ref={commentsRef} />
      </div>
      <GuestBookInput addOptimisticComments={addOptimisticComments} />
    </>
  );
}
