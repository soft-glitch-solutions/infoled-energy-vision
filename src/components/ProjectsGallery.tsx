
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Zap, Calendar } from "lucide-react";

const ProjectsGallery = () => {
  const projects = [
    {
      id: 1,
      name: "Old Mutual Group",
      location: "Cape Town, South Africa",
      capacity: "2.5 MW",
      year: "2023",
      type: "Commercial Solar",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
      savings: "R2.1M annually"
    },
    {
      id: 2,
      name: "CTP Flexibles",
      location: "Johannesburg, South Africa",
      capacity: "1.8 MW",
      year: "2023",
      type: "Industrial Solar",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      savings: "R1.5M annually"
    },
    {
      id: 3,
      name: "Pick n Pay Ermelo",
      location: "Ermelo, South Africa",
      capacity: "850 kW",
      year: "2022",
      type: "Retail Solar",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      savings: "R680K annually"
    },
    {
      id: 4,
      name: "Coricraft Factory",
      location: "Western Cape, South Africa",
      capacity: "1.2 MW",
      year: "2022",
      type: "Manufacturing",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      savings: "R950K annually"
    },
    {
      id: 5,
      name: "Steve's Auto Clinic",
      location: "Multiple Locations",
      capacity: "650 kW",
      year: "2023",
      type: "Automotive",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      savings: "R520K annually"
    },
    {
      id: 6,
      name: "De Wetshof Wines",
      location: "Robertson, South Africa",
      capacity: "500 kW", 
      year: "2021",
      type: "Agricultural",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      savings: "R420K annually"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in">
            Featured
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Project Gallery
            </span>
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in [animation-delay:200ms]">
            Successful solar installations across South Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in [animation-delay:400ms]">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group hover:shadow-glow transition-all duration-300 border-0 bg-background/80 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 100 + 600}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-secondary/90 text-white">
                      {project.type}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center text-sm">
                      <Zap className="w-4 h-4 mr-1" />
                      {project.capacity}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                    {project.name}
                  </h3>
                  
                  <div className="flex items-center text-muted-foreground text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>
                  
                  <div className="flex items-center text-muted-foreground text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    Completed {project.year}
                  </div>
                  
                  <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-lg p-3">
                    <div className="text-sm text-muted-foreground">Annual Savings</div>
                    <div className="text-lg font-semibold text-accent">{project.savings}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-primary mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6">
              Join over 100+ satisfied clients who have transformed their energy costs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-secondary rounded-lg text-white font-medium hover:shadow-glow transition-all duration-300 cursor-pointer">
                Get Free Assessment
              </div>
              <div className="inline-flex items-center px-6 py-3 border border-border rounded-lg text-foreground font-medium hover:bg-muted/50 transition-all duration-300 cursor-pointer">
                View All Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
