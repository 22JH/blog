import { CommentType, UserType } from "@/app/types/post.type";
import { getRelativeTime } from "@/app/lib/getRelativeTime";
import { deleteComment } from "@/app/lib/actions/comment.action";
import * as styles from "./DetailComments.css";
import Image from "next/image";
import DeleteBtn from "../../svg/DeleteBtn";

interface PropType {
  comments: CommentType[] | undefined;
  userEmail: string | undefined;
  postId: string;
}

export default function DetailComments({
  comments,
  userEmail,
  postId,
}: PropType) {
  if (!comments) return;
  return (
    <div className={styles.comments}>
      <p className={styles.commentAmount}>{comments.length ?? 0}개의 댓글</p>
      {comments.map((comment) => {
        return (
          <div className={styles.comment}>
            <div className={styles.commenterImage}>
              <Image
                src={comment.userImage || "/assets/no-img"}
                fill={true}
                style={{ objectFit: "cover" }}
                alt="user-image"
                sizes="(max-width: 900px) 50vw, 100vw"
              />
            </div>
            <div className={styles.commenterInfo}>
              <div className={styles.commenterNameAndDate}>
                <span className={styles.commenterName}>{comment.name}</span>
                <span className={styles.commentDate}>
                  {getRelativeTime(comment.createdAt!)}
                </span>
              </div>
              <p>{comment.text}</p>
            </div>
            {userEmail === comment.email && (
              <DeleteBtn
                userEmail={userEmail}
                comment={comment}
                postId={postId}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
