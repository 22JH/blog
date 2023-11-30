"use server";

import Post from "../models/post.model";
import { connectToDB } from "../mongoose";
import { changeKrUrl } from "../changeKrUrl";
import { createCategory, deleteCategory } from "./category.action";
import { PostType } from "@/app/types/post.type";
import Category from "../models/category.model";
import "../models/comment.model";
import { SelectOption } from "@/app/types/category.type";
export async function createPost({
  title,
  content,
  categories,
  previewContent,
  thumbnail,
}: PostType): Promise<void> {
  try {
    connectToDB();

    await createCategory(categories);
    const url = changeKrUrl(title);
    await Post.create({
      title,
      content,
      url,
      categories,
      previewContent,
      thumbnail,
    });
  } catch (err: any) {
    throw new Error(`글 생성 실패 : ${err.message}`);
  }
}

export async function getAllPost(
  pageNumber = 1,
  pageSize = 5
): Promise<{
  posts: PostType[];
  totalPost: number;
  totalPage: number;
}> {
  try {
    connectToDB();
    const skipAmount = (pageNumber - 1) * pageSize;
    const posts = (await Post.find(
      {},
      { title: 1, createdAt: 1, categories: 1, previewContent: 1, thumbnail: 1 }
    )
      .skip(skipAmount)
      .limit(pageSize)
      .sort({ _id: -1 })
      .lean()
      .exec()) as unknown as PostType[];
    const totalPost = await Post.countDocuments().lean();
    const totalPage = Math.ceil(totalPost / pageSize);
    return { posts, totalPost, totalPage };
  } catch (err: any) {
    throw new Error(`글 목록 가져오기 실패 : ${err.message}`);
  }
}

export async function getPostByCategory(
  category: string,
  pageNumber = 1,
  pageSize = 5
) {
  const decodedCategory = decodeURI(category);

  try {
    if (decodedCategory === "all") {
      const { posts, totalPage } = await getAllPost(pageNumber, pageSize);
      return { posts, totalPage };
    } else {
      connectToDB();
      const skipAmount = (pageNumber - 1) * pageSize;
      const posts = (await Post.find(
        { categories: decodedCategory },
        {
          title: 1,
          createdAt: 1,
          categories: 1,
          previewContent: 1,
          thumbnail: 1,
        }
      )
        .skip(skipAmount)
        .limit(pageSize)
        .sort({ _id: -1 })
        .lean()) as PostType[];

      const totalPost = (await Category.findOne(
        { label: category },
        { count: 1 }
      ).lean()) as SelectOption;
      const totalPage = Math.ceil(totalPost.count! / pageSize);
      return { posts, totalPage };
    }
  } catch (err) {
    throw new Error(`카테고리 글 목록 가져오기 실패 : ${err}`);
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

    const post = (await Post.findOne(
      { url },
      {
        title: 1,
        content: 1,
        categories: 1,
        comments: 1,
        previewContent: 1,
        url: 1,
      }
    ).lean()) as PostType;

    const [previousPost, nextPost] = await Promise.all([
      Post.find({ _id: { $lt: post._id } }, { title: 1 })
        .sort({ _id: -1 })
        .limit(1)
        .lean(),
      Post.find({ _id: { $gt: post._id } }, { title: 1 })
        .sort({ _id: 1 })
        .limit(1)
        .lean(),
    ]);

    return {
      detailPost: post,
      previousPostTitle: previousPost[0] ? previousPost[0].title : null,
      nextPostTitle: nextPost[0] ? nextPost[0].title : null,
    };
  } catch (err: any) {
    throw new Error(`글 내용 가져오기 실패 : ${err.message}`);
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
      (prevCat) => !categories.find((cat) => cat === prevCat)
    );
    const addedCategories = categories.filter(
      (category) => !prevCategory?.find((cat) => cat === category)
    );

    await createCategory(addedCategories);
    await deleteCategory(removedCategories);
    // const prevId = prevCategory?.map((category) => category._id);

    // const existingCategoryIds = prevId?.filter(
    //   (id) => !removedId?.includes(id!)
    // );
    // const finalCategoryIds = existingCategoryIds?.concat(addedId);
    await Post.updateOne(
      {
        url: decodeUrl,
      },
      {
        title,
        thumbnail,
        content,
        url: newUrl,
        categories,
        previewContent,
      }
    );
    return newUrl;
  } catch (err: any) {
    throw new Error(`글 수정 실패 : ${err.message}`);
  }
}
