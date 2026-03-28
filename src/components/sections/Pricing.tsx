"use client";

import { motion } from "framer-motion";
import { Check, Shield, Zap, Lock, ChevronRight } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { SectionHeader } from "../ui/SectionHeader";

const plans = [
  {
    name: "Standard",
    price: "0",
    desc: "Essential protection for individual users and collectors.",
    features: ["Neural Link Access", "Basic Node Security", "24/7 Monitoring", "Standard Encryption"],
    button: "Get Started",
    pro: false,
  },
  {
    name: "Enterprise",
    price: "124",
    desc: "Military-grade defense for heavy-volume trading and assets.",
    features: ["Priority Neural Matrix", "Advanced Self-Healing", "Dedicated Support", "Quantum-Resistant Layer", "API Integrations"],
    button: "Initialize Pro",
    pro: true,
  },
  {
    name: "Global",
    price: "499",
    desc: "Custom distributed architectures for institutions.",
    features: ["Full Cluster Customization", "White-Glove Onboarding", "Custom Node Locality", "Institutional Governance", "High-Volume SLA"],
    button: "Contact Sales",
    pro: false,
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 px-6 md:px-24 bg-[#080c0e]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="CORE PROTOCOLS"
          subtitle="Access Tiers"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative glass p-10 rounded-[40px] flex flex-col items-start text-left group overflow-hidden ${
                plan.pro ? "border-primary/50 shadow-[0_0_80px_rgba(19,164,236,0.1)]" : "border-white/5"
              }`}
            >
              {plan.pro && (
                <div className="absolute top-6 right-6 bg-primary text-black font-bold text-[8px] px-3 py-1 rounded-full tracking-widest uppercase">
                  Highly Secure
                </div>
              )}

              <div className="mb-10 w-full">
                <h3 className="text-white/40 font-mono tracking-widest text-xs uppercase mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-white tracking-tighter">${plan.price}</span>
                  <span className="text-white/20 text-xs font-mono">/Mo</span>
                </div>
              </div>

              <p className="text-sm text-white/40 mb-10 leading-relaxed min-h-[48px]">
                {plan.desc}
              </p>

              <div className="space-y-4 mb-12 w-full flex-grow">
                {plan.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs text-white/60">
                    <Check className="text-primary shrink-0" size={14} /> {f}
                  </div>
                ))}
              </div>

              <div className="w-full">
                <MagneticButton strength={0.1} className="w-full">
                  <a href="#docs" className={`w-full py-4 font-black uppercase tracking-widest text-[11px] transition-all duration-300 transform active:scale-95 border block text-center ${
                    plan.pro 
                      ? "bg-primary text-white border-primary shadow-[0_0_20px_rgba(19,164,236,0.3)] hover:bg-white hover:text-black" 
                      : "bg-white/5 text-white border-white/10 hover:bg-white/10"
                  }`}>
                    {plan.button}
                  </a>
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
