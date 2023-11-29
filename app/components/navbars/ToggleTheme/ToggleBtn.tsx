"use client";

import { moon } from "../icon/moon";
import { sun } from "../icon/sun";
import { toggleBtn } from "./ToggleBtn.css";
import SVGmorph from "./SVGmorph";
import themeStore from "@/app/store/themeStore";

export default function ToggleBtn() {
  const { isDark, setIsDark } = themeStore();
  const theme = localStorage.getItem("theme");
  const handleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  };
  return (
    <button className={toggleBtn} onClick={() => handleTheme()}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <SVGmorph paths={[sun, moon, sun]} isDark={isDark} />
      </svg>
    </button>
  );
}
