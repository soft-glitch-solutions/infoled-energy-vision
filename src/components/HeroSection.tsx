import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Battery, Zap } from "lucide-react";
import heroImage from "@/assets/hero-solar-panels.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Solar Panel Installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-secondary/20 border border-secondary/30 rounded-full text-secondary-foreground mb-6 animate-fade-in">
            <TrendingUp className="w-4 h-4 mr-2" />
            Ensuring a profitable future with guaranteed energy availability
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-in-left">
            Energy Solutions
            <span className="block bg-gradient-secondary bg-clip-text text-transparent">
              That Deliver
            </span>
            <span className="block text-accent">
              Financial Results
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl animate-slide-in-left [animation-delay:200ms]">
            We offer world-class turn-key solutions, including in-house engineering 
            and financial modeling, project management, and holistic energy management services.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left [animation-delay:400ms]">
            <Button variant="hero" size="xl" className="group">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Learn More
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in [animation-delay:600ms]">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-secondary/20 rounded-lg mb-3 mx-auto">
                <Battery className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-2xl font-bold text-white">R490m+</div>
              <div className="text-white/70 text-sm">Client Savings</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-3 mx-auto">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-white">192 GWh</div>
              <div className="text-white/70 text-sm">Energy Produced</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-secondary/20 rounded-lg mb-3 mx-auto">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-2xl font-bold text-white">58 MWp</div>
              <div className="text-white/70 text-sm">Installed</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-3 mx-auto">
                <Battery className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-white">74k+</div>
              <div className="text-white/70 text-sm">Tonnes CO2 Saved</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 animate-float">
        <div className="w-20 h-20 bg-gradient-secondary rounded-full opacity-20"></div>
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float [animation-delay:1s]">
        <div className="w-12 h-12 bg-gradient-accent rounded-full opacity-30"></div>
      </div>
    </section>
  );
};

export default HeroSection;