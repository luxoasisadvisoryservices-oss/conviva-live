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
          <p className="font-display text-xl lg:text-2xl text-[#1E2D3D] leading-relaxed mb-8 italic">Since running Conviva on our JBR units, the difference has been immediate. Guests get accurate answers, the VA focuses on what actually needs human attention, and nothing falls through the cracks.</p>
          <div>
            <p className="font-semibold text-[#1E2D3D] text-sm">Lux Oasis Holiday Homes</p>
            <p className="text-sm text-[#7A8899]">Dubai, UAE</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
