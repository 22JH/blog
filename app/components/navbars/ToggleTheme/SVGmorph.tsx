"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { interpolate } from "flubber";
import { useEffect } from "react";
import { pathStyle } from "./SVGmorph.css";

export default function SVGmorph({
  paths,
  theme,
}: {
  paths: string[];
  theme: string;
}) {
  const progress = useMotionValue(0);
  const path = useTransform(progress, [0, 1, 2], paths, {
    mixer: (from, to) => interpolate(from, to, { maxSegmentLegth: 5 }),
  });
  const themeColor = theme === "dark" ? 1 : 0;
  useEffect(() => {
    animate(progress, themeColor, {
      duration: 0.15,
      ease: "easeInOut",
    });
  }, [theme]);
  return <motion.path d={path} className={pathStyle} />;
}
