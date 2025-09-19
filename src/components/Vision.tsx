import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Lightbulb, Compass } from "lucide-react";

const Vision = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-industrial mb-6 tracking-tight">
            Vision & Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Guiding principles that drive our commitment to excellence and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision */}
          <Card className="group hover:shadow-elevated transition-all duration-smooth border-0 bg-white hover:-translate-y-1 transform animate-scale-in">
            <CardContent className="p-10">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent-turquoise rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-smooth shadow-card">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-industrial">Our Vision</h3>
              </div>
              <blockquote className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6 group-hover:border-primary/80 transition-colors duration-smooth">
                "To be the company of choice to major clients and a leading provider of innovative solutions while consistently delivering exceptional value."
              </blockquote>
            </CardContent>
          </Card>

          {/* Mission - Changed icon to Compass for better visibility and meaning */}
          <Card className="group hover:shadow-elevated transition-all duration-smooth border-0 bg-white hover:-translate-y-1 transform animate-scale-in" style={{ animationDelay: '150ms' }}>
            <CardContent className="p-10">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent-blue rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-smooth shadow-card">
                  <Compass className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-industrial">Our Mission</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Delivering reliable mining, engineering, and consulting services while driving sustainability, empowerment, and client satisfaction through innovative solutions and exceptional service delivery.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mt-20 animate-slide-up">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-industrial text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group animate-scale-in">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-smooth shadow-card group-hover:shadow-glow">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h4 className="font-heading font-bold text-industrial mb-3 text-lg">Excellence</h4>
              <p className="text-muted-foreground leading-relaxed">Commitment to delivering the highest quality services and solutions</p>
            </div>
            
            {/* Innovation - Changed from Target to Lightbulb for better representation */}
            <div className="text-center group animate-scale-in" style={{ animationDelay: '150ms' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent-blue rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-smooth shadow-card group-hover:shadow-glow">
                <Lightbulb className="h-10 w-10 text-white" />
              </div>
              <h4 className="font-heading font-bold text-industrial mb-3 text-lg">Innovation</h4>
              <p className="text-muted-foreground leading-relaxed">Embracing new technologies and creative approaches to problem-solving</p>
            </div>
            
            {/* Empowerment - Changed from Eye to Target for better meaning */}
            <div className="text-center group animate-scale-in" style={{ animationDelay: '300ms' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-accent-orange to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-smooth shadow-card group-hover:shadow-glow">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h4 className="font-heading font-bold text-industrial mb-3 text-lg">Empowerment</h4>
              <p className="text-muted-foreground leading-relaxed">Promoting transformation and sustainable business growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
