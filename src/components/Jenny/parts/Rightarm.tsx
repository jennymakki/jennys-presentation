"use client";

import { motion } from "framer-motion";

export default function RightArm() {
  return (
    <motion.img
      src="/Jenny/rightarm.svg"
      alt=""
      className="absolute inset-0"
      animate={{
        rotate: [0, -1, 0, 1, 0],
      }}
      transition={{
        duration: 5.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        transformOrigin: "top center",
      }}
    />
  );
}