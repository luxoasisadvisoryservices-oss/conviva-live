"use client"; 

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Intelligence from "@/components/Intelligence";
import Chatwoot from "@/components/Chatwoot";
import HumanAI from "@/components/HumanAI";
import UseCases from "@/components/UseCases";
import Benefits from "@/components/Benefits";
import Comparison from "@/components/Comparison";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Intelligence />
      <Chatwoot />
      <HumanAI />
      <UseCases />
      <Benefits />
      <Comparison />
      <FAQ />
      <CTA />
      <Footer />

      {/* WhatsApp floating button */}
      
        href="https://wa.me/971585089283"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20c05a] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
        aria-label="Chat on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            d="M14 2C7.373 2 2 7.373 2 14c0 2.132.558 4.13 1.532 5.863L2 26l6.293-1.506A11.94 11.94 0 0014 26c6.627 0 12-5.373 12-12S20.627 2 14 2z"
            fill="white"
          />
          <path
            d="M10.5 8.5c-.3-.7-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1 0 1.8 1.3 3.6 1.5 3.8.2.3 2.6 4 6.4 5.5 3.2 1.2 3.8 1 4.4.9.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.5.2-1.7-.1-.2-.4-.3-.7-.4-.3-.2-2.1-1-2.4-1.1-.3-.1-.5-.2-.8.2-.3.4-1 1.1-1.2 1.4-.2.2-.5.2-.8.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.6-.7c.2-.2.2-.4.3-.6.1-.2 0-.5-.1-.7L10.5 8.5z"
            fill="#25D366"
          />
        </svg>
      </a>
    </main>
  );
}
