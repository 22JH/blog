"use client";

import SendBtn from "../svg/SendBtn";
import { useEffect, useState } from "react";
import { createGuestBook } from "@/app/lib/actions/guestBook.action";
import { getSession, getProviders, signIn } from "next-auth/react";
import { UserType } from "@/app/types/post.type";
import * as styles from "./GuestBookInput.css";
import Image from "next/image";
import { assignInlineVars } from "@vanilla-extract/dynamic";

export default function GuestBookInput() {
  const [comment, setComment] = useState<string>("");
  const [userInfo, setUserInfo] = useState<UserType | null>(null);

  const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = async () => {
    if (!comment) return;
    if (!userInfo?.user) return;
    await createGuestBook({
      text: comment,
      thumbnail: userInfo?.user.image!,
      name: userInfo?.user.name!,
    });
    setComment("");
  };

  const handleLogin = () => {
    if (userInfo) return;
    signIn("google");
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  useEffect(() => {
    (async function () {
      const session = (await getSession()) as UserType;
      if (session) setUserInfo(session);
    })();
  }, []);
  return (
    <div className={styles.guestBookInputContainer}>
      <div
        className={styles.commentThumbnail}
        style={assignInlineVars({
          border: `${!userInfo} && 0.5px solid rgb(80, 80, 80)`,
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
        className={styles.guestComment}
        onChange={(e) => handleComment(e)}
        onClick={() => handleLogin()}
        onKeyDown={(e) => {
          handleEnter(e);
        }}
        value={comment}
        placeholder={
          userInfo ? "방명록을 작성해 주세요" : "로그인이 필요합니다"
        }
        readOnly={userInfo ? false : true}
      />
      <div className={styles.sendBtn} onClick={() => handleSubmit()}>
        <SendBtn comment={!!comment} />
      </div>
    </div>
  );
}
