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
      image: "/api/placeholder/400/250", // Replace with actual images
    },
    {
      icon: Wrench,
      title: "General Engineering & Maintenance",
      description: "Comprehensive maintenance services including boiler making, electrical work, mechanical services, and fabrication by qualified personnel.",
      features: ["Boiler Making & Fabrication", "Electrical Work & Supply", "Mechanical Parts & Supply", "Qualified Personnel"],
      image: "/api/placeholder/400/250",
    },
    {
      icon: FileText,
      title: "HR Consultation & Social Labour Plan Services",
      description: "Expert HR consulting, Social Labour Plan (SLP) drafting, disciplinary facilitation, training, and comprehensive auditing services.",
      features: ["Social Labour Plan (SLP) Drafting & Consultation", "HR Policies & Review", "Disciplinary Facilitation", "HR Training & Auditing"],
      image: "/api/placeholder/400/250",
    },
    {
      icon: Headphones,
      title: "Contact Centre & Conferencing Equipment",
      description: "Professional headsets, audio accessories, and conferencing equipment from leading brands like Poly, Yealink, and Jabra.",
      features: ["Wired & Wireless Headsets", "Noise-Cancelling Headphones", "USB & Bluetooth Headsets", "Audio Accessories"],
      image: "/api/placeholder/400/250",
    },
    {
      icon: Video,
      title: "Video Conferencing Solutions",
      description: "Complete video conferencing systems including cameras, speakers, and portable solutions for modern business communication.",
      features: ["Conference Room Cameras", "4K Video Systems", "Conference Speakers", "Wireless Audio Solutions"],
      image: "/api/placeholder/400/250",
    },
    {
      icon: Shield,
      title: "Fencing Solutions",
      description: "Comprehensive fencing services including barbed wire, chain link, and electric fencing for security and property protection.",
      features: ["Barbed Wire Fencing", "Chain Link Fencing", "Electric Fencing", "Security Solutions"],
      image: "/api/placeholder/400/250",
    },
    {
      icon: Truck,
      title: "Supply & Delivery",
      description: "Complete supply and delivery services for construction materials, machinery, office supplies, and specialized equipment hire.",
      features: ["Construction Materials", "Engineering Components", "Office Supplies & Stationery", "Machine Hire Services"],
      image: "/api/placeholder/400/250",
    },
    {
      icon: Leaf,
      title: "Environmental Management",
      description: "Comprehensive environmental management services including waste management, pollution control, and specialized cleaning solutions.",
      features: ["Waste & Pollution Control", "Vacuum Truck & Dredging", "Dam De-sludging", "Tree Felling & Alien Species Removal"],
      image: "/api/placeholder/400/250",
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions for mining, engineering, and business consulting needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group overflow-hidden border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-md">
                    <Icon className="h-6 w-6 text-gray-700" />
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Title */}
                  <CardTitle className="font-bold text-lg text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>

                  {/* Description */}
                  <CardDescription className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </CardDescription>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-gray-500 italic pl-4">
                        +{service.features.length - 3} more services
                      </li>
                    )}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    asChild
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-md group/btn"
                  >
                    <a href="#contact-form" className="flex items-center justify-center">
                      Get A Quote
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
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