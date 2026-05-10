"use client";

import { motion } from "framer-motion";

export default function LeftArm() {
  return (
    <motion.img
      src="/jenny/leftarm.svg"
      alt=""
      className="absolute inset-0"
      animate={{
        rotate: [0, 1, 0, -1, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        transformOrigin: "top center",
      }}
    />
  );
}