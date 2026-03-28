"use client";

import { motion } from "framer-motion";
import { Shield, Activity, Lock, Zap, ChevronRight, PieChart, BarChart } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";

const cards = [
  {
    title: "Neural Firewall",
    value: "4.2M",
    growth: "+14.5%",
    desc: "AI-driven traffic filtration and threat detection.",
    icon: Shield,
    color: "#13a4ec",
  },
  {
    title: "System Uptime",
    value: "100.0%",
    growth: "stable",
    desc: "Zero-latency protection across distributed nodes.",
    icon: Activity,
    color: "#22c55e",
  },
  {
    title: "Data Vaults",
    value: "128.4PB",
    growth: "+2.8%",
    desc: "Quantum-resistant storage for decentralized assets.",
    icon: Lock,
    color: "#a855f7",
  },
];

export const Insights = () => {
  return (
    <section id="dashboard" className="py-24 px-6 md:px-24 bg-[#080c0e]">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <SectionHeader 
            subtitle="Real-time Analytics"
            title="PROACTIVE INSIGHTS"
            align="left"
            className="mb-0 overflow-hidden"
          />
          
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="flex gap-4 mb-8"
          >
            <a href="#security" className="flex items-center gap-2 glass px-6 py-3 text-[10px] font-bold font-mono tracking-widest text-white/60 hover:text-white transition-colors border border-white/5 hover:border-primary/50 rounded-xl">
              <BarChart size={14} /> VIEW NETWORK MAP
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative glass p-8 rounded-[32px] overflow-hidden hover:scale-[1.02] transition-all duration-500 border border-white/5 hover:border-primary/20"
            >
              {/* Spotlight Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-500">
                    <card.icon size={28} />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono text-white/30 uppercase mb-1">Growth</div>
                    <div className="text-xs font-bold text-green-500 font-mono italic flex items-center justify-end gap-1">
                      <Zap size={10} className="animate-pulse" /> {card.growth}
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-2">{card.title}</div>
                  <div className="text-4xl font-bold text-white tracking-tighter group-hover:text-primary transition-colors duration-300">{card.value}</div>
                </div>

                <p className="text-sm text-white/40 leading-relaxed mb-8 group-hover:text-white/60 transition-colors">
                  {card.desc}
                </p>

                <a href="#pricing" className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0 duration-500">
                  CORE PROTOCOL <ChevronRight size={12} />
                </a>
              </div>

              {/* Decorative Chart-like lines */}
              <div className="absolute bottom-0 left-0 right-0 h-1 mt-auto">
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-primary/40 origin-left"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Preview Module */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-[48px] p-8 md:p-16 border border-white/5 relative overflow-hidden h-[400px] md:h-[600px] group"
        >
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
          
          <div className="relative z-10 flex flex-col h-full justify-between items-center text-center">
            <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">NEURAL PROCESSING HUB</h3>
                <p className="text-white/40 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                  Our core intelligence dashboard. Track cross-chain transactions, 
                  security node status, and real-time encryption levels in one place.
                </p>
            </div>
            
            {/* Mock Dashboard Illustration */}
            <div className="w-full max-w-5xl mt-12 bg-black/60 border border-white/10 rounded-t-3xl h-full shadow-[0_40px_100px_rgba(0,0,0,0.8)] p-6 overflow-hidden relative group-hover:border-primary/20 transition-colors duration-500">
                <div className="flex gap-4 mb-8 pt-4 px-4">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="h-2 w-20 rounded-full bg-white/5" />
                    ))}
                </div>
                <div className="grid grid-cols-12 gap-6 p-4">
                    <div className="col-span-8 h-48 glass-dark rounded-2xl border border-white/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent animate-pulse" />
                    </div>
                    <div className="col-span-4 h-48 glass-dark rounded-2xl border border-white/5" />
                    <div className="col-span-4 h-48 glass-dark rounded-2xl border border-white/5" />
                    <div className="col-span-8 h-48 glass-dark rounded-2xl border border-white/5" />
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
