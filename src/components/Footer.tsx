import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";

const Footer = () => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Our Expertise", href: "#expertise" },
    { name: "Funding", href: "#funding" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
              INFOLED
            </div>
            <p className="text-primary-foreground/80 mb-6 text-lg leading-relaxed">
              An experienced and progressive Energy Solutions Company specialising in commercial and industrial scale projects. We deliver financial results through alternative energy solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/80">
                  Unit S1 Spearhead Business Park, Montague Gardens, Cape Town
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/80">
                  Call us for your energy solutions
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/80">
                  Get in touch for a consultation
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-accent">Our Services</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>Energy Conservation</li>
              <li>Solar PV Systems</li>
              <li>Battery Storage</li>
              <li>Smart Metering</li>
              <li>Financial Modeling</li>
              <li>Project Management</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Energy Journey?</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Contact us today for a comprehensive energy assessment and discover how we can help reduce your costs while securing your energy future.
            </p>
            <Button variant="secondary" size="xl">
              Get Your Free Consultation
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary-foreground/60">
            © 2024 INFOLED. All rights reserved.
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0 text-primary-foreground/60">
            <Calendar className="w-4 h-4" />
            <span>15+ Years of Excellence in Energy Solutions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;