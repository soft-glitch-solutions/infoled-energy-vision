
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Zap } from "lucide-react";

const ProjectsHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/5 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary-foreground mb-6 animate-fade-in">
            <Building2 className="w-4 h-4 mr-2" />
            Our Projects & Products
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-slide-in-left">
            Powering South Africa's
            <span className="block bg-gradient-secondary bg-clip-text text-transparent">
              Energy Future
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in [animation-delay:200ms]">
            Discover our cutting-edge solar solutions and see how we've transformed 
            energy systems across commercial and industrial facilities nationwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-left [animation-delay:400ms]">
            <Button variant="secondary" size="lg" className="group">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Zap className="w-4 h-4 mr-2" />
              Our Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
