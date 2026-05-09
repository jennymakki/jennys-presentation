"use client";

import { motion } from "framer-motion";

export default function Jenny() {
  return (
    <motion.img
      src="/jenny.svg"
      alt="Jenny"
      className="w-[130px]"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.05,
        rotate: 3,
        y: -5,
      }}
    />
  );
}