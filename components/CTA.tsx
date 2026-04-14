"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6 bg-[#1E2D3D]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-teal-300 uppercase bg-teal-800/30 border border-teal-700/40 px-3 py-1.5 rounded-full mb-6">
              Get started
            </span>
            <h2 className="font-display text-4xl lg:text-5xl text-white tracking-tight mb-6 leading-tight">
              Ready to simplify<br />
              <span className="italic text-teal-400">guest communication?</span>
            </h2>
            <p className="text-lg text-[#8FADC4] leading-relaxed mb-10">
              We will walk you through how Conviva.live works for your specific operation — your units, your team, your workflow. No pressure, no hard sell.
            </p>
            <div className="space-y-5">
              {[
                { title: "See it live", body: "We will show you a working demo using a real property setup." },
                { title: "Get your questions answered", body: "Bring your use case. We will walk through how Conviva.live fits your operation." },
                { title: "Start when you are ready", body: "Onboarding is straightforward. You can have your first unit live quickly." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-teal-600/30 border border-teal-600/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="#4A9E8E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm mb-0.5">{item.title}</p>
                    <p className="text-sm text-[#8FADC4]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="bg-white rounded-2xl p-8">
              <h3 className="font-semibold text-[#1E2D3D] text-lg mb-1">Book a demo</h3>
              <p className="text-sm text-[#3D5166] mb-6">
                Tell us about your operation and we will get back to you within one business day.
              </p>
              <form action="https://formspree.io/f/mlgaddeg" method="POST" className="space-y-4">
                <input type="hidden" name="_subject" value="New demo request — Conviva.live" />
                <div>
                  <label className="block text-xs font-medium text-[#3D5166] mb-1.5">Your name</label>
                  <input type="text" name="name" required placeholder="Your full name"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#E5E5E0] text-sm text-[#1E2D3D] placeholder-[#B0B0A8] focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-50 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#3D5166] mb-1.5">Email address</label>
                  <input type="email" name="email" required placeholder="you@yourbusiness.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#E5E5E0] text-sm text-[#1E2D3D] placeholder-[#B0B0A8] focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-50 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#3D5166] mb-1.5">How many units do you manage?</label>
                  <select name="units" className="w-full px-4 py-2.5 rounded-lg border border-[#E5E5E0] text-sm text-[#1E2D3D] focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-50 transition-all bg-white">
                    <option value="">Select range</option>
                    <option>1-5 units</option>
                    <option>6-15 units</option>
                    <option>16-30 units</option>
                    <option>30+ units</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#3D5166] mb-1.5">Anything you would like us to know? (optional)</label>
                  <textarea name="message" rows={3} placeholder="Your current setup, main pain points, questions..."
                    className="w-full px-4 py-2.5 rounded-lg border border-[#E5E5E0] text-sm text-[#1E2D3D] placeholder-[#B0B0A8] focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-50 transition-all resize-none" />
                </div>
                <button type="submit" className="w-full bg-teal-600 hover:bg-teal-800 text-white font-medium py-3 rounded-lg text-sm transition-all duration-200 hover:-translate-y-px">
                  Book my demo
                </button>
                <p className="text-xs text-center text-[#B0B0A8]">No commitment. We will respond within one business day.</p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
