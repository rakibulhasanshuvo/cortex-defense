"use client";

import { motion } from "framer-motion";

const PARTICLES = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  x: Math.random() * 50 - 25,
  duration: 5 + Math.random() * 5,
  delay: i * 2,
}));

export const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(19,164,236,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(19,164,236,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,#000_20%,transparent_100%)]" />

      {/* Rotating Cyber Ring 1 */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full border border-[#13a4ec]/10 border-dashed opacity-50"
      />
      
      {/* Neural Node 1 */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3],
          boxShadow: [
            "0 0 20px rgba(19,164,236,0.2)",
            "0 0 40px rgba(19,164,236,0.5)",
            "0 0 20px rgba(19,164,236,0.2)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[25%] left-[15%] w-2 h-2 bg-[#13a4ec] rounded-full"
      >
        <div className="absolute inset-0 rounded-full bg-[#13a4ec] animate-ping opacity-50" />
      </motion.div>

      {/* Hexagon 2 */}
      <motion.div
        animate={{
          y: [0, 40, 0],
          rotate: [0, -45, 0],
          opacity: [0.05, 0.2, 0.05],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] border border-[#13a4ec]/10 rounded-[30%] -rotate-12 blur-[1px]"
      />

      {/* Small Data Particles */}
      {PARTICLES.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            y: [-20, -150],
            opacity: [0, 0.5, 0],
            x: particle.x
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
          className="absolute bottom-[10%] right-[20%] w-[1px] h-10 bg-gradient-to-t from-transparent via-[#13a4ec] to-transparent"
        />
      ))}
    </div>
  );
};
