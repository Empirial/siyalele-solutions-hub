import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Award, Briefcase } from "lucide-react";

const Directors = () => {
  const directors = [
    {
      name: "Siyabulela Gumede",
      position: "Managing Director",
      description: "Visionary leader driving strategic growth and operational excellence. Committed to innovation and sustainable business development.",
      qualifications: ["Business Leadership", "Strategic Planning", "Industry Expertise"],
      icon: Briefcase
    },
    {
      name: "Siphesihle Gumede",
      position: "Director",
      description: "Experienced professional focused on client relationships and service delivery excellence. Passionate about transformation and empowerment.",
      qualifications: ["Client Relations", "Service Excellence", "Business Development"],
      icon: Award
    }
  ];

  return (
    <section id="directors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial mb-4">
            Leadership Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our dynamic directors committed to driving excellence and transformation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {directors.map((director, index) => {
            const Icon = director.icon;
            return (
              <Card key={index} className="group hover:shadow-industrial transition-all duration-300 border-0 bg-gradient-to-br from-white to-muted/20">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    {/* Profile Placeholder */}
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <User className="h-12 w-12 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-industrial mb-2">{director.name}</h3>
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 mb-4">
                      {director.position}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                    {director.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-primary mr-2" />
                      <span className="font-semibold text-industrial">Key Expertise</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {director.qualifications.map((qual, idx) => (
                        <Badge key={idx} variant="outline" className="bg-primary/5 text-primary border-primary/20">
                          {qual}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Company Leadership Highlights */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-industrial mb-4">Leadership Commitment</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our leadership team embodies <strong>youthful energy, resilience, and unwavering commitment</strong> to client growth and success. 
              Together, we drive innovation while maintaining the highest standards of service delivery and business ethics.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/50 rounded-lg p-6">
                <h4 className="font-bold text-industrial mb-2">50% Female Leadership</h4>
                <p className="text-muted-foreground">Promoting gender diversity in executive positions</p>
              </div>
              <div className="bg-white/50 rounded-lg p-6">
                <h4 className="font-bold text-industrial mb-2">Youth-Driven Innovation</h4>
                <p className="text-muted-foreground">Fresh perspectives driving industry transformation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directors;