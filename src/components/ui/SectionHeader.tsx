"use client";

import { motion } from "framer-motion";
import { TextReveal } from "./TextReveal";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({ 
  title, 
  subtitle, 
  className = "", 
  align = "center" 
}: SectionHeaderProps) => {
  return (
    <div className={`mb-20 ${align === "center" ? "text-center" : "text-left"} ${className}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-primary font-mono text-xs uppercase tracking-[0.3em] mb-4 block"
        >
          {subtitle}
        </motion.span>
      )}
      
      <div className={`flex ${align === "center" ? "justify-center" : "justify-start"}`}>
        <TextReveal 
          text={title} 
          className="text-4xl md:text-6xl font-bold tracking-tighter text-white"
        />
      </div>
      
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
        className={`h-px w-24 bg-primary/30 mt-8 ${align === "center" ? "mx-auto" : "mr-auto"}`}
      />
    </div>
  );
};
