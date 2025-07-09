
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectsHero from "@/components/ProjectsHero";
import ProductCarousel from "@/components/ProductCarousel";
import ProjectsGallery from "@/components/ProjectsGallery";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ProjectsHero />
      <ProductCarousel />
      <ProjectsGallery />
      <Footer />
    </div>
  );
};

export default Projects;
