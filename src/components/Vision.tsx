import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

const Vision = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 tracking-tight">
            Vision & Mission
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Guiding principles that drive our commitment to excellence and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-1 transform">
            <CardContent className="p-10">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Our Vision</h3>
              </div>
              <blockquote className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-blue-600 pl-6 group-hover:border-blue-500 transition-colors duration-300">
                "To be the company of choice to major clients and a leading provider of innovative solutions while consistently delivering exceptional value."
              </blockquote>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-1 transform">
            <CardContent className="p-10">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-blue-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Our Mission</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Delivering reliable mining, engineering, and consulting services while driving sustainability, empowerment, and client satisfaction through innovative solutions and exceptional service delivery.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h4 className="font-bold text-slate-800 mb-3 text-lg">Excellence</h4>
              <p className="text-slate-600 leading-relaxed">Commitment to delivering the highest quality services and solutions</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h4 className="font-bold text-slate-800 mb-3 text-lg">Innovation</h4>
              <p className="text-slate-600 leading-relaxed">Embracing new technologies and creative approaches to problem-solving</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Eye className="h-10 w-10 text-white" />
              </div>
              <h4 className="font-bold text-slate-800 mb-3 text-lg">Empowerment</h4>
              <p className="text-slate-600 leading-relaxed">Promoting transformation and sustainable business growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
