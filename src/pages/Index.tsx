
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProductCarousel from "@/components/ProductCarousel";
import CommercialSection from "@/components/CommercialSection";
import AboutSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ExpertiseSection />
      <ProductCarousel />
      <CommercialSection />
      <AboutSection />
      <ClientsSection />
      <Footer />
    </div>
  );
};

export default Index;
