"use client";

import { motion } from "framer-motion";

export const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Hexagon 1 */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 45, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] left-[10%] w-64 h-64 border border-primary/20 rounded-[30%] rotate-12"
      />
      
      {/* Hexagon 2 */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -30, 0],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[20%] right-[15%] w-96 h-96 border border-white/5 rounded-[40%] -rotate-12"
      />

      {/* Small Circles */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[40%] right-[30%] w-4 h-4 bg-primary/30 rounded-full blur-sm"
      />
    </div>
  );
};
