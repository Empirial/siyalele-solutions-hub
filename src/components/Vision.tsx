import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

const Vision = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial mb-4">
            Vision & Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Guiding principles that drive our commitment to excellence and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision */}
          <Card className="group hover:shadow-industrial transition-all duration-300 border-0 bg-white">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-turquoise rounded-full flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-industrial">Our Vision</h3>
              </div>
              <blockquote className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6">
                "To be the company of choice to major clients and a leading provider of innovative solutions while consistently delivering exceptional value."
              </blockquote>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="group hover:shadow-industrial transition-all duration-300 border-0 bg-white">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent-blue rounded-full flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-industrial">Our Mission</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Delivering reliable mining, engineering, and consulting services while driving sustainability, empowerment, and client satisfaction through innovative solutions and exceptional service delivery.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-industrial text-center mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-industrial mb-2">Excellence</h4>
              <p className="text-muted-foreground">Commitment to delivering the highest quality services and solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-industrial mb-2">Innovation</h4>
              <p className="text-muted-foreground">Embracing new technologies and creative approaches to problem-solving</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-turquoise to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-industrial mb-2">Empowerment</h4>
              <p className="text-muted-foreground">Promoting transformation and sustainable business growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;