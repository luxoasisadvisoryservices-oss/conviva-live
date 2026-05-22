"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
const pains = [
  { icon: "📱", title: "You are always watching WhatsApp", body: "Evenings, weekends, late nights. The moment you step away, a message comes in. Guest communication never stops, and neither do you." },
  { icon: "🔁", title: "The same questions, every single day", body: "Building access. Parking. Check-in steps. WiFi. Appliances. Every new guest asks the same things, and someone has to answer them, every time." },
  { icon: "🌍", title: "Your guests speak 6 languages. Your VA speaks one.", body: "Russian guests, Arabic families, Chinese tourists, European travellers. Multilingual communication is a daily reality in Dubai, and most teams are not equipped for it." },
  { icon: "📦", title: "Every VA you hire needs weeks of training. Then they leave.", body: "Unit access flows, building quirks, recurring issues. That knowledge lives in people's heads. When they go, it goes with them. And you start again." },
  { icon: "📈", title: "Volume grows, quality drops", body: "The more units you manage, the harder it is to maintain the same standard. What worked for 5 properties starts breaking at 20." },
  { icon: "🤝", title: "Sensitive situations need a real person", body: "Some moments require genuine empathy, the kind that builds trust and turns a difficult experience into a loyal guest. Conviva.live knows when to step back and let your team take over." },
];
export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="problem" className="py-24 px-6 bg-[#F4F4F1]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-teal-600 uppercase bg-teal-50 border border-teal-100 px-3 py-1.5 rounded-full mb-5">The challenge</span>
          <h2 className="font-display text-4xl lg:text-5xl text-[#1E2D3D] tracking-tight mb-5">Running holiday homes means<br /><span className="italic">managing communication constantly.</span></h2>
          <p className="text-lg text-[#3D5166] max-w-2xl mx-auto">Whether you manage 5 units or 50, the communication pressure is the same. Some of it is predictable. A lot of it is not. Conviva handles both, learning unit by unit, and knows exactly when to hand back to your team, because real hospitality will always be a conversation between people.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pains.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.08 }} className="bg-white rounded-2xl p-6 border border-[#E5E5E0] hover:border-teal-100 hover:shadow-md transition-all duration-300">
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
