import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingDown, Zap, Shield } from "lucide-react";

const ExpertiseSection = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Measuring Consumption",
      description: "Using smart metering and data analytics to develop an in-depth load profile to optimize tariff management.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: TrendingDown,
      title: "Reducing Consumption",
      description: "Through energy conservation methods (ECMs) such as LED lighting, automation and high consumption equipment optimization.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Zap,
      title: "Generating Power",
      description: "To ensure security of power supply via new green technologies, specifically solar photo voltaic.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Shield,
      title: "Backup Power",
      description: "To assist with Eskom downtime and load-shifting via various methods, from large-scale synchronized generator sets and hybrid solar inverters to small-scale UPS.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
            Our Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in [animation-delay:200ms]">
            We deliver financial results through alternative energy solutions, 
            providing comprehensive services to optimize your energy consumption and generation.
          </p>
          <div className="mt-8 animate-fade-in [animation-delay:400ms]">
            <Button variant="secondary" size="lg">
              Learn More About Our Services
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className="group hover:shadow-glow transition-all duration-500 animate-scale-in border-0 shadow-soft"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${service.bgColor} rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Results Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-primary rounded-3xl p-12 text-white animate-fade-in [animation-delay:800ms]">
            <h3 className="text-3xl font-bold mb-6">Proven Results</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">192</div>
                <div className="text-white/80">GWh produced</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">58</div>
                <div className="text-white/80">MWp installed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">74k+</div>
                <div className="text-white/80">Tonnes CO2 saved</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">2.3M+</div>
                <div className="text-white/80">Trees planted equivalent</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">100+</div>
                <div className="text-white/80">Trusted Partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;