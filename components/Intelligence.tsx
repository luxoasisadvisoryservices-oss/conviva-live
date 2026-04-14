"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const knowledgeItems = [
  "Building access steps",
  "Keyless entry codes",
  "Arrival instructions",
  "Parking details",
  "WiFi credentials",
  "Appliance guides",
  "Apartment rules",
  "Building rules",
  "Recurring known issues",
  "Maintenance notes",
  "Local directions",
  "Check-in specifics",
  "Special instructions",
  "Guest FAQ answers",
];

export default function Intelligence() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="intelligence" className="py-24 px-6 bg-[#1E2D3D] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-teal-200 uppercase bg-teal-800/30 border border-teal-700/40 px-3 py-1.5 rounded-full mb-6">
                Unit-level intelligence
              </span>
              <h2 className="font-display text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
                Every property has
                <br />
                <span className="italic text-teal-400">its own brain.</span>
              </h2>
              <p className="text-lg text-[#8FADC4] leading-relaxed mb-8">
                Generic AI gives generic answers. Conviva knows the exact
                details of each unit — not because it guesses, but because that
                knowledge is structured, stored, and used directly.
              </p>
              <p className="text-lg text-[#8FADC4] leading-relaxed mb-8">
                Conviva can know your unit better than a new VA, better than an
                untrained staff member, and better than any off-the-shelf
                chatbot — because the information never changes, never gets
                forgotten, and never gets confused between properties.
              </p>

              <div className="space-y-3">
                {[
                  "Precise answers, not broad guesses",
                  "Built from real operational data",
                  "Each unit is completely separate",
                  "Consistent across every conversation",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 text-sm text-white"
                  >
                    <div className="w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — knowledge layer visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-[#243545] rounded-2xl border border-[#2E4155] p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="2" width="12" height="3" rx="1" fill="white"/>
                    <rect x="2" y="6.5" width="12" height="3" rx="1" fill="white" opacity="0.7"/>
                    <rect x="2" y="11" width="8" height="3" rx="1" fill="white" opacity="0.4"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Murjan 3 — Knowledge Layer</p>
                  <p className="text-[#8FADC4] text-xs">14 data points active</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {knowledgeItems.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.04 }}
                    className="text-xs bg-[#1E2D3D] text-teal-300 border border-teal-800/60 px-3 py-1.5 rounded-full"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>

              {/* Example response */}
              <div className="mt-6 pt-6 border-t border-[#2E4155]">
                <p className="text-xs text-[#8FADC4] mb-3 font-medium uppercase tracking-wide">
                  Sample response generated
                </p>
                <div className="bg-[#1E2D3D] rounded-xl p-4">
                  <p className="text-sm text-white leading-relaxed">
                    "For building access, enter{" "}
                    <span className="text-teal-400 font-medium">4821#</span> at the
                    lobby keypad. Take the elevator to floor 12 — apartment 1204.
                    Door code is{" "}
                    <span className="text-teal-400 font-medium">7736</span>. Parking
                    is level B2, bay 47."
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="w-2 h-2 rounded-full bg-teal-400" />
                    <p className="text-xs text-[#8FADC4]">
                      Answered from unit data · 0.4s
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
