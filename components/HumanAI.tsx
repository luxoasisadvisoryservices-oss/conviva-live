"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function HumanAI() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="human-ai" className="py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-teal-600 uppercase bg-teal-50 border border-teal-100 px-3 py-1.5 rounded-full mb-5">
            Human + AI
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-[#1E2D3D] tracking-tight mb-5">
            This is not a chatbot.
            <br />
            <span className="italic text-teal-600">It is an extension of your team.</span>
          </h2>
          <p className="text-lg text-[#3D5166] max-w-2xl mx-auto leading-relaxed">
            Hospitality is built on human care. Conviva.live exists to protect that — not replace it. The AI handles the complex and repetitive. Your team steps in where genuine human care matters most.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Conviva handles */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-teal-50 border border-teal-100 rounded-2xl p-7"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center mb-5">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="1.5"/>
                <path d="M6 9l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-semibold text-[#1E2D3D] text-lg mb-4">Conviva.live handles</h3>
            <ul className="space-y-2.5">
              {[
                "Building access, codes and arrival flow",
                "Unit-specific appliance quirks and resets",
                "Parking, directions and Google Maps links",
                "WiFi, TV, and how-to video guides",
                "Voice messages — read and replied to",
                "Late-night and out-of-hours queries",
                "Recurring known issues for each unit",
                "Local area questions and current conditions",
                "Pre-arrival and check-in instructions",
                "Escalation to the right person when needed",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#1E2D3D]">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-600 flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Humans handle */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-[#E5E5E0] rounded-2xl p-7"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1E2D3D] flex items-center justify-center mb-5">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="6" r="3" stroke="white" strokeWidth="1.5"/>
                <path d="M3 15c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="font-semibold text-[#1E2D3D] text-lg mb-4">Your team steps in for</h3>
            <ul className="space-y-2.5">
              {[
                "Complaints that need a real apology",
                "Maintenance visits and urgent follow-ups",
                "Refund or compensation decisions",
                "Guests who are frustrated or upset",
                "Situations requiring genuine empathy",
                "Anything outside normal operational logic",
                "Final decisions that need human judgement",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#1E2D3D]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1E2D3D] flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-[#E5E5E0]">
              <p className="text-xs text-[#7A8899] leading-relaxed">
                Conviva.live is designed to escalate early and cleanly — so your team always has the context they need before they step in.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#F4F4F1] rounded-2xl p-8 text-center border border-[#E5E5E0]"
        >
          <p className="font-display text-2xl lg:text-3xl text-[#1E2D3D] italic leading-snug max-w-2xl mx-auto">
            "Escalation is not a weakness. It is built in by design — because the right person at the right moment is what hospitality is about."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
