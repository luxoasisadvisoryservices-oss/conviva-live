"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            <motion.div {...fadeUp(0.1)}>
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-teal-600 uppercase bg-teal-50 border border-teal-100 px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse" />
                AI-powered guest communication
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-display text-5xl lg:text-6xl text-[#1E2D3D] leading-[1.1] tracking-tight mb-6"
            >
              Guest communication,{" "}
              <span className="italic text-teal-600">handled.</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              className="text-lg text-[#3D5166] leading-relaxed mb-8 max-w-lg"
            >
              Conviva gives every holiday home its own AI layer. Guests message
              on WhatsApp as normal. Your team stays in control through
              Chatwoot. Precise answers, 24/7 — without losing the human touch.
            </motion.p>

            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-wrap gap-3 mb-12"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-800 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-px text-sm"
              >
                Book a demo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-[#1E2D3D] border border-[#E5E5E0] hover:border-[#C0C0B8] font-medium px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-px text-sm"
              >
                See how it works
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              {...fadeUp(0.5)}
              className="flex flex-wrap gap-6 text-sm text-[#3D5166]"
            >
              {[
                "WhatsApp native",
                "Chatwoot control room",
                "Unit-specific AI",
                "Human handover",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7l3 3 6-6" stroke="#2A7A6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — mock UI */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative">
              {/* WhatsApp chat mock */}
              <div className="bg-white rounded-2xl border border-[#E5E5E0] shadow-xl overflow-hidden">
                {/* Chat header */}
                <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white text-sm font-semibold">
                    M3
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Murjan 3 — Guest Support</p>
                    <p className="text-[#a8e0c8] text-xs">Powered by Conviva</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#25D366]" />
                    <span className="text-[#a8e0c8] text-xs">Online</span>
                  </div>
                </div>

                {/* Chat body */}
                <div className="bg-[#ECE5DD] p-4 space-y-3 min-h-[280px]">
                  {/* Guest message */}
                  <div className="flex justify-end">
                    <div className="bg-[#DCF8C6] rounded-tl-xl rounded-tr-sm rounded-bl-xl rounded-br-xl px-4 py-2.5 max-w-[75%] shadow-sm">
                      <p className="text-[#1E2D3D] text-sm">Hi! We just arrived but can't figure out how to get into the building. There's a keypad but we don't know the code?</p>
                      <p className="text-[#7A8899] text-xs mt-1 text-right">11:42 PM ✓✓</p>
                    </div>
                  </div>

                  {/* AI reply */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white rounded-tr-xl rounded-tl-sm rounded-bl-xl rounded-br-xl px-4 py-2.5 max-w-[80%] shadow-sm">
                      <p className="text-[#1E2D3D] text-sm">
                        Hi! Welcome to Murjan 3 🙏<br /><br />
                        For building entry, use keypad code <strong>4821#</strong> at the main lobby door. Take the elevator to floor 12, then apartment 1204 — your door code is <strong>7736</strong>.<br /><br />
                        Parking is B2, bay 47. Let me know if you need anything else!
                      </p>
                      <p className="text-[#7A8899] text-xs mt-1 text-right">11:42 PM ✓✓</p>
                    </div>
                  </motion.div>

                  {/* Guest thanks */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                    className="flex justify-end"
                  >
                    <div className="bg-[#DCF8C6] rounded-tl-xl rounded-tr-sm rounded-bl-xl rounded-br-xl px-4 py-2.5 max-w-[60%] shadow-sm">
                      <p className="text-[#1E2D3D] text-sm">Perfect, thank you so much! 🙌</p>
                      <p className="text-[#7A8899] text-xs mt-1 text-right">11:43 PM ✓✓</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Chatwoot badge floating */}
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 2.0, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl border border-[#E5E5E0] shadow-lg p-3 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#1F93FF] flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="1" y="1" width="12" height="9" rx="2" stroke="white" strokeWidth="1.2"/>
                    <path d="M4 13l3-3 3 3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-[#1E2D3D]">Chatwoot — operator view</p>
                  <p className="text-xs text-[#3D5166]">AI replied · 0s response time</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              </motion.div>

              {/* Unit intelligence badge */}
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute -top-4 -right-4 bg-teal-600 rounded-xl shadow-lg p-3"
              >
                <p className="text-white text-xs font-medium">Murjan 3</p>
                <p className="text-teal-100 text-xs">Unit knowledge active</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
