"use client";

import Link from "next/link";
import * as styles from "./CategoryBar.css";
import { SelectOption } from "@/app/types/category.type";
import { usePathname } from "next/navigation";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { vars } from "@/app/styles/themes/theme.css";
interface PropType {
  categories: SelectOption[];
  totalPost: number;
}

export default function CategoryBar({ categories, totalPost }: PropType) {
  const pathname = usePathname();
  return (
    <ul className={styles.categories}>
      <li className={styles.category}>
        <Link
          href={`/post/all?page=1`}
          className={styles.categoryText}
          style={assignInlineVars({
            marginTop: "0",
            [styles.categoryColor]: pathname.includes("/all")
              ? vars.themeColor.buttonColor.activeColor
              : vars.themeColor.buttonColor.notActiveColor,
          })}
          key="all"
        >
          {`All (${totalPost})`}
        </Link>
      </li>
      {categories?.map((category, idx) => {
        return (
          <li
            className={styles.category}
            key={category._id}
            style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
          >
            <Link
              href={`/post/${category.label}?page=1`}
              className={styles.categoryText}
              style={assignInlineVars({
                [styles.categoryColor]: pathname.includes(category.label)
                  ? vars.themeColor.buttonColor.activeColor
                  : vars.themeColor.buttonColor.notActiveColor,
              })}
            >{`${category.label} (${category.count})`}</Link>
          </li>
        );
      })}
    </ul>
  );
}
