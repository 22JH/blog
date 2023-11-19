/** @jsxImportSource @emotion/react */

"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { createComment } from "@/app/lib/actions/comment.action";
import { UserType } from "@/app/types/post.type";
import Image from "next/image";
import SendBtn from "../../svg/SendBtn";
import * as styles from "./DetailCommentInput.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

interface PropType {
  postId: string;
  userInfo: UserType | null;
}

export default function DetailCommentInput({ postId, userInfo }: PropType) {
  const [comment, setComment] = useState<string>("");

  const submitComment = async () => {
    if (!comment) return;
    await createComment({
      text: comment,
      email: userInfo?.user.email!,
      userImage: userInfo?.user.image,
      name: userInfo?.user.name,
      postId,
    });
    setComment("");
  };

  const handlLogin = () => {
    if (userInfo) return;
    signIn("google");
  };

  const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      submitComment();
    }
  };
  return (
    <div className={styles.detailCommentContainer}>
      <div className={styles.commentInputContainer}>
        <div
          className={styles.commentThumbnail}
          style={assignInlineVars({
            [styles.thumbnailBorder]: !userInfo
              ? "0.5px solid rgb(80, 80, 80)"
              : "none",
          })}
        >
          {userInfo && (
            <Image
              src={userInfo?.user.image || "/assets/no-img.svg"}
              fill={true}
              sizes="(max-width: 900px) 50vw, 100vw"
              alt="user-thumbnail"
            />
          )}
        </div>
        <input
          type="text"
          className={styles.comment}
          onChange={(e) => handleComment(e)}
          onClick={() => handlLogin()}
          value={comment}
          placeholder={
            userInfo?.user ? "댓글을 입력하세요" : "로그인이 필요합니다"
          }
          readOnly={userInfo?.user ? false : true}
          onKeyDown={(e) => handleEnter(e)}
        />
        <div className={styles.submitBtn} onClick={() => submitComment()}>
          <SendBtn comment={!!comment} />
        </div>
      </div>
    </div>
  );
}
