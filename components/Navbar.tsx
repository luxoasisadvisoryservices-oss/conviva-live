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
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div className="w-full bg-[#1E2D3D] py-2 px-4 text-center">
        <p className="text-xs text-[#8FADC4]">
          A product by{" "}
          <a href="https://luxoasisadvisory.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors font-medium">
            Lux Oasis Advisory &amp; Services LLC
          </a>
        </p>
      </div>
      <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E5E5E0] shadow-sm" : "bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E5E5E0]"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <img src="/conviva-logo.jpg" alt="Conviva.live" className="w-8 h-8 rounded-lg" />
            <span className="text-[16px] font-semibold text-[#1E2D3D] tracking-tight whitespace-nowrap">Conviva.live</span>
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-[#3D5166] hover:text-[#1E2D3D] transition-colors whitespace-nowrap">{l.label}</a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center">
            <a href="#contact" className="text-sm font-medium bg-teal-600 hover:bg-teal-800 text-white px-5 py-2.5 rounded-lg transition-all duration-200 whitespace-nowrap">Book a demo</a>
          </div>
          <button className="lg:hidden p-2 text-[#3D5166] flex-shrink-0" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="lg:hidden bg-[#FAFAF8] border-b border-[#E5E5E0] px-4 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-[#3D5166] py-2 border-b border-[#F0F0EC] last:border-0" onClick={() => setOpen(false)}>{l.label}</a>
              ))}
              <a href="#contact" className="text-sm font-medium bg-teal-600 text-white px-5 py-3 rounded-lg text-center mt-2" onClick={() => setOpen(false)}>Book a demo</a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
