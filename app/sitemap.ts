import { getAllPost, getPostsUrl } from "./lib/actions/post.actions";

export default async function sitemap() {
  const posts = await getPostsUrl();

  const postInfo = posts.map((post) => {
    return {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}post/detail/${post.url}`,
      lastModified: post.createdAt,
    };
  });
  return [
    {
      url: process.env.NEXT_PUBLIC_BASE_URL,
      lastModified: new Date(),
    },
    ...postInfo,
  ];
}
