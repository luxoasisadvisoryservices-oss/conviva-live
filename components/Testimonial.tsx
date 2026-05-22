"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
export default function Testimonial() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="bg-white border border-[#E5E5E0] rounded-2xl p-8 md:p-12">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mb-6 text-teal-200"><path d="M6 18h6l-2 8h4l4-12V6H6v12zm14 0h6l-2 8h4l4-12V6H20v12z" fill="currentColor"/></svg>
          <p className="font-display text-xl lg:text-2xl text-[#1E2D3D] leading-relaxed mb-8 italic">We have been running Conviva on Murjan 3 in JBR since the first build. The difference is that I have stopped checking WhatsApp at midnight. Guests get accurate answers, my VA focuses on what actually needs human attention, and nothing falls through the cracks.</p>
          <div>
            <p className="font-semibold text-[#1E2D3D] text-sm">Damiano Pesciaioli</p>
            <p className="text-sm text-[#7A8899]">Founder, Lux Oasis Holiday Homes</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
