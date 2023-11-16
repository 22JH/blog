"use client";

import Link from "next/link";
import * as styles from "./CategoryBar.css";
import { SelectOption } from "@/app/types/category.type";
import { usePathname } from "next/navigation";
import pageStore from "@/app/store/pageStore";
import { useEffect } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
interface PropType {
  categories: SelectOption[];
  totalPost: number;
}

export default function CategoryBar({ categories, totalPost }: PropType) {
  const { selectedCategory, setSelectedCategory } = pageStore();
  const pathname = usePathname();
  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  /** */
  useEffect(() => {
    if (pathname.includes("/post") && !selectedCategory) {
      setSelectedCategory("all");
    }
    return () => {
      setSelectedCategory("all");
    };
  }, []);
  return (
    <ul className={styles.categories}>
      <li className={styles.category}>
        <Link
          href={`/post/all?page=1`}
          className={styles.categoryText}
          style={assignInlineVars({
            [styles.categoryColor]:
              selectedCategory === "all" ? "rgb(236,236,236)" : "rgb(96,96,96)",
          })}
          onClick={() => handleSelectCategory("all")}
          key="all"
        >
          {`All (${totalPost})`}
        </Link>
      </li>
      {categories?.map((category, idx) => {
        const isActive = selectedCategory === category.label;
        return (
          <li
            className={styles.category}
            key={category._id}
            style={{ animationDelay: `${(idx + 1) * 0.15}s` }}
          >
            <Link
              href={`/post/${category.label}?page=1`}
              className={styles.categoryText}
              style={assignInlineVars({
                [styles.categoryColor]: isActive
                  ? "rgb(236,236,236)"
                  : "rgb(96,96,96)",
              })}
              onClick={() => handleSelectCategory(category.label)}
            >{`${category.label} (${category.count})`}</Link>
          </li>
        );
      })}
    </ul>
  );
}