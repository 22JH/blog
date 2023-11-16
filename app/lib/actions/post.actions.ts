"use server";

import Post from "../models/post.model";
import { connectToDB } from "../mongoose";
import { changeKrUrl } from "../changeKrUrl";
import { createCategory, deleteCategory } from "./category.action";
import { PostType } from "@/app/types/post.type";
import Category from "../models/category.model";
import "../models/comment.model";
export async function createPost({
  title,
  content,
  categories,
  previewContent,
  thumbnail,
}: PostType): Promise<void> {
  try {
    connectToDB();

    const categoryId = await createCategory(categories);

    const url = changeKrUrl(title);
    await Post.create({
      title,
      content,
      url,
      categories: categoryId,
      previewContent,
      thumbnail,
    });
  } catch (err: any) {
    throw new Error(`Failed to create post : ${err.message}`);
  }
}

export async function getAllPost(
  pageNumber = 1,
  pageSize = 3
): Promise<{
  posts: PostType[];
  hasNextPage: boolean;
  totalPost: number;
  totalPage: number;
}> {
  try {
    connectToDB();
    const skipAmount = (pageNumber - 1) * pageSize;
    const postQuery = Post.find()
      .populate("categories")
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(pageSize)
      .lean();
    const posts = (await postQuery.exec()) as PostType[];
    const totalPost = await Post.countDocuments();
    const hasNextPage = totalPost > skipAmount + posts.length;
    const totalPage = Math.ceil(totalPost / pageSize);
    return { posts, hasNextPage, totalPost, totalPage };
  } catch (err: any) {
    throw new Error(`Failed to get all posts : ${err.message}`);
  }
}

export async function getPostByCategory(
  category: string,
  pageNumber = 1,
  pageSize = 3
) {
  const decodedCategory = decodeURI(category);
  try {
    if (decodedCategory === "all") {
      const { posts, hasNextPage, totalPage } = await getAllPost(
        pageNumber,
        pageSize
      );
      return { posts, hasNextPage, totalPage };
    } else {
      connectToDB();
      const skipAmount = (pageNumber - 1) * pageSize;
      const getCategory = await Category.findOne({
        label: decodedCategory,
      }).exec();
      const posts = (await Post.find({ categories: getCategory._id })
        .populate("categories")
        .sort({ createdAt: "desc" })
        .skip(skipAmount)
        .limit(pageSize)
        .lean()) as PostType[];

      const totalPost = await Post.countDocuments({
        categories: getCategory._id,
      });
      const hasNextPage = totalPost > skipAmount + posts.length;
      const totalPage = Math.ceil(totalPost / pageSize);
      return { posts, hasNextPage, totalPost, totalPage };
    }
  } catch (err) {
    // redirect("/post/all");
    throw new Error(`Failed to get post by category${err}`);
  }
}

type PostWithNeighborsType = {
  detailPost: PostType;
  previousPostTitle: string | null;
  nextPostTitle: string | null;
};

export async function getPost(href: string): Promise<PostWithNeighborsType> {
  try {
    connectToDB();
    const url = decodeURI(href);
    const post = (await Post.findOne({ url })
      .populate("categories")
      .populate("comments")
      .lean()) as PostType;
    post._id = post._id?.toString();
    const previousPost = await Post.find({ _id: { $lt: post._id } })
      .sort({ _id: -1 })
      .limit(1);
    const nextPost = await Post.find({ _id: { $gt: post._id } })
      .sort({ _id: 1 })
      .limit(1);

    return {
      detailPost: post,
      previousPostTitle: previousPost[0] ? previousPost[0].title : null,
      nextPostTitle: nextPost[0] ? nextPost[0].title : null,
    };
  } catch (err: any) {
    throw new Error(`Failed to get detail post : ${err.message}`);
  }
}

export async function updatePost({
  title,
  content,
  url,
  previewContent,
  thumbnail,
  categories,
  prevCategory,
}: PostType) {
  try {
    connectToDB();
    const decodeUrl = decodeURI(url!);
    const newUrl = changeKrUrl(title);

    const removedCategories = prevCategory?.filter(
      (prevCat) => !categories.find((cat) => cat.label === prevCat.label)
    );
    const addedCategories = categories.filter(
      (category) => !prevCategory?.find((cat) => cat.label === category.label)
    );

    const addedId = await createCategory(addedCategories);
    const removedId = await deleteCategory(removedCategories);
    const prevId = prevCategory?.map((category) => category._id);

    const existingCategoryIds = prevId?.filter(
      (id) => !removedId?.includes(id!)
    );
    const finalCategoryIds = existingCategoryIds?.concat(addedId);
    await Post.updateOne(
      {
        url: decodeUrl,
      },
      {
        title,
        thumbnail,
        content,
        url: newUrl,
        categories: finalCategoryIds,
        previewContent,
      }
    );
    return newUrl;
  } catch (err: any) {
    throw new Error(`Failed to update Post : ${err.message}`);
  }
}
