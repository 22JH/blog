"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { interpolate } from "flubber";
import { useEffect, useState } from "react";
import { pathStyle } from "./SVGmorph.css";

export default function SVGmorph({
  paths,
  isDark,
}: {
  paths: string[];
  isDark: boolean;
}) {
  const [themeColor, setThemeColor] = useState<number>(1);
  const progress = useMotionValue(0);

  const path = useTransform(progress, [0, 1, 2], paths, {
    mixer: (from, to) => interpolate(from, to, { maxSegmentLegth: 5 }),
  });

  useEffect(() => {
    setThemeColor(isDark ? 1 : 0);
  }, [isDark]);

  useEffect(() => {
    animate(progress, themeColor, {
      duration: 0.15,
      ease: "easeInOut",
    });
  }, [isDark]);
  return <motion.path d={path} className={pathStyle} />;
}
