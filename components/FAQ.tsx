"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    q: "Do guests need to install anything?",
    a: "No. Guests message through WhatsApp exactly as they normally would. There's nothing to download, no account to create, no change in behaviour. From their side, it feels like messaging a person.",
  },
  {
    q: "Does Conviva replace my VA or team?",
    a: "No — and that's intentional. Conviva handles the repetitive, structured communication so your VA can focus on what needs real human attention. One person can comfortably oversee more units, with less pressure.",
  },
  {
    q: "Can my team take over a conversation manually?",
    a: "Yes, at any time and in one click. All conversations are visible in Chatwoot. If a situation needs a real person, the handover is immediate. The guest transition is seamless.",
  },
  {
    q: "Does it work with WhatsApp?",
    a: "Yes. Conviva connects directly to WhatsApp Business. Guests keep using WhatsApp as normal — no friction, no redirection, no new platform.",
  },
  {
    q: "Why is Chatwoot part of the workflow?",
    a: "Chatwoot is the operator control room. It's where your team monitors all conversations, manages handovers, and keeps full visibility across units. It keeps your operations organised without requiring you to be inside WhatsApp constantly.",
  },
  {
    q: "Does Conviva know each unit separately?",
    a: "Yes — this is core to how it works. Each property has its own structured knowledge layer, built during onboarding. The AI for Apartment A only uses data from Apartment A. There's no cross-contamination, no generic fallback.",
  },
  {
    q: "Will the replies feel robotic?",
    a: "They shouldn't. Conviva is tuned to respond in a natural, hospitality-appropriate tone. Replies are precise and helpful — not scripted, not cold. Guests typically can't tell the difference.",
  },
  {
    q: "What happens if a guest has a complaint or a real issue?",
    a: "Conviva recognises when a situation requires human attention — complaints, maintenance, frustration, refund requests. In those cases, it flags the conversation and your team takes over. Escalation is built in by design, not as a workaround.",
  },
  {
    q: "Can one VA manage more units with Conviva?",
    a: "Yes. When routine queries are handled automatically, the workload per unit drops significantly. One person can oversee more conversations from Chatwoot without being overwhelmed.",
  },
  {
    q: "Is Conviva just a generic chatbot?",
    a: "No. Generic chatbots work from broad, generic logic. Conviva works from the specific operational data of each unit — access steps, known issues, appliance guides, apartment-specific rules. The difference shows in every reply.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#E5E5E0] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-5 flex items-start justify-between gap-4 text-left group"
      >
        <span className="text-[#1E2D3D] font-medium text-sm leading-snug group-hover:text-teal-700 transition-colors">
          {q}
        </span>
        <div
          className={`w-6 h-6 rounded-full border border-[#E5E5E0] flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 ${
            open ? "bg-teal-600 border-teal-600 rotate-45" : "bg-white"
          }`}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M5 2v6M2 5h6"
              stroke={open ? "white" : "#3D5166"}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-[#3D5166] leading-relaxed pb-5 max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-teal-600 uppercase bg-teal-50 border border-teal-100 px-3 py-1.5 rounded-full mb-5">
            FAQ
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-[#1E2D3D] tracking-tight mb-5">
            Common questions,
            <br />
            <span className="italic">answered honestly.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl border border-[#E5E5E0] px-8 py-2"
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
