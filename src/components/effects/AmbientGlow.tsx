"use client";

import { useEffect } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";

export const AmbientGlow = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 300, mass: 1 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 400); // 400 is half width of the glow div
      mouseY.set(e.clientY - 400); // 400 is half height of the glow div
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[800px] h-[800px] rounded-full pointer-events-none z-[-1] opacity-20 blur-[120px]"
      style={{
        x: glowX,
        y: glowY,
        background: "radial-gradient(circle, #13a4ec 0%, transparent 70%)",
      }}
    />
  );
};
