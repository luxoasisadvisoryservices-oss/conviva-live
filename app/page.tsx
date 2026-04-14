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
    </main>
  );
}
