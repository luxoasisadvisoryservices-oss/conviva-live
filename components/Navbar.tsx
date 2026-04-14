"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#intelligence" },
  { label: "Use cases", href: "#use-cases" },
  { label: "FAQ", href: "#faq" },
];

function Logo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#2A7A6B"/>
      <path d="M6 11C6 9.343 7.343 8 9 8h14c1.657 0 3 1.343 3 3v7c0 1.657-1.343 3-3 3h-3l-4 4-4-4H9c-1.657 0-3-1.343-3-3v-7z" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="1.2"/>
      <circle cx="16" cy="14.5" r="2" fill="white"/>
      <line x1="11" y1="14.5" x2="13.5" y2="14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="18.5" y1="14.5" x2="21" y2="14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E5E5E0] shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <a href="#" className="flex items-center gap-2.5">
          <Logo />
          <span className="text-[17px] font-semibold text-[#1E2D3D] tracking-tight">Conviva.live</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-[#3D5166] hover:text-[#1E2D3D] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a href="#contact" className="text-sm font-medium bg-teal-600 hover:bg-teal-800 text-white px-5 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-px">
            Book a demo
          </a>
        </div>

        <button className="md:hidden p-2 text-[#3D5166]" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            className="md:hidden bg-[#FAFAF8] border-b border-[#E5E5E0] px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-[#3D5166]" onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <a href="#contact" className="text-sm font-medium bg-teal-600 text-white px-5 py-2.5 rounded-lg text-center" onClick={() => setOpen(false)}>
              Book a demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
