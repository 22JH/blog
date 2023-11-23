import { getPostByCategory } from "@/app/lib/actions/post.actions";
import Category from "@/app/lib/models/category.model";
import Post from "@/app/lib/models/post.model";
import { connectToDB } from "@/app/lib/mongoose";
import { PostType } from "@/app/types/post.type";
import { NextResponse } from "next/server";

const pageSize = 5;

export async function GET(
  req: Request,
  { params }: { params: { category: string } }
) {
  const url = new URL(req.url);
  const category = params.category;
  const pageNumber = Number(await url.searchParams.get("page"));
  try {
    connectToDB();

    if (category === "all") {
      /** 전체 가져오기 */
      const skipAmount = (pageNumber - 1) * pageSize;
      const postQuery = Post.find()
        .populate("categories")
        .sort({ createdAt: "desc" })
        .skip(skipAmount)
        .limit(pageSize)
        .lean();
      const posts = (await postQuery.exec()) as PostType[];
      const totalPost = await Post.countDocuments();
      const totalPage = Math.ceil(totalPost / pageSize);
      return NextResponse.json({ posts, totalPost, totalPage });
    } else {
      /** 카테고리 별로 가져오기 */
      const skipAmount = (pageNumber - 1) * pageSize;
      const getCategory = await Category.findOne({
        label: category,
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
      return { posts, totalPost, totalPage };
    }
  } catch (err) {
    throw new Error(`카테고리 글 목록 가져오기 실패 : ${err}`);
  }
}
