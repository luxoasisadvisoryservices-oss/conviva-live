"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const rows = [
  { label: "Unit knowledge", generic: "Generic or none", conviva: "Deep, structured per unit" },
  { label: "Reply quality", generic: "Broad, often vague", conviva: "Precise, based on real data" },
  { label: "WhatsApp integration", generic: "Varies", conviva: "Native, no guest friction" },
  { label: "Operator control", generic: "Limited", conviva: "Full Chatwoot dashboard" },
  { label: "Human handover", generic: "Manual or absent", conviva: "Built-in, seamless" },
  { label: "Escalation logic", generic: "Rarely exists", conviva: "Smart, early escalation" },
  { label: "Hospitality tone", generic: "Robotic", conviva: "Natural, human-feeling" },
  { label: "Multi-unit oversight", generic: "No", conviva: "Yes — built for it" },
];

export default function Comparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="comparison" className="py-24 px-6 bg-[#F4F4F1]">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-teal-600 uppercase bg-teal-50 border border-teal-100 px-3 py-1.5 rounded-full mb-5">
            The difference
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-[#1E2D3D] tracking-tight mb-5">
            Not all AI is
            <span className="italic text-teal-600"> the same.</span>
          </h2>
          <p className="text-lg text-[#3D5166] max-w-xl mx-auto">
            Generic chatbots give generic answers. Conviva was built for
            holiday homes operators who need precision, control, and quality
            at scale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl border border-[#E5E5E0] overflow-hidden shadow-sm"
        >
          {/* Header */}
          <div className="grid grid-cols-3 bg-[#1E2D3D]">
            <div className="p-5 text-sm font-medium text-[#8FADC4]">Feature</div>
            <div className="p-5 text-sm font-medium text-[#8FADC4] border-l border-[#2E4155]">Generic chatbot</div>
            <div className="p-5 text-sm font-medium text-teal-300 border-l border-[#2E4155] flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-teal-400" />
              Conviva
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 border-t border-[#F0F0EC] ${
                i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"
              }`}
            >
              <div className="p-4 text-sm font-medium text-[#1E2D3D]">{row.label}</div>
              <div className="p-4 text-sm text-[#7A8899] border-l border-[#F0F0EC] flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 2l8 8M10 2l-8 8" stroke="#E5A87C" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                {row.generic}
              </div>
              <div className="p-4 text-sm text-teal-700 border-l border-[#F0F0EC] flex items-center gap-2 font-medium">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1.5 6l3 3 6-6" stroke="#2A7A6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {row.conviva}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
