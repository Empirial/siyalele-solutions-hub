import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Shield, Users } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-0">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/e396e44a-166c-4170-89e7-3ec9a6084f30.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-industrial/90 via-industrial/70 to-industrial/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="text-center animate-fade-in">
          {/* Centered Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 animate-slow-bounce">
              <img 
                src="/lovable-uploads/e396e44a-166c-4170-89e7-3ec9a6084f30.png" 
                alt="Siyalele Projects Logo" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight">
            Innovative Mining & Engineering Solutions,{" "}
            <span className="bg-gradient-to-r from-primary to-accent-turquoise bg-clip-text text-transparent">
              Delivered with Excellence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed max-w-3xl mx-auto font-light animate-fade-in-left animation-delay-200">
            Your trusted partner for mining supply, engineering maintenance, and professional consulting services across South Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center animate-scale-in">
            <Button 
              asChild
              size="lg"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-glow transition-all duration-smooth text-white font-bold text-lg px-8 py-4 transform hover:scale-105"
            >
              <a href="#contact-form">
                Get A Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-fast" />
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-industrial font-bold text-lg px-8 py-4 transition-all duration-smooth backdrop-blur-sm hover:shadow-card transform hover:scale-105"
            >
              <a href="#services">
                Our Services
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-slide-up">
            <div className="group flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-smooth border border-white/20 hover:border-primary/50 transform hover:-translate-y-1">
              <div className="p-2 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-colors duration-smooth">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold font-heading">100% Black-Owned</h3>
                <p className="text-sm text-gray-300">Certified Business</p>
              </div>
            </div>
            
            <div className="group flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-smooth border border-white/20 hover:border-accent-turquoise/50 transform hover:-translate-y-1">
              <div className="p-2 bg-accent-turquoise/20 rounded-full group-hover:bg-accent-turquoise/30 transition-colors duration-smooth">
                <Users className="h-6 w-6 text-accent-turquoise" />
              </div>
              <div>
                <h3 className="font-semibold font-heading">Youth-Led Company</h3>
                <p className="text-sm text-gray-300">50% Female Directors</p>
              </div>
            </div>
            
            <div className="group flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-smooth border border-white/20 hover:border-secondary/50 transform hover:-translate-y-1">
              <div className="p-2 bg-secondary/20 rounded-full group-hover:bg-secondary/30 transition-colors duration-smooth">
                <Shield className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold font-heading">CSD Verified</h3>
                <p className="text-sm text-gray-300">MAAA1487648</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;