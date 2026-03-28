"use client";

import { motion } from "framer-motion";
import { Cpu, Shield, Zap, Lock, Activity, Globe, Database, Network } from "lucide-react";

const logos = [
  { name: "NodeX", icon: Cpu },
  { name: "Sentry", icon: Shield },
  { name: "Lumen", icon: Zap },
  { name: "Vault", icon: Lock },
  { name: "Atlas", icon: Globe },
  { name: "Core", icon: Database },
  { name: "Neural", icon: Activity },
  { name: "Grid", icon: Network },
];

export const Marquee = () => {
  return (
    <div className="relative w-full overflow-hidden bg-black/40 py-20 border-y border-white/5">
      <div className="flex whitespace-nowrap">
        <motion.div
// ... existing transition ...
          className="flex items-center gap-24 px-12"
        >
          {/* Double the logos for seamless loop */}
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-6 grayscale opacity-20 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer group"
            >
              <div className="relative p-4 rounded-xl bg-white/5 group-hover:bg-primary/20 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <logo.icon className="relative text-white group-hover:text-primary transition-colors" size={24} />
              </div>
              <span className="text-white/30 group-hover:text-white font-bold tracking-[0.4em] text-[11px] uppercase transition-all duration-500">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Fade Overlays */}
      <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#080c0e] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#080c0e] to-transparent z-10 pointer-events-none" />
    </div>
  );
};
