"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
const tiers = [
  { name: "Starter", units: "1 to 10 units", price: "130", desc: "For independent hosts and small operators getting started with AI-powered guest communication.", highlight: false },
  { name: "Growth", units: "11 to 30 units", price: "110", desc: "For established operators ready to scale communication without scaling team size.", highlight: false },
  { name: "Scale", units: "31 to 60 units", price: "90", desc: "For professional operators running serious portfolios who need consistent quality at volume.", highlight: true },
  { name: "Portfolio", units: "61 to 100 units", price: "75", desc: "For large operators managing complex multi-building portfolios with high-volume guest flow.", highlight: false },
];
export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-teal-600 uppercase bg-teal-50 border border-teal-100 px-3 py-1.5 rounded-full mb-5">Pricing</span>
          <h2 className="font-display text-4xl lg:text-5xl text-[#1E2D3D] tracking-tight mb-5">Pricing that <span className="italic">rewards scale.</span></h2>
          <p className="text-lg text-[#3D5166] max-w-2xl mx-auto">Volume pricing built for operators. The more units you run, the lower your per-unit cost. Transparent tiers, no per-message fees, no setup surprises.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {tiers.map((tier, i) => (
            <motion.div key={tier.name} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }} className={`rounded-2xl p-6 flex flex-col ${tier.highlight ? "bg-[#1E2D3D] text-white border-2 border-teal-600 ring-2 ring-teal-600/20" : "bg-white border border-[#E5E5E0]"}`}>
              <p className={`text-xs font-medium uppercase tracking-widest mb-3 ${tier.highlight ? "text-teal-400" : "text-[#7A8899]"}`}>{tier.name}</p>
              <p className={`text-xs mb-4 ${tier.highlight ? "text-[#8FADC4]" : "text-[#7A8899]"}`}>{tier.units}</p>
              <div className="mb-4">
                <span className={`text-3xl font-semibold ${tier.highlight ? "text-white" : "text-[#1E2D3D]"}`}>AED {tier.price}</span>
                <span className={`text-sm ml-1 ${tier.highlight ? "text-[#8FADC4]" : "text-[#7A8899]"}`}>per unit / month</span>
              </div>
              <p className={`text-sm leading-relaxed flex-1 ${tier.highlight ? "text-[#8FADC4]" : "text-[#3D5166]"}`}>{tier.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }} className="text-center">
          <p className="text-sm text-[#3D5166] mb-3">Managing more than 100 units? <a href="#contact" className="text-teal-600 hover:text-teal-800 transition-colors font-medium">Get in touch for custom enterprise pricing.</a></p>
          <p className="text-xs text-[#7A8899] max-w-2xl mx-auto mb-8">All plans include unit-specific AI knowledge layer, WhatsApp Business API integration, Chatwoot operator dashboard, human escalation logic, and ongoing platform updates.</p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-800 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 text-sm">See if Conviva fits your operation</a>
        </motion.div>
      </div>
    </section>
  );
}
