import { getPostByCategory } from "@/app/lib/actions/post.actions";
import PostList from "@/app/components/post/list/PostList";
import PaginationBar from "@/app/components/post/list/PaginationBar";

export default async function Post({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = Number(searchParams.page as string);
  const { posts, totalPage } = await getPostByCategory(
    params.category,
    Number(page)
  );

  const decodedCategory = decodeURI(params.category);
  return (
    <>
      {posts && <PostList posts={posts} category={decodedCategory} />}
      <PaginationBar
        page={page}
        totalPage={totalPage}
        category={params.category}
      />
    </>
  );
}
