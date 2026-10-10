import HeroSlider from "@/components/sections/HeroSlider";
import StatsBar from "@/components/sections/StatsBar";
import StrategicFocus from "@/components/sections/StrategicFocus";
import PressReleasesNews from "@/components/sections/PressReleasesNews";
import OurBusinesses from "@/components/sections/OurBusinesses";
import InvestorReports from "@/components/sections/InvestorReports";
import SustainabilitySection from "@/components/sections/SustainabilitySection";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. Hero Slider (5 Slides) */}
      <HeroSlider />

      {/* 2. Floating Stats Box */}
      <StatsBar />

      {/* 3. Strategic Focus Fancy Boxes (6 Grid Items) */}
      <StrategicFocus />

      {/* 4. Press Releases & News Carousel */}
      <PressReleasesNews />

      {/* 5. Our Businesses Conglomerate Carousel */}
      <OurBusinesses />

      {/* 6. Reports & Presentations + Investor Relations */}
      <InvestorReports />

      {/* 7. Sustainability & Growth Metrics */}
      <SustainabilitySection />
    </main>
  );
}
