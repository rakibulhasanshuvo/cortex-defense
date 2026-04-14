"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Twitter, Github, Linkedin } from "../ui/Icons";
import Link from "next/link";
import { MagneticButton } from "../ui/MagneticButton";
import { NewsletterForm } from "../ui/NewsletterForm";
const SOCIAL_ICONS = [Twitter, Github, Linkedin];


export const Footer = () => {
  return (
    <footer className="py-24 px-6 md:px-24 bg-[#080c0e] border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/10 blur-[160px] rounded-full pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="md:col-span-4 max-w-sm">
            <Link href="/" className="flex items-center gap-2 mb-8 group">
              <Shield className="text-primary group-hover:scale-110 transition-transform" size={32} />
              <span className="font-bold tracking-tighter text-2xl text-white">CORTEX</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-10">
              Next-generation autonomous security systems leveraging advanced AI 
              and distributed architectures for the decentralized world.
            </p>
            <div className="flex gap-4">
              {SOCIAL_ICONS.map((Icon, i) => (
                <MagneticButton key={i} strength={0.3}>
                  <Link href="#" className="p-3 glass rounded-xl text-white/40 hover:text-primary transition-all duration-300 block border border-transparent hover:border-white/5">
                    <Icon size={18} />
                  </Link>
                </MagneticButton>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div key="Protocol">
              <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.3em] mb-8">Protocol</h4>
              <ul className="space-y-4">
                <li><a href="#hero" className="text-white/30 text-[10px] hover:text-primary transition-colors font-mono uppercase tracking-widest block">Cortex.OS</a></li>
                <li><a href="#network" className="text-white/30 text-[10px] hover:text-primary transition-colors font-mono uppercase tracking-widest block">Neural Network</a></li>
                <li><a href="#security" className="text-white/30 text-[10px] hover:text-primary transition-colors font-mono uppercase tracking-widest block">Security Nodes</a></li>
                <li><a href="#docs" className="text-white/30 text-[10px] hover:text-primary transition-colors font-mono uppercase tracking-widest block">Whitepaper</a></li>
              </ul>
            </div>
            <div key="Resources">
              <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.3em] mb-8">Resources</h4>
              <ul className="space-y-4">
                <li><a href="#hero" className="text-white/30 text-[10px] hover:text-primary transition-colors font-mono uppercase tracking-widest block">Documentation</a></li>
                <li><a href="#security" className="text-white/30 text-[10px] hover:text-primary transition-colors font-mono uppercase tracking-widest block">API Reference</a></li>
                <li><a href="#network" className="text-white/30 text-[10px] hover:text-primary transition-colors font-mono uppercase tracking-widest block">Status</a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/30 text-[10px] hover:text-primary transition-colors font-mono uppercase tracking-widest block">Github</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.3em] mb-8">Newsletter</h4>
            <p className="text-white/30 text-[10px] mb-6 font-mono leading-relaxed uppercase tracking-widest">
              SUBSCRIBE TO RECEIVE SECURITY UPDATES AND PROTOCOL CHANGES.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-mono text-white/20 uppercase tracking-widest"
          >
            © 2026 CORTEX DEFENSE SYSTEMS. ALL CORE PROTOCOLS RESERVED.
          </motion.div>
          <div className="flex gap-8 text-[10px] font-mono text-white/20 uppercase tracking-widest">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">System Status</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
