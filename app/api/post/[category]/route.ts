import { getPostByCategory } from "@/app/lib/actions/post.actions";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { category: string } }
) {
  const url = new URL(req.url);
  const category = params.category;
  const pageNumber = Number(await url.searchParams.get("page"));
  try {
    const { posts, totalPost, totalPage } = await getPostByCategory(
      category,
      pageNumber
    );
    // console.log(pageNumber, category, "PageNumber -------------------");
    return NextResponse.json({ posts, totalPost, totalPage });
  } catch (err) {
    throw new Error(`카테고리 글 목록 가져오기 실패 : ${err}`);
  }
}
