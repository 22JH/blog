import { uploadImage } from "@/app/lib/actions/image.action";
import { createPost, updatePost } from "@/app/lib/actions/post.actions";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Category from "./SelectCategory";
import postStore from "@/app/store/postStore";
import { SelectOption } from "@/app/types/category.type";
import * as styles from "./WriteDetail.css";

interface PropType {
  thumbnail: string | undefined;
  initalContent?: string;
  editorRef: React.MutableRefObject<any>;
  title: string;
  setThumbnail: (url: string) => void;
  setShowWriteDetail: () => void;
}

export default function WriteDetail({
  editorRef,
  title,
  setShowWriteDetail,
  setThumbnail,
  thumbnail,
}: PropType) {
  const store = postStore();
  const [content, setContent] = useState<string>("");
  const [selectCategory, setSelectCategory] = useState<SelectOption[]>(
    store.categories || []
  );
  const [previewContent, setPreviewContent] = useState<string>(
    store.previewContent
  );
  const imgRef = useRef<any>();
  const router = useRouter();
  const pathname = usePathname();
  const urlArray = pathname.split("/");
  const params = urlArray[urlArray.length - 1];

  /** 선택한 카테고리 */
  const handleCategory = (select: SelectOption[]) => {
    setSelectCategory(select);
  };

  /** 썸네일 바꾸기 */
  const saveImgFile = async () => {
    const file = imgRef.current.files[0];
    const url = await uploadImage(file);
    setThumbnail(url);
  };

  /** 전송버튼 클릭시 */
  const handleSubmit = async () => {
    const categories = selectCategory.map((category) => category.label);
    const prevCategory = store.categories.map((category) => category.label);
    if (pathname.includes("/update")) {
      await updatePost({
        title,
        content,
        thumbnail,
        url: params,
        categories,
        prevCategory,
        previewContent,
      });
    } else {
      await createPost({
        title,
        content,
        thumbnail,
        categories,
        previewContent,
      });
    }
    router.push("/post/all?page=1");
  };
  useEffect(() => {
    const contentToInstance = editorRef.current.getInstance();
    const contentToMarkDown = contentToInstance.getMarkdown();
    setContent(contentToMarkDown);
    if (!previewContent)
      setPreviewContent(contentToMarkDown.replace(/[\n#*]/g, "").slice(0, 150));
  }, []);

  return (
    <div className={styles.wrtieDetailContainer}>
      <div className={styles.detailFrame}>
        <div className={styles.thumbnailContent}>
          <h4>{title}</h4>
          <div className={styles.thumbnailPreview}>
            <Image
              src={thumbnail || "/next.svg"}
              alt="thumbnail"
              sizes="(max-width: 900px) 50vw, 100vw"
              fill={true}
              style={{ objectFit: "cover" }}
              // priority
            />
          </div>
          <input
            type="file"
            accept="image/*"
            id="profileImg"
            onChange={saveImgFile}
            ref={imgRef}
          />
          <div className={styles.contentPreview}>
            <h4 className={styles.categoryText}>내용 미리보기</h4>
            <textarea
              className={styles.previewText}
              value={previewContent}
              onChange={(e) => setPreviewContent(e.target.value)}
            />
            <p style={{ color: "white" }}>{previewContent?.length}</p>
          </div>
        </div>
        <div className={styles.categoryHashtag}>
          <h4 className={styles.categoryText}>카테고리</h4>
          <Category
            selectCategory={selectCategory}
            setSelectCategory={handleCategory}
          />
          <button onClick={setShowWriteDetail}>취소</button>
          <button onClick={handleSubmit}>저장</button>
        </div>
      </div>
    </div>
  );
}
