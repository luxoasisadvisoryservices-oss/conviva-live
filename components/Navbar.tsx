"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#intelligence" },
  { label: "Use cases", href: "#use-cases" },
  { label: "FAQ", href: "#faq" },
];

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
          <Image
            src="/logo.png"
            alt="Conviva.live"
            width={32}
            height={32}
            className="rounded-lg"
          />
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
