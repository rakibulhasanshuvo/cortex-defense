"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Loader2, AlertCircle } from "lucide-react";

export const NewsletterForm = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setStatus("error");
        } else {
            setStatus("success");
            setEmail("");
        }

        setTimeout(() => setStatus("idle"), 5000);
    };

    return (
        <div className="relative group">
            <form onSubmit={handleSubmit} className="relative">
                <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="EMAIL ADDRESS" 
                    disabled={status === "loading" || status === "success"}
                    className="w-full glass bg-transparent px-6 py-4 rounded-xl text-[10px] font-mono uppercase tracking-widest text-white border-white/5 focus:border-primary/50 focus:outline-none transition-all disabled:opacity-50"
                    required
                />
                <button 
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="absolute right-2 top-2 p-2 bg-primary/10 hover:bg-primary text-primary hover:text-black rounded-lg transition-all duration-300 disabled:opacity-50"
                >
                    <AnimatePresence mode="wait">
                        {status === "loading" ? (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0, rotate: 0 }}
                                animate={{ opacity: 1, rotate: 360 }}
                                exit={{ opacity: 0 }}
                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                data-testid="loading-icon"
                            >
                                <Loader2 size={18} />
                            </motion.div>
                        ) : status === "success" ? (
                            <motion.div
                                key="success"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                            >
                                <Check size={18} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="idle"
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 5 }}
                            >
                                <ArrowRight size={18} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </form>

            <AnimatePresence>
                {status === "success" && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute -bottom-8 left-0 text-[10px] font-mono text-green-500 uppercase tracking-widest flex items-center gap-2"
                    >
                        <Check size={12} /> PROTOCOL SUBSCRIPTION CONFIRMED
                    </motion.div>
                )}
                {status === "error" && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute -bottom-8 left-0 text-[10px] font-mono text-red-500 uppercase tracking-widest flex items-center gap-2"
                    >
                        <AlertCircle size={12} /> ENCRYPTION ERROR: INVALID ADDRESS
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
