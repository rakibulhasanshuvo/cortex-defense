"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    // Throttled scroll listener for background state
    let lastScrollTime = 0;
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime >= 100) {
        setScrolled(window.scrollY > 50);
        lastScrollTime = now;
      }
    };

    // IntersectionObserver for section tracking
    const sections = ["hero", "network", "security", "pricing", "docs"];
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -80% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const itemName = navItems.find(item => item.href === `#${sectionId}`)?.name ||
                           (sectionId === "hero" ? "Dashboard" : "");
          if (itemName) setActiveItem(itemName);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
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
                className={`relative px-4 py-2 text-xs font-mono uppercase tracking-widest transition-all duration-300 flex items-center gap-2 group ${
                  activeItem === item.name ? "text-white font-bold" : "text-white/40 hover:text-white"
                }`}
              >
                {activeItem === item.name && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-[#13a4ec]/20 border border-[#13a4ec]/50 rounded-full z-[-1] shadow-[0_0_15px_rgba(19,164,236,0.3)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                {/* Cyber Brackets Effect */}
                <span className={`transition-opacity duration-300 ${activeItem === item.name ? "opacity-100 text-[#13a4ec]" : "opacity-0 group-hover:opacity-100 text-[#13a4ec]/50"}`}>[</span>
                {item.name}
                <span className={`transition-opacity duration-300 ${activeItem === item.name ? "opacity-100 text-[#13a4ec]" : "opacity-0 group-hover:opacity-100 text-[#13a4ec]/50"}`}>]</span>
              </a>
            </MagneticButton>
          ))}
        </div>

        <div className="h-4 w-[1px] bg-white/10 mx-2" />

        <MagneticButton strength={0.3}>
          <a href="#pricing" className="relative group overflow-hidden bg-[#13a4ec] text-black font-black px-6 py-2.5 rounded-full text-[11px] uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(19,164,236,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] border border-[#13a4ec]/50 flex items-center justify-center min-w-[160px]">
            <span className="group-hover:-translate-y-8 transition-transform duration-500 absolute">
              Initialize Access
            </span>
            <span className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 absolute flex items-center gap-2">
              <Activity size={14} className="animate-pulse" />
              Initializing...
            </span>
            {/* Invisible placeholder to keep width */}
            <span className="opacity-0">Initialize Access</span>
          </a>
        </MagneticButton>
      </motion.div>
    </nav>
  );
};

