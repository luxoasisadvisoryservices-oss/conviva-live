"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    q: "Do guests need to install anything?",
    a: "No. Guests message through WhatsApp exactly as they normally would. There is nothing to download, no account to create, no change in behaviour. From their side, it feels like messaging a real person.",
  },
  {
    q: "Does Conviva.live actually know my unit — or is it just generic AI?",
    a: "It knows your unit specifically. Every property is onboarded with its own structured knowledge layer — access codes, building quirks, parking, appliance guides, recurring issues, special instructions. The AI only uses data from that exact unit. It cannot confuse Apartment 204 with Apartment 312. That precision is the core of the product.",
  },
  {
    q: "Does Conviva.live remember the full conversation with a guest?",
    a: "Yes — from the first message before check-in to the last message at checkout. Conviva.live maintains full conversation memory throughout the guest's stay. If a guest reported an AC issue on day 1 and messages again on day 3, Conviva.live already knows the history. It never asks a guest to repeat themselves. That continuity is what makes it feel human.",
  },
  {
    q: "What happens when my team takes over a conversation?",
    a: "The full conversation history and context is immediately visible in Chatwoot. Your team steps in knowing exactly what was said, what was resolved, and what still needs attention. When the AI resumes after a human handover, it remembers everything. No broken thread. No lost context. No asking the guest to start again.",
  },
  {
    q: "Does Conviva.live work in multiple languages?",
    a: "Yes. Conviva.live responds in the guest's language automatically — Arabic, Russian, Chinese, French, English and more. In Dubai, your guests come from everywhere. Conviva.live handles that without your team needing to.",
  },
  {
    q: "What happens to unit knowledge when my VA leaves?",
    a: "Nothing. The knowledge stays. Every unit's access flow, quirks, recurring issues and operational details are stored in Conviva.live permanently. When a new VA joins, they are fully supported from day one — no retraining, no knowledge gap, no handover chaos.",
  },
  {
    q: "Does Conviva.live replace my VA or team?",
    a: "No — and that is intentional. Conviva.live handles the repetitive and structured communication so your VA can focus on what actually needs a human. One person can comfortably oversee significantly more units, with less pressure and fewer missed messages.",
  },
  {
    q: "Can my team take over a conversation manually?",
    a: "Yes, at any time and in one click. All conversations are visible in Chatwoot. If a situation needs a real person, the handover is immediate and seamless. The guest never notices the transition.",
  },
  {
    q: "Does it work with WhatsApp?",
    a: "Yes. Conviva.live connects directly to WhatsApp Business. Guests keep using WhatsApp as normal — no friction, no redirection, no new platform for anyone.",
  },
  {
    q: "Why is Chatwoot part of the workflow?",
    a: "Chatwoot is the operator control room. It is where your team monitors all conversations, manages handovers, and keeps full visibility across every unit. It keeps your operations organised without requiring you to be inside WhatsApp constantly.",
  },
  {
    q: "Will the replies feel robotic?",
    a: "They should not. Conviva.live is tuned to respond in a natural, warm, hospitality-appropriate tone. Because it knows the guest's name, their unit, and their conversation history — replies feel personal and contextual, not scripted. Guests typically cannot tell the difference.",
  },
  {
    q: "What happens if a guest has a complaint or a real issue?",
    a: "Conviva.live recognises when a situation requires genuine human care — complaints, maintenance issues, frustration, refund requests. It flags the conversation immediately and your team steps in with full context already loaded. Escalation is built in by design.",
  },
  {
    q: "Can one VA manage more units with Conviva.live?",
    a: "Yes. When routine queries are handled automatically and context is always retained, the workload per unit drops significantly. One person can oversee far more conversations from Chatwoot without being overwhelmed or making mistakes.",
  },
  {
    q: "Is Conviva.live just a generic chatbot?",
    a: "No. A generic chatbot has no memory, no unit knowledge, and no operational context. Conviva.live knows the specific details of each property, remembers every guest conversation from start to finish, and maintains that context even after a human steps in. The difference is visible in every single reply.",
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
        <div className={`w-6 h-6 rounded-full border border-[#E5E5E0] flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 ${
          open ? "bg-teal-600 border-teal-600 rotate-45" : "bg-white"
        }`}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 2v6M2 5h6" stroke={open ? "white" : "#3D5166"} strokeWidth="1.5" strokeLinecap="round"/>
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
            <p className="text-sm text-[#3D5166] leading-relaxed pb-5 max-w-2xl">{a}</p>
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
