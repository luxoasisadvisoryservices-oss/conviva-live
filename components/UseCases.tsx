"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const scenarios = [
  {
    tag: "Access",
    time: "11:47 PM",
    guest: "Hi, we can't get into the building. There's a keypad but we don't know the code?",
    reply: "Welcome! Enter 4821# at the lobby keypad. Take lift to floor 12, then apartment 1204 — door code 7736. Parking is B2 bay 47. Let me know if anything else!",
    outcome: "Resolved by AI",
    color: "teal",
  },
  {
    tag: "Maintenance",
    time: "2:13 PM",
    guest: "The AC has been making a loud noise since this morning and it's getting hot in here.",
    reply: "I'm sorry to hear that — I'm flagging this to the team right now so someone can look into it urgently.",
    outcome: "Escalated to team",
    color: "orange",
  },
  {
    tag: "Check-in",
    time: "3:30 PM",
    guest: "We're heading to the apartment now. Is early check-in possible? We arrive at 1pm.",
    reply: "I'll check with the team on availability for early check-in at 1pm — I'll get back to you shortly with confirmation.",
    outcome: "Escalated to team",
    color: "orange",
  },
  {
    tag: "Appliance",
    time: "9:05 AM",
    guest: "How do you turn on the washing machine? The buttons are confusing.",
    reply: "For the washing machine: press Power first, then select your cycle using the dial on the left (Daily 40° works for most loads). Press Start/Pause to begin. Let me know if you need anything else!",
    outcome: "Resolved by AI",
    color: "teal",
  },
  {
    tag: "Directions",
    time: "6:45 PM",
    guest: "How do we get to the nearest supermarket from the apartment?",
    reply: "The closest option is Carrefour Market — a 5-minute walk. Exit the building, turn right on JBR Walk, and it's on the left past the fountain. Spinneys is also nearby, about 10 minutes on foot.",
    outcome: "Resolved by AI",
    color: "teal",
  },
  {
    tag: "Late night",
    time: "1:22 AM",
    guest: "Sorry to message so late — forgot to ask, what's the WiFi password?",
    reply: "No problem at all! WiFi network: LuxOasis_M3 · Password: Guest2024#. Enjoy your evening!",
    outcome: "Resolved by AI",
    color: "teal",
  },
];

export default function UseCases() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="use-cases" className="py-24 px-6 bg-[#F4F4F1]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-teal-600 uppercase bg-teal-50 border border-teal-100 px-3 py-1.5 rounded-full mb-5">
            Real scenarios
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-[#1E2D3D] tracking-tight mb-5 max-w-2xl">
            What Conviva handles
            <br />
            <span className="italic">every single day.</span>
          </h2>
          <p className="text-lg text-[#3D5166] max-w-xl">
            These are real guest moments — the ones that happen across your
            portfolio, at all hours, every day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {scenarios.map((s, i) => (
            <motion.div
              key={s.tag + i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-[#E5E5E0] p-5 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    s.color === "teal"
                      ? "bg-teal-50 text-teal-700 border border-teal-100"
                      : "bg-orange-50 text-orange-700 border border-orange-100"
                  }`}
                >
                  {s.tag}
                </span>
                <span className="text-xs text-[#7A8899]">{s.time}</span>
              </div>

              {/* Guest message */}
              <div className="bg-[#F4F4F1] rounded-xl rounded-tl-sm p-3 mb-3">
                <p className="text-xs text-[#3D5166] leading-relaxed">
                  <span className="font-medium text-[#7A8899]">Guest: </span>
                  {s.guest}
                </p>
              </div>

              {/* AI reply */}
              <div
                className={`rounded-xl rounded-bl-sm p-3 mb-4 flex-1 ${
                  s.color === "teal" ? "bg-teal-50" : "bg-orange-50"
                }`}
              >
                <p className="text-xs leading-relaxed text-[#1E2D3D]">
                  <span className="font-medium text-[#7A8899]">Conviva: </span>
                  {s.reply}
                </p>
              </div>

              {/* Outcome */}
              <div className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    s.color === "teal" ? "bg-teal-500" : "bg-orange-500"
                  }`}
                />
                <span className="text-xs text-[#7A8899]">{s.outcome}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
