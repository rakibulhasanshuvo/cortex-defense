"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Lock, Zap, Cpu, MousePointer2, Smartphone, Globe, Layers, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { SectionHeader } from "../ui/SectionHeader";
const PROGRESS_STEPS = [1, 2, 3, 4, 5];

const features = [
  {
    id: "def-01",
    title: "Quantum Ledger Protection",
    desc: "Military-grade encryption for decentralized assets.",
    icon: Lock,
  },
  {
    id: "def-02",
    title: "Neural Node Mesh",
    desc: "Self-healing network of distributed security points.",
    icon: Cpu,
  },
  {
    id: "def-03",
    title: "Biometric Link",
    desc: "Secure mobile-to-ledger authentication protocol.",
    icon: Smartphone,
  },
];

export const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-15, 0]);

  return (
    <section id="security" ref={containerRef} className="py-24 px-6 md:px-24 bg-[#080c0e] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left: Interactive Graphic */}
        <motion.div 
           style={{ rotateX, rotateY }}
           className="relative flex-1 group perspective-1000"
        >
          <div className="absolute inset-x-0 -top-10 -bottom-10 bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity" />
          
          <div className="relative animated-gradient-border p-4 md:p-12 rounded-[60px] shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
            <div className="relative z-10 flex flex-col gap-8 bg-[#080c0e]/80 backdrop-blur-xl rounded-[inherit] p-8">
              <div className="flex justify-between items-start">
                  <div className="p-4 glass rounded-3xl text-primary mb-4">
                      <Layers size={32} />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase font-mono tracking-widest text-primary mb-2">Node Encryption</div>
                    <div className="flex gap-1 justify-end">
                        {PROGRESS_STEPS.map(i => (
                            <div key={i} className="h-1 w-6 rounded-full bg-primary/40" />
                        ))}
                    </div>
                  </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                  <div className="h-40 glass-dark rounded-3xl p-6 relative overflow-hidden group/card">
                      <div className="h-2 w-12 bg-white/10 rounded-full mb-4" />
                      <div className="h-12 w-full bg-white/5 rounded-xl border border-white/5" />
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                  </div>
                  <div className="h-40 glass-dark rounded-3xl p-6 relative overflow-hidden group/card">
                      <div className="h-2 w-12 bg-white/10 rounded-full mb-4" />
                      <div className="h-12 w-full bg-white/5 rounded-xl border border-white/5" />
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                  </div>
              </div>
              
              <div className="h-48 glass-dark rounded-[40px] flex items-center justify-center p-8 border border-white/5">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full border-4 border-primary/20 flex items-center justify-center relative">
                        <Shield className="text-primary animate-pulse" size={40} />
                        <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping" />
                    </div>
                    <div className="mt-4 text-xs font-mono uppercase tracking-widest text-[#13a4ec]/60">Secure Kernel Active</div>
                  </div>
              </div>
            </div>
            
            {/* Custom Mouse Interaction Marker */}
            <motion.div 
              animate={{ x: [0, 40, -40, 0], y: [0, -20, 20, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 glass p-4 rounded-3xl shadow-2xl z-20"
            >
              <MousePointer2 className="text-primary" size={20} />
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <div className="flex-1 text-left">
          <SectionHeader 
            subtitle="Defense Architecture"
            title="SECURE YOUR DIGITAL ASSETS"
            align="left"
            className="mb-12"
          />

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 text-base md:text-lg mb-12 leading-relaxed"
          >
            Our core protocol, Cortex.OS, provides an unparalleled layer of 
            abstraction between your data and the open web, eliminating 
            traditional vulnerability vectors.
          </motion.p>

          <div className="space-y-6">
            {features.map((f, i) => (
              <motion.div 
                key={f.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 group cursor-pointer p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5"
              >
                <div className="p-4 bg-white/5 rounded-2xl text-white/20 group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110">
                  <f.icon size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2 mt-1 group-hover:text-primary transition-colors">{f.title}</h4>
                  <p className="text-white/40 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <a href="#pricing" className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-[10px] border-b border-primary/40 pb-2 group hover:border-primary transition-all duration-300">
               EXPLORE CORE DEFENSE <ChevronRight className="group-hover:translate-x-1 transition-transform" size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
