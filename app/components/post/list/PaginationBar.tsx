/** @jsxImportSource @emotion/react */

"use client";

import Link from "next/link";
import * as styles from "./PaginationBar.css";
import { css } from "@emotion/react";
import PageBack from "../../svg/pagination/PageBack";
import PageNext from "../../svg/pagination/PageNext";
import { useEffect, useState } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const paginationBarContainer = css`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .numberContainer {
    width: 80%;
    position: relative;
    display: flex;
    justify-content: center;
    .pageNumber {
      display: flex;
      color: rgb(42, 42, 42);
      font-size: 20px;
      &:hover {
        color: rgb(200, 200, 200);
      }
      margin: 0 calc(80% / 5 / 2);
    }
    .isActive {
      color: rgb(200, 200, 200);
    }
  }
`;

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
    console.log(index, totalPage);
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
                [styles.activeColor]:
                  page === number ? "rgb(200,200,200)" : "rgb(42,42,42)",
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
