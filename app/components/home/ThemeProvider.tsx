"use client";

import { darkTheme, ligthTheme, vars } from "@/app/styles/themes/theme.css";
import "../../globals.css";
import { themeContainer } from "./ThemeProvider.css";
import { useEffect, useState } from "react";
import themeStore from "@/app/store/themeStore";

const ThemeProvider = ({ children }: any) => {
  const { isDark } = themeStore();
  const [theme, setTheme] = useState<string | null>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (mounted) {
      document.body.style.backgroundColor =
        theme === "dark" ? "rgb(16,16,16)" : "rgb(245,245,245";
    }
  }, [theme, mounted]);

  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, [isDark]);

  if (!mounted) return null;
  return (
    <div className={` ${theme === "dark" ? darkTheme : ligthTheme}`}>
      <div className={themeContainer}>{children}</div>
    </div>
  );
};

export default ThemeProvider;
