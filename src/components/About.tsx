import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, Users, CheckCircle } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "2023", event: "Company Establishment", description: "Founded as 100% black-owned business" },
    { year: "2023", event: "Rapid Growth", description: "Expanded service offerings and client base" },
    { year: "2024", event: "Strategic Partnerships", description: "Built strong industry relationships" },
    { year: "Future", event: "Continued Expansion", description: "Scaling operations across South Africa" }
  ];

  const certifications = [
    { label: "Company Registration", value: "2023/000257/07" },
    { label: "CSD Verification", value: "MAAA1487648" },
    { label: "Eskom Vendor", value: "11094569" },
    { label: "Tax Clearance", value: "9279622253" },
    { label: "VAT Number", value: "4410317988" },
    { label: "Banking", value: "ABSA Business Account" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-industrial mb-6">
              About Siyalele Projects
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Siyalele Projects is a <strong>100% black-owned, youth-led company</strong> established in 2023 with a vision to drive innovation, empowerment, and sustainable business solutions across the mining and engineering sectors.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our leadership team consists of <strong>50% black female and 50% black male directors</strong>, bringing diverse perspectives and expertise to deliver exceptional value to our clients while promoting transformation in the industry.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                We focus on delivering reliable mining, engineering, and consulting services while driving sustainability, empowerment, and client satisfaction at every level of our operations.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-industrial">100% Black-Owned</p>
                  <p className="text-sm text-muted-foreground">Certified Business</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-industrial">Youth-Led</p>
                  <p className="text-sm text-muted-foreground">50% Female Directors</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline & Certifications */}
          <div className="space-y-8">
            {/* Company Timeline */}
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-industrial mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Company Timeline
                </h3>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary">
                        {milestone.year}
                      </Badge>
                      <div>
                        <p className="font-semibold text-industrial">{milestone.event}</p>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-industrial mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-secondary" />
                  Certifications & Registration
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-muted last:border-b-0">
                      <span className="text-sm font-medium text-industrial">{cert.label}</span>
                      <span className="text-sm text-muted-foreground font-mono">{cert.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;