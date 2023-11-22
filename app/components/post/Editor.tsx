// @ts-ignore
import { Editor as ToastEditor } from "@toast-ui/react-editor";
// @ts-ignore
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "prismjs/themes/prism.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "highlight.js/styles/github.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import Prism from "prismjs";

import { uploadImage } from "@/app/lib/actions/image.action";
import * as styles from "./Editor.css";

interface HookCallback {
  (url: string, text?: string): void;
}

interface PropType {
  thumbnail: string | undefined;
  initalContent?: string;
  editorRef: React.MutableRefObject<any>;
  title: string;
  setThumbnail: (url: string) => void;
  handleTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleShowWriteDetail: () => void;
}

export default function Editor({
  editorRef,
  thumbnail,
  setThumbnail,
  initalContent,
  handleTitle,
  handleShowWriteDetail,
  title,
}: PropType) {
  const handleContent = () => {
    editorRef.current.getInstance().getHTML();
  };

  const onUploadImg = async (blob: File, callback: HookCallback) => {
    const url = await uploadImage(blob as File);
    if (!thumbnail) {
      setThumbnail(url);
    }
    callback(url);
  };
  return (
    <div className={styles.editorContainer}>
      <div className="write-title-section">
        <input
          className={styles.titleInput}
          type="text"
          onChange={(e) => handleTitle(e)}
          value={title}
        />
      </div>
      <ToastEditor
        initialValue={initalContent || "내용 입력"}
        onBlur={handleContent}
        ref={editorRef}
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]} // 추가!
        initialEditType="markdown" // wysiwyg & markdown
        hideModeSwitch={true}
        theme="dark"
        height="92vh"
        language="ko-KR"
        previewStyle="vertical"
        previewHighlight="false"
        hooks={{
          addImageBlobHook: onUploadImg,
        }}
      />
      <button className={styles.confirmButton} onClick={handleShowWriteDetail}>
        수정하기
      </button>
    </div>
  );
}
