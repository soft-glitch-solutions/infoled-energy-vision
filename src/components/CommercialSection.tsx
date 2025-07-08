import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Factory, Zap, TrendingUp, ArrowRight } from "lucide-react";
import commercialSolarImage from "@/assets/commercial-solar.jpg";
import energyManagementImage from "@/assets/energy-management.jpg";

const CommercialSection = () => {
  const projects = [
    "Air Options Blackheath, Cape Town",
    "Berg River Business Park",
    "BMRI Stellenbosch",
    "Buscor",
    "Canary Walk Mall",
    "Coricraft Retail and Factory",
    "CTP Bayette",
    "CTP Boxes For Africa",
    "CTP Cartons and Labels",
    "CTP Flexibles",
    "CTP Parow, Parow",
    "De Wetshof Wines, Robertson",
    "Densa Saw Mill",
    "Noble Property Fund",
    "Novasun",
    "Old Mutual Group",
    "Onderberg, Malelane",
    "Pick n Pay Ermelo",
    "Pick n Pay White River",
    "South African Airlines",
    "Stellenbosch Student Accommodation",
    "Steve's Auto Clinic",
    "The Foschini Group",
    "Wellington Wines, Wellington",
    "White River Sawmill, White River"
  ];

  const benefits = [
    {
      icon: Building2,
      title: "Enhanced Efficiency",
      description: "Optimize operational efficiency and reduce overhead costs"
    },
    {
      icon: Factory,
      title: "Custom Solutions",
      description: "Tailored solar PV installations for your business needs"
    },
    {
      icon: Zap,
      title: "Smart Management",
      description: "Advanced energy management systems and LED lighting retrofits"
    },
    {
      icon: TrendingUp,
      title: "Comprehensive Assessment",
      description: "Detailed energy assessments to maximize your ROI"
    }
  ];

  return (
    <section id="commercial" className="py-20 bg-gradient-to-br from-muted/30 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary-foreground mb-6 animate-fade-in">
            <Building2 className="w-4 h-4 mr-2" />
            Commercial & Industrial Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-slide-in-left">
            Commercial and Industrial
            <span className="block bg-gradient-secondary bg-clip-text text-transparent">
              Energy Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in [animation-delay:200ms]">
            Our commercial and industrial energy solutions are designed to enhance operational 
            efficiency and reduce overhead costs for businesses. We provide comprehensive energy 
            assessments, leading to the implementation of customized solar PV installations, 
            LED lighting retrofits, and smart energy management systems.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              className="group hover:shadow-glow transition-all duration-300 animate-scale-in border-0 bg-background/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-secondary rounded-lg mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Images and Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left [animation-delay:400ms]">
            <div className="relative overflow-hidden rounded-2xl shadow-soft group">
              <img
                src={commercialSolarImage}
                alt="Commercial Solar Installation"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          <div className="animate-slide-in-right [animation-delay:600ms]">
            <div className="relative overflow-hidden rounded-2xl shadow-soft group">
              <img
                src={energyManagementImage}
                alt="Energy Management Systems"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-background/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-soft animate-fade-in [animation-delay:800ms]">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Our Trusted Partners</h3>
            <p className="text-muted-foreground text-lg">
              Delivering energy solutions across South Africa
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
            {projects.map((project, index) => (
              <div 
                key={project}
                className="group p-4 bg-card/80 backdrop-blur-sm rounded-lg border border-border/50 hover:border-secondary/30 hover:shadow-soft transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${(index * 50) + 1000}ms` }}
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:bg-secondary transition-colors duration-300"></div>
                  <span className="text-sm font-medium text-foreground group-hover:text-secondary transition-colors duration-300">
                    {project}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="secondary" size="lg" className="group">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialSection;