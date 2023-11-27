import { getCategory } from "@/app/lib/actions/category.action";
import * as styles from "./postLayout.css";
import { getAllPost } from "@/app/lib/actions/post.actions";
import CategoryBar from "@/app/components/post/CategoryBar";
import BackBtn from "@/app/components/svg/BackBtn";

const postListLayout = async ({ children }: { children: React.ReactNode }) => {
  const categories = await getCategory();
  const { totalPost } = await getAllPost();
  return (
    <>
      <div className={styles.categoryContainer}>
        {categories && totalPost && (
          <CategoryBar categories={categories} totalPost={totalPost} />
        )}
      </div>
      <BackBtn color={"white"} />
      {children}
    </>
  );
};

export default postListLayout;
