"use client";

import { motion } from "framer-motion";

export default function RightLeg() {
  return (
    <motion.img
      src="/Jenny/rightleg.svg"
      alt=""
      className="absolute inset-0"
      animate={{
        rotate: [0, -1, 0],
      }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        transformOrigin: "top center",
      }}
    />
  );
}