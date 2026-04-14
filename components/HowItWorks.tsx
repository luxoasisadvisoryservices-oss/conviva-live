"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Unit data is structured at onboarding",
    body: "Access codes, building rules, parking, WiFi, appliances, arrival steps, known quirks — all captured in a structured knowledge layer for each property.",
  },
  {
    number: "02",
    title: "Conviva learns that unit deeply",
    body: "The AI doesn't rely on guesswork or generic knowledge. It uses the exact operational details of that specific unit — and only that unit.",
  },
  {
    number: "03",
    title: "Guests message on WhatsApp as normal",
    body: "No app. No sign-up. No friction. Guests message exactly as they already do — and receive fast, precise, natural replies.",
  },
  {
    number: "04",
    title: "Conviva replies with unit-specific accuracy",
    body: "Not broad. Not generic. Not guessed. Every response is grounded in the real details of that property.",
  },
  {
    number: "05",
    title: "Your team monitors from Chatwoot",
    body: "All conversations flow through Chatwoot — your control room. One VA can oversee multiple units from a single, organised interface.",
  },
  {
    number: "06",
    title: "Humans step in when it matters",
    body: "Complaints, maintenance, frustration, edge cases. Conviva recognises when a real person should take over — and makes the handover clean.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-teal-600 uppercase bg-teal-50 border border-teal-100 px-3 py-1.5 rounded-full mb-5">
            How it works
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-[#1E2D3D] tracking-tight mb-5 max-w-2xl">
            Simple to understand.
            <br />
            <span className="italic">Precise in practice.</span>
          </h2>
          <p className="text-lg text-[#3D5166] max-w-xl">
            Conviva fits into the way you already work — no new tools for guests,
            no major changes for your team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E0] rounded-2xl overflow-hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#FAFAF8] p-8 hover:bg-white transition-colors duration-200"
            >
              <div className="font-display text-5xl text-teal-100 mb-4 leading-none">
                {step.number}
              </div>
              <h3 className="font-semibold text-[#1E2D3D] mb-3 text-base leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-[#3D5166] leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
