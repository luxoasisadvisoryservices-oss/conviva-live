"use client";
import { motion } from "framer-motion";
const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});
export default function Hero() {
  const checks = ["WhatsApp native", "Knows your guests", "Voice messages", "Human handover"];
  return (
    <section className="pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div {...fadeUp(0.1)}>
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-teal-600 uppercase bg-teal-50 border border-teal-100 px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse" />
                AI-powered guest communication · Built by operators, for operators
              </span>
            </motion.div>
            <motion.h1 {...fadeUp(0.2)} className="font-display text-4xl lg:text-5xl text-[#1E2D3D] leading-[1.15] tracking-tight mb-6">
              Guest communication that knows every unit{" "}
              <span className="italic text-teal-600">as well as you do.</span>
            </motion.h1>
            <motion.p {...fadeUp(0.3)} className="text-lg text-[#3D5166] leading-relaxed mb-8 max-w-lg">
              Conviva gives every holiday home its own AI layer trained on the exact details of that unit. Guests message on WhatsApp. Your team stays in control through Chatwoot. One operator can comfortably oversee 40 units or more.
            </motion.p>
            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3 mb-12">
              <a href="#contact" className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-800 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 text-sm">Book a demo</a>
              <a href="#how-it-works" className="inline-flex items-center gap-2 text-[#1E2D3D] border border-[#E5E5E0] hover:border-[#C0C0B8] font-medium px-6 py-3 rounded-lg transition-all duration-200 text-sm">See how it works</a>
            </motion.div>
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-6 text-sm text-[#3D5166]">
              {checks.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="text-teal-600">&#10003;</span>
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3 }} className="relative">
            <div className="relative">
              <div className="bg-white rounded-2xl border border-[#E5E5E0] shadow-xl overflow-hidden">
                <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white text-sm font-semibold">SL</div>
                  <div>
                    <p className="text-white text-sm font-medium">Sarah L.</p>
                    <p className="text-[#a8e0c8] text-xs">Checking in today · Apt 204 · Powered by Conviva.live</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#25D366]" />
                    <span className="text-[#a8e0c8] text-xs">Online</span>
                  </div>
                </div>
                <div className="bg-[#ECE5DD] p-4 space-y-3 min-h-[320px]">
                  <div className="flex justify-end">
                    <div className="bg-[#DCF8C6] rounded-tl-xl rounded-tr-sm rounded-bl-xl rounded-br-xl px-4 py-2.5 max-w-[80%] shadow-sm">
                      <p className="text-[#1E2D3D] text-sm">The AC has been running for 30 mins but it is still not cooling. It is really hot in here.</p>
                      <p className="text-[#7A8899] text-xs mt-1 text-right">2:14 PM</p>
                    </div>
                  </div>
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.5 }} className="flex justify-start">
                    <div className="bg-white rounded-tr-xl rounded-tl-sm rounded-bl-xl rounded-br-xl px-4 py-2.5 max-w-[85%] shadow-sm">
                      <p className="text-[#1E2D3D] text-sm leading-relaxed">Hi Sarah! This sometimes happens on first use. The AC in Apt 204 needs a quick reset after check-in. Press and hold <strong>MODE</strong> for 5 seconds until it beeps, then set to <strong>COOL 20</strong>. It should start cooling within 2 minutes.</p>
                      <p className="text-[#1E2D3D] text-sm leading-relaxed mt-3">Here is a quick guide: <span className="text-[#0066cc]">conviva.live/ac-guide</span></p>
                      <p className="text-[#1E2D3D] text-sm leading-relaxed mt-3">If it still does not cool, let me know and I will get someone over right away.</p>
                      <p className="text-[#7A8899] text-xs mt-2 text-right">2:14 PM</p>
                    </div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8, duration: 0.5 }} className="flex justify-end">
                    <div className="bg-[#DCF8C6] rounded-tl-xl rounded-tr-sm rounded-bl-xl rounded-br-xl px-4 py-2.5 max-w-[70%] shadow-sm">
                      <p className="text-[#1E2D3D] text-sm">It worked! Thank you so much</p>
                      <p className="text-[#7A8899] text-xs mt-1 text-right">2:16 PM</p>
                    </div>
                  </motion.div>
                </div>
              </div>
              <motion.div initial={{ opacity: 0, y: 12, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 2.0, duration: 0.5 }} className="absolute -bottom-6 -left-6 bg-white rounded-xl border border-[#E5E5E0] shadow-lg p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1F93FF] flex items-center justify-center text-white text-xs font-bold">CW</div>
                <div>
                  <p className="text-xs font-medium text-[#1E2D3D]">Chatwoot — operator view</p>
                  <p className="text-xs text-[#3D5166]">AI replied · 0s · No escalation needed</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: -12, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 1.5, duration: 0.5 }} className="absolute -top-4 -right-4 bg-teal-600 rounded-xl shadow-lg p-3">
                <p className="text-white text-xs font-medium">Sarah L. · Apt 204</p>
                <p className="text-teal-100 text-xs">Guest profile loaded</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
