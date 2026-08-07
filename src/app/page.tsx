import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Features from "@/components/Features";
import About from "@/components/About";
import Stats from "@/components/Stats";
import DesignSection from "@/components/DesignSection";
import Testimonial from "@/components/Testimonial";
import Marketing from "@/components/Marketing";
import PreFooter from "@/components/PreFooter";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <About />
      <Stats />
      <DesignSection />
      <Testimonial />
      <Marketing />
      <PreFooter />
    </>
  );
}
