"use client";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { detailUpdateBtn, isAdmin } from "./DetailUpdateBtn.css";

import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { UserType } from "@/app/types/post.type";

export default function DetailUpdateBtn({ url }: { url: string }) {
  const [userInfo, setUserInfo] = useState<UserType | null>(null);
  const router = useRouter();

  const handleUpdate = () => {
    router.push(`/update/${url}`);
  };
  useEffect(() => {
    (async function () {
      const session = (await getSession()) as UserType;
      if (session) setUserInfo(session);
    })();
  }, []);

  return (
    <>
      {userInfo?.user?.role === "admin" && (
        <button
          onClick={handleUpdate}
          className={detailUpdateBtn}
          style={assignInlineVars({
            [isAdmin]: !!userInfo ? "initial" : "none",
          })}
        >
          수정하기
        </button>
      )}
    </>
  );
}
