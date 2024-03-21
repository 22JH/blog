"use client";

import { darkTheme, ligthTheme } from "@/app/styles/themes/theme.css";
import "../../globals.css";
import { themeContainer } from "./ThemeProvider.css";
import { useEffect, useState } from "react";
import themeStore from "@/app/store/themeStore";

const ThemeProvider = ({ children }: any) => {
  const { isDark } = themeStore();

  useEffect(() => {
    document.body.style.backgroundColor = isDark
      ? "rgb(16,16,16)"
      : "rgb(245,245,245)";
  }, [isDark]);

  return (
    <div className={isDark ? darkTheme : ligthTheme}>
      <div className={themeContainer}>{children}</div>
    </div>
  );
};

export default ThemeProvider;
