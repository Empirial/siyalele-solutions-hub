import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HardHat, Wrench, FileText, ArrowRight } from "lucide-react";

const Services = () => {
  const whatsappLink = "https://wa.me/27732178184?text=Hello+Siyalele+Projects,+I+am+interested+in+";

  const services = [
    {
      icon: HardHat,
      title: "Mining & Construction Supply",
      description: "Complete range of mining equipment, construction tools, machinery, and Personal Protective Equipment (PPE) for safe and efficient operations.",
      features: ["Mining Equipment", "Construction Tools", "PPE & Safety Gear", "Machinery Supply"],
      whatsappText: "Mining+and+Construction+Supply+services"
    },
    {
      icon: Wrench,
      title: "Engineering Maintenance",
      description: "Professional machinery supply, servicing, and maintenance solutions to keep your operations running smoothly and efficiently.",
      features: ["Machinery Supply", "Equipment Servicing", "Preventive Maintenance", "Technical Support"],
      whatsappText: "Engineering+Maintenance+services"
    },
    {
      icon: FileText,
      title: "Consulting Services",
      description: "Expert consulting in Social Labour Plan (SLP) compliance, Human Resources solutions, and Environmental services for sustainable business growth.",
      features: ["SLP Compliance", "HR Solutions", "Environmental Services", "Business Consulting"],
      whatsappText: "Consulting+Services"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-industrial mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions for mining, engineering, and business consulting needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elevated transition-all duration-smooth border-0 bg-white animate-scale-in hover:-translate-y-2 transform"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-smooth shadow-card group-hover:shadow-glow">
                    <Icon className="h-9 w-9 text-white" />
                  </div>
                  <CardTitle className="font-heading text-xl font-bold text-industrial group-hover:text-primary transition-colors duration-smooth">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-6 leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm group/item">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-fast"></div>
                        <span className="group-hover/item:text-primary transition-colors duration-fast">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-glow hover:scale-105 transition-all duration-smooth text-white font-semibold group/btn"
                  >
                    <a 
                      href={`${whatsappLink}${service.whatsappText}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Request via WhatsApp
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-fast" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;