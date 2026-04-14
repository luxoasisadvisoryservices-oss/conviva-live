"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Chatwoot() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const conversations = [
    { unit: "Murjan 3", guest: "Sarah K.", msg: "Thanks, got in!", time: "11:43 PM", status: "ai", unread: false },
    { unit: "JBR Tower 2", guest: "Marco R.", msg: "AC isn't cooling properly", time: "11:38 PM", status: "escalated", unread: true },
    { unit: "Jumeirah Villa", guest: "Priya M.", msg: "Where is parking exactly?", time: "11:35 PM", status: "ai", unread: false },
    { unit: "Murjan 5", guest: "David L.", msg: "What time is checkout?", time: "11:20 PM", status: "ai", unread: false },
  ];

  return (
    <section id="chatwoot" className="py-24 px-6 bg-[#F4F4F1]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Chatwoot mock */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-2xl border border-[#E5E5E0] shadow-xl overflow-hidden">
              {/* Chatwoot header */}
              <div className="bg-[#1F2D3D] px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C940]" />
                </div>
                <p className="text-[#8FADC4] text-xs ml-2">Chatwoot — All Conversations</p>
                <div className="ml-auto">
                  <span className="bg-teal-600 text-white text-xs px-2 py-0.5 rounded-full">4 active</span>
                </div>
              </div>

              {/* Sidebar + main */}
              <div className="flex" style={{ minHeight: 320 }}>
                {/* Sidebar */}
                <div className="w-48 border-r border-[#E5E5E0] bg-[#F8F8F6] flex-shrink-0">
                  <div className="p-3">
                    <p className="text-xs text-[#7A8899] font-medium uppercase tracking-wide mb-2 px-1">Inboxes</p>
                    {["All (4)", "AI handled (3)", "Escalated (1)", "Resolved"].map((item, i) => (
                      <div
                        key={item}
                        className={`text-xs px-2 py-1.5 rounded-md mb-0.5 cursor-pointer ${
                          i === 0 ? "bg-teal-50 text-teal-700 font-medium" : "text-[#3D5166] hover:bg-[#F0F0EC]"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conversation list */}
                <div className="flex-1">
                  {conversations.map((c, i) => (
                    <motion.div
                      key={c.guest}
                      initial={{ opacity: 0, x: 12 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className={`px-4 py-3 border-b border-[#F0F0EC] hover:bg-[#F8F8F6] cursor-pointer flex items-start gap-3 ${
                        i === 0 ? "bg-teal-50/50" : ""
                      }`}
                    >
                      <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 text-xs font-semibold flex-shrink-0">
                        {c.guest.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <p className="text-xs font-medium text-[#1E2D3D] truncate">{c.guest}</p>
                          <p className="text-xs text-[#7A8899] flex-shrink-0">{c.time}</p>
                        </div>
                        <p className="text-xs text-[#7A8899] truncate mb-1">{c.unit}</p>
                        <p className="text-xs text-[#3D5166] truncate">{c.msg}</p>
                      </div>
                      <div className="flex-shrink-0">
                        {c.status === "escalated" ? (
                          <span className="text-xs bg-orange-50 text-orange-600 border border-orange-200 px-1.5 py-0.5 rounded-full">Human</span>
                        ) : (
                          <span className="text-xs bg-teal-50 text-teal-600 border border-teal-200 px-1.5 py-0.5 rounded-full">AI</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-teal-600 uppercase bg-teal-50 border border-teal-100 px-3 py-1.5 rounded-full mb-6">
              The control room
            </span>
            <h2 className="font-display text-4xl lg:text-5xl text-[#1E2D3D] tracking-tight mb-6">
              Guests use WhatsApp.
              <br />
              <span className="italic text-teal-600">You manage from Chatwoot.</span>
            </h2>
            <p className="text-lg text-[#3D5166] leading-relaxed mb-8">
              Every conversation across every unit flows through one place.
              Your team can monitor, respond, and take over — all without
              touching WhatsApp directly.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Full visibility across all units",
                  body: "One operator or VA can oversee conversations across multiple properties from a single, organised dashboard.",
                },
                {
                  title: "Instant human takeover",
                  body: "When a situation needs a real person, the handover is one click. The guest never notices the transition.",
                },
                {
                  title: "Clear AI vs human tracking",
                  body: "Every message is labelled. You always know what the AI handled and what needed a person.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="#2A7A6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1E2D3D] text-sm mb-1">{item.title}</p>
                    <p className="text-sm text-[#3D5166]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
