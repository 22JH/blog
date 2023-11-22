"use server";

import { CommentType } from "@/app/types/post.type";
import Comment from "../models/comment.model";
import Post from "../models/post.model";
import { revalidatePath } from "next/cache";
import { connectToDB } from "../mongoose";

export async function createComment({
  text,
  email,
  name,
  postId,
  userImage,
}: CommentType) {
  try {
    const res = await Comment.create({
      text,
      email,
      name,
      postId,
      userImage,
    });
    await Post.updateOne({ _id: postId }, { $push: { comments: res._id } });
    revalidatePath("/post/detail/[id]", "page");
  } catch (err) {
    throw new Error(`댓글 생성 실패 : ${err}`);
  }
}

interface DeleteCommentType {
  postId: string;
  commentId: string;
}

export async function deleteComment({ postId, commentId }: DeleteCommentType) {
  try {
    connectToDB();
    await Post.findByIdAndUpdate(
      postId,
      { $pull: { comments: commentId } },
      { new: true }
    );
    await Comment.deleteOne({ _id: commentId });
    revalidatePath("/post/detail/[id]", "page");
  } catch (err) {
    throw new Error(`댓글 삭제 실패 ${err}`);
  }
}
