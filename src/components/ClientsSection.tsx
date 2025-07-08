import { Card, CardContent } from "@/components/ui/card";

const ClientsSection = () => {
  const clients = [
    "Old Mutual",
    "CTP", 
    "Clicks Group",
    "Steve's Auto Clinic",
    "Coricraft"
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4 animate-fade-in">
            Our Valued Clients
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in [animation-delay:200ms]">
            Trusted by leading companies across South Africa
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <Card 
              key={client}
              className="group hover:shadow-soft transition-all duration-300 animate-scale-in border-0 bg-background"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="text-lg font-semibold text-primary group-hover:text-secondary transition-colors duration-300">
                  {client}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicator */}
        <div className="mt-16 text-center animate-fade-in [animation-delay:600ms]">
          <div className="inline-flex items-center px-6 py-3 bg-accent/10 border border-accent/20 rounded-full">
            <div className="w-3 h-3 bg-accent rounded-full mr-3 animate-glow"></div>
            <span className="text-accent font-semibold">100+ Trusted Partners</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;