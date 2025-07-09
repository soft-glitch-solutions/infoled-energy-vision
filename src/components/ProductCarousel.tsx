
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Battery, Zap, Sun, Settings } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const ProductCarousel = () => {
  const products = [
    {
      id: 1,
      title: "High-Efficiency Solar Panels",
      description: "Monocrystalline panels with up to 22% efficiency rating",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
      icon: Sun,
      specs: ["450W - 600W", "25-year warranty", "IP67 rated"]
    },
    {
      id: 2,
      title: "Lithium Battery Storage",
      description: "Advanced lithium-ion battery systems for energy storage",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&q=80",
      icon: Battery,
      specs: ["5kWh - 100kWh", "6000+ cycles", "Remote monitoring"]
    },
    {
      id: 3, 
      title: "Smart Inverters",
      description: "Grid-tie and hybrid inverters with smart monitoring",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
      icon: Zap,
      specs: ["5kW - 100kW", "98% efficiency", "WiFi enabled"]
    },
    {
      id: 4,
      title: "Energy Management Systems",
      description: "Complete monitoring and control solutions",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      icon: Settings,
      specs: ["Real-time data", "Mobile app", "Cloud analytics"]
    },
    {
      id: 5,
      title: "Commercial Solar Arrays",
      description: "Large-scale rooftop and ground-mount installations",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      icon: Sun,
      specs: ["1MW+", "Custom design", "Turnkey solution"]
    },
    {
      id: 6,
      title: "LED Lighting Solutions",
      description: "Energy-efficient LED retrofits for commercial spaces",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80",
      icon: Zap,
      specs: ["50,000+ hours", "80% savings", "Smart controls"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in">
            Our Premium
            <span className="block bg-gradient-secondary bg-clip-text text-transparent">
              Solar Products
            </span>
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in [animation-delay:200ms]">
            Industry-leading technology for maximum energy efficiency
          </p>
        </div>

        <div className="relative animate-fade-in [animation-delay:400ms]">
          <Carousel
            plugins={[Autoplay({ delay: 4000 })]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {products.map((product) => (
                <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-glow transition-all duration-300 border-0 bg-background/80 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                          <product.icon className="w-5 h-5" />
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                          {product.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {product.description}
                        </p>
                        
                        <div className="space-y-1">
                          {product.specs.map((spec, index) => (
                            <div key={index} className="flex items-center text-xs text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                              {spec}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-secondary hover:text-secondary-foreground" />
            <CarouselNext className="hidden md:flex -right-12 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-secondary hover:text-secondary-foreground" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Need a custom solution?</p>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-secondary rounded-lg text-white font-medium hover:shadow-glow transition-all duration-300 cursor-pointer">
            Contact Our Experts
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
