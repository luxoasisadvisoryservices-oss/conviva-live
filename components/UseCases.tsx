"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const scenarios = [
  {
    tag: "Access",
    time: "11:47 PM",
    guest: "Hi, we just arrived but we can't get into the building. There's a keypad but we don't know the code?",
    reply: "Welcome! Enter 4821# at the lobby keypad. Take the lift to floor 12, then apartment 1204 — door code 7736. Here is your parking location: 📍 https://maps.app.goo.gl/example — Bay B2-47. Let me know if anything else!",
    outcome: "Resolved by AI",
    color: "teal",
  },
  {
    tag: "Voice message",
    time: "9:12 AM",
    guest: "🎤 Voice message — guest asking how to operate the washing machine",
    reply: "No problem! Here is a quick guide for the washing machine: 👉 https://youtube.com/example — Press Power, select your cycle with the left dial, then Start/Pause. Daily 40° works for most loads. Let me know if you need anything else!",
    outcome: "Resolved by AI",
    color: "teal",
  },
  {
    tag: "Maintenance",
    time: "2:13 PM",
    guest: "The AC has been making a loud noise since this morning and it's getting really hot.",
    reply: "I am sorry to hear that — I am flagging this to the team right now so someone can look into it urgently.",
    outcome: "Escalated to team",
    color: "orange",
  },
  {
    tag: "Directions",
    time: "6:45 PM",
    guest: "How do we get to the nearest supermarket? And is there parking there?",
    reply: "The closest is Carrefour Market — 5 minutes walk. Here is the exact location: 📍 https://maps.app.goo.gl/example. There is parking directly underneath the building. Spinneys is also nearby if you prefer.",
    outcome: "Resolved by AI",
    color: "teal",
  },
  {
    tag: "Local situation",
    time: "8:30 AM",
    guest: "We wanted to go to the beach today — is everything normal around JBR?",
    reply: "Yes, JBR Beach is open and operating normally today. The Walk is also open. Weather looks good — around 32°C. Enjoy your day!",
    outcome: "Resolved by AI",
    color: "teal",
  },
  {
    tag: "Check-in",
    time: "12:45 PM",
    guest: "We are heading to the apartment now. Is early check-in possible? We arrive at 1pm.",
    reply: "I will check with the team on availability for early check-in at 1pm and get back to you shortly with confirmation.",
    outcome: "Escalated to team",
    color: "orange",
  },
  {
    tag: "How-to",
    time: "7:20 PM",
    guest: "The TV is showing a black screen — we cannot figure out how to switch the input.",
    reply: "Here is a short video guide for the TV setup in your apartment: 👉 https://youtube.com/example — Press the Input button on the remote and select HDMI 1. Should fix it straight away!",
    outcome: "Resolved by AI",
    color: "teal",
  },
  {
    tag: "Late night",
    time: "1:22 AM",
    guest: "Sorry to message so late — forgot to ask, what is the WiFi password?",
    reply: "No problem at all! WiFi network: LuxOasis_M3 · Password: Guest2024#. Enjoy your evening!",
    outcome: "Resolved by AI",
    color: "teal",
  },
  {
    tag: "Complaint",
    time: "3:45 PM",
    guest: "We just checked in and the apartment is not clean. There is dust everywhere and the bathroom looks like it was not touched. This is really disappointing.",
    reply: "reply: "I am so sorry — this is absolutely not the standard we hold ourselves to and I completely understand your frustration.I am getting our cleaning team on this right now and someone will be with you in the next few minutes to sort it out.",.",
    outcome: "Escalated to team",
    color: "orange",
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
            What Conviva.live handles
            <br />
            <span className="italic">every single day.</span>
          </h2>
          <p className="text-lg text-[#3D5166] max-w-2xl">
            Voice messages, how-to video links, Google Maps directions, live local awareness — and the judgement to know when a real person should step in.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {scenarios.map((s, i) => (
            <motion.div
              key={s.tag + i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-white rounded-2xl border border-[#E5E5E0] p-5 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  s.color === "teal"
                    ? "bg-teal-50 text-teal-700 border border-teal-100"
                    : "bg-orange-50 text-orange-700 border border-orange-100"
                }`}>
                  {s.tag}
                </span>
                <span className="text-xs text-[#7A8899]">{s.time}</span>
              </div>

              <div className="bg-[#F4F4F1] rounded-xl rounded-tl-sm p-3 mb-3">
                <p className="text-xs text-[#3D5166] leading-relaxed">
                  <span className="font-medium text-[#7A8899]">Guest: </span>
                  {s.guest}
                </p>
              </div>

              <div className={`rounded-xl rounded-bl-sm p-3 mb-4 flex-1 ${
                s.color === "teal" ? "bg-teal-50" : "bg-orange-50"
              }`}>
                <p className="text-xs leading-relaxed text-[#1E2D3D]">
                  <span className="font-medium text-[#7A8899]">Conviva.live: </span>
                  {s.reply}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${
                  s.color === "teal" ? "bg-teal-500" : "bg-orange-500"
                }`} />
                <span className="text-xs text-[#7A8899]">{s.outcome}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
