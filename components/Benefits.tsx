"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    icon: "⚡",
    title: "Faster replies, always",
    body: "Guests receive accurate responses in seconds — not minutes. At 2am or 2pm.",
  },
  {
    icon: "🎯",
    title: "Precise, not generic",
    body: "Every answer is grounded in real unit data. No guessing, no broad catch-all responses.",
  },
  {
    icon: "🔄",
    title: "Consistent across your team",
    body: "The same accurate information every time — regardless of which team member is on shift.",
  },
  {
    icon: "📊",
    title: "One VA, more units",
    body: "With Conviva handling routine queries, one person can comfortably oversee significantly more properties.",
  },
  {
    icon: "🌙",
    title: "Coverage outside hours",
    body: "Guests don't wait until morning. Communication continues reliably through evenings and weekends.",
  },
  {
    icon: "🛡️",
    title: "Quality at scale",
    body: "As your portfolio grows, service quality doesn't dilute. Conviva scales with you.",
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-teal-600 uppercase bg-teal-50 border border-teal-100 px-3 py-1.5 rounded-full mb-5">
            Operational benefits
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-[#1E2D3D] tracking-tight mb-5">
            Less pressure.
            <br />
            <span className="italic">Better operations.</span>
          </h2>
          <p className="text-lg text-[#3D5166] max-w-xl mx-auto">
            Conviva isn&apos;t about replacing effort. It&apos;s about applying it where it
            actually matters.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white border border-[#E5E5E0] rounded-2xl p-7 hover:border-teal-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-4">{b.icon}</div>
              <h3 className="font-semibold text-[#1E2D3D] mb-2">{b.title}</h3>
              <p className="text-sm text-[#3D5166] leading-relaxed">{b.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
