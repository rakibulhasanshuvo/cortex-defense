"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Marquee } from "@/components/sections/Marquee";
import { Insights } from "@/components/sections/Insights";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { Footer } from "@/components/layout/Footer";
import { Shield, Cpu, Activity, ArrowDown } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FloatingShapes } from "@/components/effects/FloatingShapes";
import { TextReveal } from "@/components/ui/TextReveal";

const stats = [
  { label: "Neural Nodes", value: "1,240", icon: Cpu },
  { label: "Active Defense", value: "99.9%", icon: Shield },
  { label: "Latency", value: "0.2ms", icon: Activity },
];

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-[#080c0e] selection:bg-[#13a4ec]/30 overflow-x-hidden">
        
        {/* HERO SECTION */}
        <section id="hero" className="relative min-h-[850px] md:min-h-screen flex flex-col items-center justify-between pt-32 pb-12 px-6 md:px-24 overflow-hidden">
          
          <FloatingShapes />
          
          <motion.div 
            style={{ y: y1, opacity }}
            className="z-10 text-center max-w-7xl flex flex-col items-center"
          >
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="mb-10 inline-flex items-center gap-3 glass px-5 py-2.5 rounded-full border border-white/5"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-[#080c0e] bg-[#13a4ec]/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#13a4ec] animate-pulse" />
                  </div>
                ))}
              </div>
              <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-[#13a4ec] uppercase">
                Autonomous Security Cluster v4.2
              </span>
            </motion.div>
            
            {/* Main Heading */}
            <div className="relative mb-12">
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="text-6xl md:text-[140px] font-bold tracking-tighter leading-[0.85] text-white"
              >
                CORTEX <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13a4ec] to-white italic pr-4">
                  DEFENSE
                </span>
              </motion.h1>
            </div>

            {/* Subtext with Reveal */}
            <TextReveal 
              text="Experience a new era of proactive protection. Our neural network detects and neutralizes threats before they even reach your perimeter."
              className="max-w-3xl mx-auto text-base md:text-xl text-white/70 mb-12 font-medium leading-relaxed justify-center"
              delay={0.8}
            />

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col md:flex-row gap-8 justify-center items-center w-full"
            >
              <MagneticButton strength={0.2}>
                <a href="#pricing" className="group relative px-12 py-5 bg-[#13a4ec] text-black font-bold uppercase tracking-widest transition-all duration-300 hover:bg-white active:scale-95 text-center overflow-hidden flex items-center justify-center min-w-[280px]">
                  <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  <span className="group-hover:-translate-y-12 transition-transform duration-500 absolute">
                    Initialize Access
                  </span>
                  <span className="translate-y-12 group-hover:translate-y-0 transition-transform duration-500 absolute flex items-center gap-2">
                    <Activity size={18} className="animate-pulse" />
                    Connecting to Node...
                  </span>
                  {/* Spacer */}
                  <span className="opacity-0">Initialize Access</span>
                </a>
              </MagneticButton>
              
              <MagneticButton strength={0.2}>
                <a href="#docs" className="group relative glass px-12 py-5 text-white font-bold uppercase tracking-widest border border-white/10 hover:border-[#13a4ec]/50 hover:bg-[#13a4ec]/10 hover:shadow-[0_0_20px_rgba(19,164,236,0.2)] transition-all duration-300 text-center overflow-hidden min-w-[280px]">
                   <span className="group-hover:text-[#13a4ec] transition-colors duration-300">
                     Documentation
                   </span>
                   {/* Scanning line effect */}
                   <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#13a4ec] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                </a>
              </MagneticButton>
            </motion.div>
          </motion.div>

          <div className="w-full flex flex-col items-center gap-12 z-10">
            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">Scroll to Explore</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent relative overflow-hidden">
                <motion.div 
                  animate={{ y: [0, 48, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 left-0 w-full h-1/3 bg-primary"
                />
              </div>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1.2, ease: "circOut" }}
              className="w-full max-w-4xl glass px-12 py-6 rounded-2xl flex flex-wrap justify-center md:justify-between items-center gap-8 border border-white/5 mx-auto"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <stat.icon size={20} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg leading-none mb-1">{stat.value}</div>
                    <div className="text-white/30 text-[10px] font-mono uppercase tracking-widest">{stat.label}</div>
                  </div>
                </div>
              ))}
              <div className="hidden md:block h-8 w-[1px] bg-white/10" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Real-time Node Map</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* MARQUEE */}
        <Marquee />

        {/* INSIGHTS */}
        <section id="network">
          <Insights />
        </section>

        {/* FEATURES */}
        <section id="security">
          <Features />
        </section>

        {/* PRICING */}
        <section id="pricing">
          <Pricing />
        </section>

        {/* FOOTER */}
        <section id="docs">
          <Footer />
        </section>

      </main>
    </>
  );
}
