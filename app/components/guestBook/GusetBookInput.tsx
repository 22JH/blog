/** @jsxImportSource @emotion/react */

"use client";

import { css } from "@emotion/react";
import SendBtn from "../svg/SendBtn";
import { useEffect, useState } from "react";
import { createGuestBook } from "@/app/lib/actions/guestBook.action";
import { getSession, getProviders, signIn } from "next-auth/react";
import { UserType } from "@/app/types/post.type";
import Image from "next/image";

const guestBookInputContainer = (userInfo: boolean) => css`
  height: 30px;
  width: 100%;
  position: sticky;
  bottom: 20px;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 640px) {
    bottom: 70px;
  }
  .guestComment {
    flex: 1;
    background-color: rgba(30, 30, 30, 0.7);
    backdrop-filter: blur(15px);
    color: rgb(200, 200, 200);
    border: 0.5px solid rgb(111, 111, 111);
    border-radius: 10px;
    height: 50px;
    padding: 0px 20px 0px 15px;
    resize: none;
    text-justify: distribute;
  }
  .sendBtn {
    position: absolute;
    top: 55%;
    right: 10px;
    transform: translate(0, -50%);
  }
  .commentThumbnail {
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 45px;
    margin-right: 10px;
    height: 45px;
    border: ${!userInfo && "0.5px solid rgb(80, 80, 80)"};
    backdrop-filter: blur(15px);
  }
`;

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
    <div css={guestBookInputContainer(!!userInfo)}>
      <div className="commentThumbnail">
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
        className="guestComment"
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
      <div className="sendBtn" onClick={() => handleSubmit()}>
        <SendBtn color={comment ? "rgb(200, 200, 200)" : "rgb(50, 50, 50"} />
      </div>
    </div>
  );
}
