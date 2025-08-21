import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const whatsappLink = "https://wa.me/27732178184?text=Hello+Siyalele+Projects,+I+would+like+to+get+a+quote";

  return (
    <footer className="bg-industrial text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/e396e44a-166c-4170-89e7-3ec9a6084f30.png" 
                alt="Siyalele Projects" 
                className="h-10 w-10 mr-3"
              />
              <div>
                <h3 className="text-xl font-bold">Siyalele Projects (PTY) LTD</h3>
                <p className="text-sm text-gray-300">EST. 2023</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Your trusted partner for innovative mining, engineering, and consulting solutions. 
              Delivering excellence through 100% black-owned, youth-led expertise.
            </p>
            <Button 
              asChild
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:opacity-90 text-white font-semibold"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-4 w-4" />
                Get A Quote
              </a>
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#directors" className="text-gray-300 hover:text-primary transition-colors">Directors</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mt-1 mr-2 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Monet St Arabella Villas 9<br />
                  Benfluer, eMalahleni<br />
                  1049, South Africa
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span className="text-gray-300 text-sm">+27 73 217 8184</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span className="text-gray-300 text-sm">Siyalele.pty.ltd@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-300 mb-4 md:mb-0">
              <p>&copy; 2024 Siyalele Projects (PTY) LTD. All rights reserved.</p>
              <p className="mt-1">
                Registration: 2023/000257/07 | CSD: MAAA1487648 | VAT: 4410317988
              </p>
            </div>
            <div className="text-sm text-gray-300">
              <p>100% Black-Owned | Youth-Led Company</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;