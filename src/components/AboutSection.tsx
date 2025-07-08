import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, TrendingUp, Target, MapPin, Calendar } from "lucide-react";
import energyDevices from "@/assets/energy-devices.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Solar projects performing at up to 121% of projected performance"
    },
    {
      icon: Users,
      title: "Client Centric Approach",
      description: "Adapt to clients' operational cycles and energy efficiency goals"
    },
    {
      icon: TrendingUp,
      title: "Financial Solutions",
      description: "We deliver financial solutions to improve customer profitability"
    },
    {
      icon: Target,
      title: "Turn-key Solutions",
      description: "From engineering to project management and energy services"
    }
  ];

  const approach = [
    "Nature of the client's business",
    "Energy Requirements", 
    "Current Energy inputs and Costs",
    "Expected Business Growth",
    "Site Topography"
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Who We Are
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                <strong className="text-primary">INFOLED</strong> is an experienced and progressive Energy Solutions Company that specialises in commercial and industrial scale projects and is a recognised leader in the project development and energy consulting services industry.
              </p>
              <p>
                We specialize in <span className="text-secondary font-semibold">Energy Conservation</span>, <span className="text-accent font-semibold">Solar PV</span>, <span className="text-secondary font-semibold">Battery Storage</span> and <span className="text-accent font-semibold">Smart metering</span> and has an excess of 15 years' experience, with Solar projects performing at up to 121% of projected performance.
              </p>
              <p>
                We offer a world-class turn-key solution, from in-house engineering and financial modelling, Power Purchase Agreements (PPAs), project management, and holistic energy management services. <strong className="text-primary">INFOLED</strong> do not only sell solar and backup systems; We deliver financial solutions to improve our customers profitability by developing alternative energy solutions.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img
                src={energyDevices}
                alt="Energy monitoring devices and systems"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent rounded-full animate-glow"></div>
                    <span className="text-primary font-semibold">Smart Energy Monitoring Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="text-center hover:shadow-accent transition-all duration-300 animate-scale-in border-0 shadow-soft"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-3 mx-auto">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Our Approach */}
        <div className="bg-gradient-to-r from-muted/50 to-accent/10 rounded-3xl p-12 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Our Approach is Client Centric</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We carefully analyze multiple factors to ensure our energy solutions perfectly match your business needs and operational requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {approach.map((item, index) => (
              <div 
                key={item}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${(index + 5) * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {index + 1}
                </div>
                <h4 className="font-semibold text-primary mb-2">{item}</h4>
                <div className="text-sm text-muted-foreground">
                  {index === 0 && "Adapt to operational cycles, uphold customer duties, aim for energy efficiency"}
                  {index === 1 && "Hourly, daily and seasonal operational requirements"}
                  {index === 2 && "Responsibility towards internal and external customers"}
                  {index === 3 && "Short- and long term financial & energy goals"}
                  {index === 4 && "Site analysis and optimization potential"}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-soft max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-6">Give Us a Call</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-muted-foreground">
                  Unit S1 Spearhead Business Park, C/O Montague Drive & Freedom Way, Montague Gardens, Cape Town, 7441
                </span>
              </div>
              <Button variant="secondary" size="lg" className="mt-6">
                Contact Us Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;