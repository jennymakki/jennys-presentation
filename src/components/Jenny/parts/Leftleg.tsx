"use client";

import { motion } from "framer-motion";

export default function LeftLeg() {
  return (
    <motion.img
      src="/Jenny/leftleg.svg"
      alt=""
      className="absolute inset-0"
      animate={{
        rotate: [0, 1, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        transformOrigin: "top center",
      }}
    />
  );
}