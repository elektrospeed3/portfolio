import AboutSection from "./_components/AboutSection";
import ContactSection from "./_components/ContactSection";
import HeroSection from "./_components/HeroSection";
import PortfolioSection from "./_components/PortfolioSection";
import ServicesSection from "./_components/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
