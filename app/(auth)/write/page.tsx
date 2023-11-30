"use client";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("../../components/post/Editor"), {
  ssr: false,
});
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import postStore from "@/app/store/postStore";
import { getPost } from "@/app/lib/actions/post.actions";
import WriteDetail from "@/app/components/post/write/WriteDetail";
import { assignInlineVars } from "@vanilla-extract/dynamic";

export default function Write() {
  const editorRef = useRef<any>();
  const [initalContent, setInitalContent] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<string | undefined>("");
  const [title, setTitle] = useState<string>("");
  const [showWriteDetail, setShowWriteDetail] = useState<boolean>(false);

  const store = postStore();
  const pathname = usePathname();

  const urlSplit = pathname.split("/");
  const url = urlSplit[urlSplit.length - 1];

  const handleShowWriteDetail = () => {
    setShowWriteDetail((prev) => !prev);
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleThumbnail = (url: string) => {
    setThumbnail(url);
  };

  useEffect(() => {
    if (url && pathname.includes("/update")) {
      (async function () {
        const { detailPost } = await getPost(url);
        const defaultCategories = detailPost.categories.map((category) => {
          return { label: category, value: category + category };
        });

        setInitalContent(detailPost.content);
        setTitle(detailPost.title);
        setThumbnail(detailPost.thumbnail);
        store.setSelectCategory(defaultCategories);
        store.setPreviewContent(detailPost.previewContent);
      })();
    }
  }, []);
  return (
    <div
      style={assignInlineVars({
        position: "absolute",
        width: "100vw",
        backgroundColor: "rgba(16, 16, 16)",
      })}
    >
      {showWriteDetail && (
        <WriteDetail
          editorRef={editorRef}
          title={title}
          setShowWriteDetail={handleShowWriteDetail}
          thumbnail={thumbnail}
          setThumbnail={handleThumbnail}
        />
      )}
      <Editor
        handleShowWriteDetail={handleShowWriteDetail}
        title={title}
        handleTitle={handleTitle}
        editorRef={editorRef}
        initalContent={initalContent}
        setThumbnail={handleThumbnail}
        thumbnail={thumbnail}
      />
    </div>
  );
}
