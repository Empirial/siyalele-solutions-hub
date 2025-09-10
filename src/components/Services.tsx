import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HardHat, Wrench, FileText, ArrowRight, Headphones, Video, Shield, Truck, Leaf, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const nextImage = (serviceIndex, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [serviceIndex]: ((prev[serviceIndex] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (serviceIndex, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [serviceIndex]: ((prev[serviceIndex] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const services = [
    {
      icon: HardHat,
      title: "Mining & Construction Supply",
      description: "Complete range of mining equipment, construction tools, machinery, and Personal Protective Equipment (PPE) for safe and efficient operations.",
      features: ["Mining Equipment", "Construction Tools", "PPE & Safety Gear", "Machinery Supply"],
      images: [
        "/api/placeholder/400/250",
        "/api/placeholder/400/250", 
        "/api/placeholder/400/250"
      ],
    },
    {
      icon: Wrench,
      title: "General Engineering & Maintenance",
      description: "Comprehensive maintenance services including boiler making, electrical work, mechanical services, and fabrication by qualified personnel.",
      features: ["Boiler Making & Fabrication", "Electrical Work & Supply", "Mechanical Parts & Supply", "Qualified Personnel"],
      images: [
        "/api/placeholder/400/250",
        "/api/placeholder/400/250",
        "/api/placeholder/400/250"
      ],
    },
    {
      icon: FileText,
      title: "HR Consultation & Social Labour Plan Services",
      description: "Expert HR consulting, Social Labour Plan (SLP) drafting, disciplinary facilitation, training, and comprehensive auditing services.",
      features: ["Social Labour Plan (SLP) Drafting & Consultation", "HR Policies & Review", "Disciplinary Facilitation", "HR Training & Auditing"],
      images: [
        "/api/placeholder/400/250",
        "/api/placeholder/400/250",
        "/api/placeholder/400/250"
      ],
    },
    {
      icon: Headphones,
      title: "Contact Centre & Conferencing Equipment",
      description: "Professional headsets, audio accessories, and conferencing equipment from leading brands like Poly, Yealink, and Jabra.",
      features: ["Wired & Wireless Headsets", "Noise-Cancelling Headphones", "USB & Bluetooth Headsets", "Audio Accessories"],
      images: [
        "/api/placeholder/400/250",
        "/api/placeholder/400/250",
        "/api/placeholder/400/250"
      ],
    },
    {
      icon: Video,
      title: "Video Conferencing Solutions",
      description: "Complete video conferencing systems including cameras, speakers, and portable solutions for modern business communication.",
      features: ["Conference Room Cameras", "4K Video Systems", "Conference Speakers", "Wireless Audio Solutions"],
      images: [
        "/api/placeholder/400/250",
        "/api/placeholder/400/250",
        "/api/placeholder/400/250"
      ],
    },
    {
      icon: Shield,
      title: "Fencing Solutions",
      description: "Comprehensive fencing services including barbed wire, chain link, and electric fencing for security and property protection.",
      features: ["Barbed Wire Fencing", "Chain Link Fencing", "Electric Fencing", "Security Solutions"],
      images: [
        "/api/placeholder/400/250",
        "/api/placeholder/400/250",
        "/api/placeholder/400/250"
      ],
    },
    {
      icon: Truck,
      title: "Supply & Delivery",
      description: "Complete supply and delivery services for construction materials, machinery, office supplies, and specialized equipment hire.",
      features: ["Construction Materials", "Engineering Components", "Office Supplies & Stationery", "Machine Hire Services"],
      images: [
        "/public/loveable-uploads/Elec.jpeg",
        "/public/loveable-uploads/OfficeS.jpeg",
        "/public/loveable-uploads/Constr.jpeg"
      ],
    },
    {
      icon: Leaf,
      title: "Environmental Management",
      description: "Comprehensive environmental management services including waste management, pollution control, and specialized cleaning solutions.",
      features: ["Waste & Pollution Control", "Vacuum Truck & Dredging", "Dam De-sludging", "Tree Felling & Alien Species Removal"],
      images: [
        "/api/placeholder/400/250",
        "/api/placeholder/400/250",
        "/api/placeholder/400/250"
      ],
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
            const currentImageIdx = currentImageIndex[index] || 0;
            
            return (
              <Card 
                key={index} 
                className="group overflow-hidden border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Image Carousel Header */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img 
                    src={service.images[currentImageIdx]} 
                    alt={`${service.title} - Image ${currentImageIdx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={() => prevImage(index, service.images.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="h-4 w-4 text-gray-700" />
                  </button>
                  
                  <button
                    onClick={() => nextImage(index, service.images.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="h-4 w-4 text-gray-700" />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1">
                    {service.images.map((_, imgIndex) => (
                      <button
                        key={imgIndex}
                        onClick={() => setCurrentImageIndex(prev => ({ ...prev, [index]: imgIndex }))}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          imgIndex === currentImageIdx 
                            ? 'bg-white' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-md">
                    <Icon className="h-6 w-6 text-gray-700" />
                  </div>

                  {/* Image Counter */}
                  <div className="absolute top-4 left-4 px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-white text-xs font-medium">
                    {currentImageIdx + 1}/{service.images.length}
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

// Add this component to test image loading
const ImageWithFallback = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  
  return (
    <>
      {error && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs p-1 rounded z-10">
          Image failed to load
        </div>
      )}
      <img 
        src={src}
        alt={alt}
        className={className}
        onError={() => {
          console.error(`Failed to load image: ${src}`);
          setError(true);
        }}
        onLoad={() => console.log(`Successfully loaded: ${src}`)}
      />
    </>
  );
};

// Then use it in your component:
<ImageWithFallback
  src={service.images[currentImageIdx]} 
  alt={`${service.title} - Image ${currentImageIdx + 1}`}
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
/>;

export default Services;
