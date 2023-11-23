import { getPostByCategory } from "@/app/lib/actions/post.actions";
import PostList from "@/app/components/post/list/PostList";
import PaginationBar from "@/app/components/post/list/PaginationBar";
import { Metadata } from "next";

interface PropType {
  params: {
    category: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export const generateMetadata = async ({
  params,
}: PropType): Promise<Metadata> => {
  const category = params.category;
  return {
    category,
  };
};

export default async function Post({ params, searchParams }: PropType) {
  const page = Number(searchParams.page as string);
  // const { posts, totalPage } = await getPostByCategory(
  //   params.category,
  //   Number(page)
  // );
  const decodedCategory = decodeURI(params.category);
  // const { posts, totalPage } = await getPostByCategory(
  //   params.category,
  //   Number(page)
  // );
  const res = await fetch(
    `https://www.joo-dev.com/api/post/${params.category}?page=${page}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  const posts = data.posts;
  console.log(posts.length, "02-032-30-20340-20-3402-304");
  const totalPage = data.totalPage;

  return (
    <>
      <PostList posts={posts} category={decodedCategory} />
      <PaginationBar
        page={page}
        totalPage={totalPage}
        category={params.category}
      />
    </>
  );
}
