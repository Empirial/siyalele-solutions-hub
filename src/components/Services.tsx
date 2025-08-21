import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HardHat, Wrench, FileText, ArrowRight, Headphones, Video, Shield, Truck, Leaf } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: HardHat,
      title: "Mining & Construction Supply",
      description: "Complete range of mining equipment, construction tools, machinery, and Personal Protective Equipment (PPE) for safe and efficient operations.",
      features: ["Mining Equipment", "Construction Tools", "PPE & Safety Gear", "Machinery Supply"],
    },
    {
      icon: Wrench,
      title: "General Engineering & Maintenance",
      description: "Comprehensive maintenance services including boiler making, electrical work, mechanical services, and fabrication by qualified personnel.",
      features: ["Boiler Making & Fabrication", "Electrical Work & Supply", "Mechanical Parts & Supply", "Qualified Personnel"],
    },
    {
      icon: FileText,
      title: "HR Consultation & Social Labour Plan Services",
      description: "Expert HR consulting, Social Labour Plan (SLP) drafting, disciplinary facilitation, training, and comprehensive auditing services.",
      features: ["Social Labour Plan (SLP) Drafting & Consultation", "HR Policies & Review", "Disciplinary Facilitation", "HR Training & Auditing"],
    },
    {
      icon: Headphones,
      title: "Contact Centre & Conferencing Equipment",
      description: "Professional headsets, audio accessories, and conferencing equipment from leading brands like Poly, Yealink, and Jabra.",
      features: ["Wired & Wireless Headsets", "Noise-Cancelling Headphones", "USB & Bluetooth Headsets", "Audio Accessories"],
    },
    {
      icon: Video,
      title: "Video Conferencing Solutions",
      description: "Complete video conferencing systems including cameras, speakers, and portable solutions for modern business communication.",
      features: ["Conference Room Cameras", "4K Video Systems", "Conference Speakers", "Wireless Audio Solutions"],
    },
    {
      icon: Shield,
      title: "Fencing Solutions",
      description: "Comprehensive fencing services including barbed wire, chain link, and electric fencing for security and property protection.",
      features: ["Barbed Wire Fencing", "Chain Link Fencing", "Electric Fencing", "Security Solutions"],
    },
    {
      icon: Truck,
      title: "Supply & Delivery",
      description: "Complete supply and delivery services for construction materials, machinery, office supplies, and specialized equipment hire.",
      features: ["Construction Materials", "Engineering Components", "Office Supplies & Stationery", "Machine Hire Services"],
    },
    {
      icon: Leaf,
      title: "Environmental Management",
      description: "Comprehensive environmental management services including waste management, pollution control, and specialized cleaning solutions.",
      features: ["Waste & Pollution Control", "Vacuum Truck & Dredging", "Dam De-sludging", "Tree Felling & Alien Species Removal"],
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-glow hover:scale-105 transition-all duration-smooth text-white font-semibold group/btn"
                  >
                    <a href="#contact-form">
                      Get A Quote
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