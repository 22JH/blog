import dynamic from "next/dynamic";
import { getPost } from "@/app/lib/actions/post.actions";
import DetailUpdateBtn from "@/app/components/post/detail/DetailUpdateBtn";
import { getRelativeTime } from "@/app/lib/getRelativeTime";
import DetailCommentInput from "@/app/components/post/detail/DetailCommentInput";
import { UserType } from "@/app/types/post.type";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import DetailComments from "@/app/components/post/detail/DetailComments";

import { getServerSession } from "next-auth";
import DetailTitleAndDate from "@/app/components/post/detail/DetailTitleAndDate";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const DetailViewer = dynamic(
  () => import("../../../../components/post/detail/DetailViewer"),
  {
    ssr: false,
  }
);

interface PropType {
  params: {
    id: string;
  };
}

export default async function Detail({ params }: PropType) {
  const { detailPost, previousPostTitle, nextPostTitle } = await getPost(
    params.id
  );
  const userInfo = (await getServerSession(authOptions)) as UserType | null;
  const postDate = getRelativeTime(detailPost.createdAt!);
  return (
    <div
      style={assignInlineVars({
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
      })}
    >
      <DetailTitleAndDate
        title={detailPost.title}
        categories={detailPost.categories}
        postDate={postDate}
      />
      <DetailViewer
        post={detailPost}
        previousPostTitle={previousPostTitle}
        nextPostTitle={nextPostTitle}
      />
      <DetailComments
        comments={detailPost.comments}
        userEmail={userInfo?.user.email}
        postId={detailPost._id!}
      />
      <DetailCommentInput
        postId={detailPost._id!.toString()}
        userInfo={userInfo}
      />
      <DetailUpdateBtn url={detailPost.url!} />
    </div>
  );
}
