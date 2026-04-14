"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pains = [
  {
    icon: "📱",
    title: "You're always watching WhatsApp",
    body: "Evenings, weekends, late nights. The moment you step away, a message comes in. Guest communication never stops.",
  },
  {
    icon: "🔁",
    title: "The same questions, every time",
    body: "Building access. Parking. Check-in steps. WiFi. Appliances. Every new guest asks the same things — and someone has to answer them.",
  },
  {
    icon: "⚡",
    title: "Inconsistent replies across your team",
    body: "One VA says one thing. Another says something slightly different. Guests notice. Trust erodes.",
  },
  {
    icon: "📦",
    title: "Knowledge is fragmented",
    body: "Each unit has its own quirks — access flows, recurring issues, special instructions. That knowledge lives in people's heads, not in your system.",
  },
  {
    icon: "📈",
    title: "Volume grows, quality drops",
    body: "As you add more units, communication becomes harder to manage well. Scaling operations without scaling stress feels impossible.",
  },
  {
    icon: "🤝",
    title: "Sensitive situations need a real person",
    body: "Complaints, maintenance issues, frustrated guests. These moments need genuine human care — not an auto-reply that misses the tone.",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="py-24 px-6 bg-[#F4F4F1]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-teal-600 uppercase bg-teal-50 border border-teal-100 px-3 py-1.5 rounded-full mb-5">
            The challenge
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-[#1E2D3D] tracking-tight mb-5">
            Running holiday homes means
            <br />
            <span className="italic">managing communication constantly.</span>
          </h2>
          <p className="text-lg text-[#3D5166] max-w-xl mx-auto">
            And most of it is repetitive, predictable, and time-consuming — even
            when you have good people in place.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pains.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-[#E5E5E0] hover:border-teal-100 hover:shadow-md transition-all duration-300"
            >
              <div className="text-2xl mb-4">{p.icon}</div>
              <h3 className="font-semibold text-[#1E2D3D] mb-2 text-base">{p.title}</h3>
              <p className="text-sm text-[#3D5166] leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
