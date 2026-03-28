"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, LayoutDashboard, Share2, FileText, Activity } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { ScrollProgress } from "../ui/ScrollProgress";
import Link from "next/link";

const navItems = [
  { name: "Dashboard", href: "#hero", icon: LayoutDashboard },
  { name: "Network", href: "#network", icon: Share2 },
  { name: "Security", href: "#security", icon: Shield },
  { name: "Whitepaper", href: "#docs", icon: FileText },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active item based on scroll position
      const sections = ["hero", "network", "security", "pricing", "docs"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            const itemName = navItems.find(item => item.href === `#${section}`)?.name || 
                             (section === "hero" ? "Dashboard" : "");
            if (itemName) setActiveItem(itemName);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 flex flex-col items-center pointer-events-none">
      <ScrollProgress />
      
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className={`glass px-4 py-2 rounded-full flex items-center gap-2 pointer-events-auto transition-all duration-500 border border-white/5 ${
          scrolled ? "bg-black/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] scale-95" : "bg-white/5"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 px-4 py-2 group">
          <Shield className="text-primary group-hover:scale-110 transition-transform" size={20} />
          <span className="font-bold tracking-tighter text-sm text-white">CORTEX</span>
        </Link>

        <div className="h-4 w-[1px] bg-white/10 mx-2" />

        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <MagneticButton key={item.name} strength={0.2}>
              <a
                href={item.href}
                className={`relative px-4 py-2 text-xs font-mono uppercase tracking-widest transition-colors duration-300 flex items-center gap-2 ${
                  activeItem === item.name ? "text-white" : "text-white/40 hover:text-white/60"
                }`}
              >
                {activeItem === item.name && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-primary/20 border border-primary/30 rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            </MagneticButton>
          ))}
        </div>

        <div className="h-4 w-[1px] bg-white/10 mx-2" />

        <MagneticButton strength={0.3}>
          <a href="#pricing" className="bg-primary text-white font-black px-6 py-2.5 rounded-full text-[11px] uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_25px_rgba(19,164,236,0.6)] border border-primary/20">
            Initialize Access
          </a>
        </MagneticButton>
      </motion.div>
    </nav>
  );
};

