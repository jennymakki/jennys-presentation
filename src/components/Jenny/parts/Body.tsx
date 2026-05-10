"use client";

import { motion } from "framer-motion";
import Eyes from "./Eyes";

export default function Body() {
  return (
    <motion.div
  className="absolute left-0 top-0 w-full h-full relative"
      animate={{
        y: [0, -1, 0],
        rotate: [0, 0.5, 0, -0.5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <img src="/Jenny/body.svg" />

      <Eyes />
    </motion.div>
  );
}