import HomeHero from "@/components/home/HomeHero";
import StatsStrip from "@/components/home/StatsStrip";
import ServiceShowcase from "@/components/home/ServiceShowcase";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProjectGallery from "@/components/home/ProjectGallery";
import ParallaxBreak from "@/components/home/ParallaxBreak";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import ServiceAreaMap from "@/components/home/ServiceAreaMap";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <HomeHero />
      <StatsStrip />
      <ServiceShowcase />
      <WhyChooseUs />
      <ProjectGallery />
      <ParallaxBreak />
      <ProcessTimeline />
      <ServiceAreaMap />
      <CtaBanner />
    </>
  );
}
