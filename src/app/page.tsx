import { CTASection } from "@/components/sections/cta-section";
import { EarlyAccessSection } from "@/components/sections/early-access-section";
import { FeatureSection } from "@/components/sections/feature-section";
import { HeroSection } from "@/components/sections/hero-section";
import { WhatsNextSection } from "@/components/sections/what-next-section";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <WhatsNextSection />
      <EarlyAccessSection />
      <CTASection />
      <Toaster />
    </main>
  );
}
