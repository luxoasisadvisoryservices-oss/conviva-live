"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", units: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/mlgaddeg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#1E2D3D]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-teal-300 uppercase bg-teal-800/30 border border-teal-700/40 px-3 py-1.5 rounded-full mb-6">
              Get started
            </span>
            <h2 className="font-display text-4xl lg:text-5xl text-white tracking-tight mb-6 leading-tight">
              Ready to simplify
              <br />
              <span className="italic text-teal-400">guest communication?</span>
            </h2>
            <p className="text-lg text-[#8FADC4] leading-relaxed mb-10">
              We will walk you through how Conviva works for your specific
              operation — your units, your team, your workflow. No pressure,
              no hard sell.
            </p>

            <div className="space-y-5">
              {[
                {
                  title: "See it live",
                  body: "We will show you a working demo using a real property setup.",
                },
                {
                  title: "Get your questions answered",
                  body: "Bring your use case. We will walk through how Conviva fits your operation.",
                },
                {
                  title: "Start when you are ready",
                  body: "Onboarding is straightforward. You can have your first unit live quickly.",
                },
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

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center mx-auto mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M4 12l5 5 11-11" stroke="#2A7A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-[#1E2D3D] mb-2">Thank you</h3>
                  <p className="text-sm text-[#3D5166]">
                    We will be in touch shortly to arrange a time that works for you.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-semibold text-[#1E2D3D] text-lg mb-1">Book a demo</h3>
                  <p className="text-sm text-[#3D5166] mb-6">
                    Tell us a bit about your operation and we will get back to you within one business day.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-[#3D5166] mb-1.5">Your name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 rounded-lg border border-[#E5E5E0] text-sm text-[#1E2D3D] placeholder-[#B0B0A8] focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-50 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#3D5166] mb-1.5">Email address</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@yourbusiness.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-[#E5E5E0] text-sm text-[#1E2D3D] placeholder-[#B0B0A8] focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-50 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#3D5166] mb-1.5">How many units do you manage?</label>
                      <select
                        value={form.units}
                        onChange={(e) => setForm({ ...form, units: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-[#E5E5E0] text-sm text-[#1E2D3D] focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-50 transition-all bg-white"
                      >
                        <option value="">Select range</option>
                        <option>1–5 units</option>
                        <option>6–15 units</option>
                        <option>16–30 units</option>
                        <option>30+ units</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#3D5166] mb-1.5">Anything you would like us to know? (optional)</label>
                      <textarea
                        rows={3}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Your current setup, main pain points, questions..."
                        className="w-full px-4 py-2.5 rounded-lg border border-[#E5E5E0] text-sm text-[#1E2D3D] placeholder-[#B0B0A8] focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-50 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-teal-600 hover:bg-teal-800 disabled:opacity-60 text-white font-medium py-3 rounded-lg text-sm transition-all duration-200 hover:-translate-y-px"
                    >
                      {loading ? "Sending..." : "Book my demo"}
                    </button>

                    <p className="text-xs text-center text-[#B0B0A8]">
                      No commitment. We will respond within one business day.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
