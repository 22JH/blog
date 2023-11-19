"use client";

import { deleteComment } from "@/app/lib/actions/comment.action";
import { CommentType } from "@/app/types/post.type";
import * as styles from "./DeleteBtn.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

interface PropType {
  userEmail: string;
  comment: CommentType;
  postId: string;
}

export default function DeleteBtn({ userEmail, comment, postId }: PropType) {
  const handleDeleteComment = async () => {
    if (userEmail !== comment.email) return;
    await deleteComment({ commentId: comment._id!, postId });
  };
  return (
    <div
      onClick={() => handleDeleteComment()}
      className={styles.deleteBtnContainer}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={assignInlineVars({
          cursor: "pointer",
        })}
      >
        <path
          className={styles.deleteBtn}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM13.5286 14.4715L10.0001 10.9429L6.47145 14.4715L5.52865 13.5286L9.05724 10.0001L5.52865 6.47145L6.47145 5.52865L10.0001 9.05724L13.5286 5.52865L14.4715 6.47145L10.9429 10.0001L14.4715 13.5286L13.5286 14.4715Z"
        />
      </svg>
    </div>
  );
}
