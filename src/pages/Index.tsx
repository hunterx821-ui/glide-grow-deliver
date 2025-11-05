import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { Community } from "@/components/Community";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Community />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
