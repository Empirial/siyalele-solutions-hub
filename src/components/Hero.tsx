import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-mining.jpg";

const Hero = () => {
  const whatsappLink = "https://wa.me/27732178184?text=Hello+Siyalele+Projects,+I+am+interested+in+your+services";

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-industrial/90 via-industrial/70 to-industrial/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Innovative Mining & Engineering Solutions,{" "}
            <span className="bg-gradient-to-r from-primary to-accent-turquoise bg-clip-text text-transparent">
              Delivered with Excellence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Your trusted partner for mining supply, engineering maintenance, and professional consulting services across South Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold text-lg px-8 py-4"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Chat with Us on WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-industrial font-bold text-lg px-8 py-4"
            >
              <a href="#services">
                Our Services
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Award className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">100% Black-Owned</h3>
                <p className="text-sm text-gray-300">Certified Business</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Users className="h-8 w-8 text-accent-turquoise" />
              <div>
                <h3 className="font-semibold">Youth-Led Company</h3>
                <p className="text-sm text-gray-300">50% Female Directors</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Shield className="h-8 w-8 text-secondary" />
              <div>
                <h3 className="font-semibold">CSD Verified</h3>
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