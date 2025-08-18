import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageSquare, Clock, Building } from "lucide-react";

const Contact = () => {
  const whatsappLink = "https://wa.me/27732178184?text=Hello+Siyalele+Projects,+I+am+interested+in+your+services";
  
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Address",
      details: ["Monet St Arabella Villas 9", "Benfluer, eMalahleni", "1049, South Africa"],
      type: "address"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+27 73 217 8184", "+27 60 722 6173"],
      type: "phone"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["Siyalele.pty.ltd@gmail.com"],
      type: "email"
    },
    {
      icon: Building,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 8:00 AM - 1:00 PM", "Sunday: Closed"],
      type: "hours"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-industrial mb-6 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your project? Contact us today for professional mining, engineering, and consulting solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="border-0 bg-white hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center text-lg text-industrial">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-3">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        {info.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground mb-1">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Map Embed */}
            <Card className="border-0 bg-white">
              <CardContent className="p-0">
                <div className="w-full h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.5!2d29.0!3d-25.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU0JzAwLjAiUyAyOcKwMDAnMDAuMCJF!5e0!3m2!1sen!2sza!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Siyalele Projects Location"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* WhatsApp CTA */}
          <div className="space-y-6">
            <Card className="border-0 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-industrial">Start a Conversation</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Get instant responses and personalized service through our WhatsApp business chat.
                </p>
                
                <Button 
                  asChild
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold text-lg py-6"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Start a Chat Now
                  </a>
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  Available during business hours for immediate assistance
                </p>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <Card className="border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-lg text-industrial">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  asChild
                  variant="outline"
                  className="w-full justify-start hover:bg-primary/5 hover:border-primary"
                >
                  <a href="tel:+27732178184">
                    <Phone className="mr-3 h-4 w-4" />
                    Call: +27 73 217 8184
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  className="w-full justify-start hover:bg-primary/5 hover:border-primary"
                >
                  <a href="mailto:Siyalele.pty.ltd@gmail.com">
                    <Mail className="mr-3 h-4 w-4" />
                    Email Us
                  </a>
                </Button>
                
                <div className="flex items-center text-sm text-muted-foreground pt-2">
                  <Clock className="mr-2 h-4 w-4" />
                  Response time: Within 2 hours
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;