import PostList from "@/app/components/post/list/PostList";
import PaginationBar from "@/app/components/post/list/PaginationBar";
import { Metadata } from "next";
import { getPostByCategory } from "@/app/lib/actions/post.actions";

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
  const decodedCategory = decodeURI(params.category);
  const { posts, totalPage } = await getPostByCategory(
    params.category,
    Number(page)
  );

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
