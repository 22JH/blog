"use client";

import Link from "next/link";
import * as styles from "./PaginationBar.css";
import PageBack from "../../svg/pagination/PageBack";
import PageNext from "../../svg/pagination/PageNext";
import { useEffect, useState } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { vars } from "@/app/styles/themes/theme.css";

export default function PaginationBar({
  page,
  totalPage,
  category,
}: {
  page: number;
  totalPage: number;
  category: string;
}) {
  const [index, setIndex] = useState<number>(1);
  const [pages, setPages] = useState<number[]>([]);
  console.log(totalPage);
  useEffect(() => {
    const pageArr = [];
    for (let i = index; i <= index + 4; i++) {
      if (i <= totalPage) pageArr.push(i);
    }
    setPages(pageArr);
  }, [index]);

  const handleBackBtn = () => {
    if (index === 1) return;
    setIndex((prev: number) => prev - 5);
  };

  const handleNextBtn = () => {
    if (index * 5 >= totalPage) return;
    setIndex((prev: number) => prev + 5);
  };

  return (
    <div className={styles.paginationBarContainer}>
      <div onClick={() => handleBackBtn()}>
        <PageBack />
      </div>
      <div className={styles.numberContainer}>
        {pages.map((number) => {
          return (
            <Link
              href={{
                pathname: `/post/${category}`,
                query: {
                  page: number,
                },
              }}
              className={styles.pageNumber}
              style={assignInlineVars({
                color:
                  page === number
                    ? vars.themeColor.fontColor.accentColor
                    : vars.themeColor.fontColor.accentSubColor,
              })}
              key={number}
            >
              {number}
            </Link>
          );
        })}
      </div>
      <div onClick={() => handleNextBtn()}>
        <PageNext />
      </div>
    </div>
  );
}
