import { DefaultSession, Session } from "next-auth";
import { SelectOption } from "./category.type";

export interface PostType {
  _id?: string;
  thumbnail?: string;
  url?: string;
  prevCategory?: SelectOption[];
  title: string;
  content: string;
  categories: SelectOption[];
  previewContent: string;
  createdAt?: string;
  comments?: CommentType[];
}

export interface CommentType {
  _id?: string;
  email: string;
  postId: string;
  text: string;
  name: string | undefined;
  userImage: string | undefined;
  createdAt?: string;
}

export interface UserType extends Session {
  user: {
    email?: string;
    image?: string;
    name?: string;
    role?: string;
  };
}
