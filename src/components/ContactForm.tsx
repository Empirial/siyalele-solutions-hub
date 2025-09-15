import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, User, Mail, Phone, MessageSquare, Building } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const services = [
    "Mining & Construction Supply",
    "General Engineering & Maintenance", 
    "HR Consultation & Social Labour Plan Services",
    "Contact Centre & Conferencing Equipment",
    "Video Conferencing Solutions",
    "Fencing Solutions",
    "Supply & Delivery",
    "Environmental Management"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Let Netlify handle the form submission naturally
      // Create a temporary form and submit it
      const form = document.createElement('form');
      form.method = 'POST';
      form.setAttribute('netlify', '');
      form.name = 'quote-request';
      form.style.display = 'none';
      
      // Add all form fields
      const fields = [
        { name: 'form-name', value: 'quote-request' },
        { name: 'name', value: formData.name },
        { name: 'email', value: formData.email },
        { name: 'phone', value: formData.phone },
        { name: 'company', value: formData.company },
        { name: 'service', value: formData.service },
        { name: 'message', value: formData.message }
      ];
      
      fields.forEach(field => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = field.name;
        input.value = field.value;
        form.appendChild(input);
      });
      
      document.body.appendChild(form);
      form.submit();
      
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly at siyalele.pty.ltd@gmail.com",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  // Direct mailto link as backup
  const handleDirectEmail = () => {
    const subject = encodeURIComponent(`Quote Request - ${formData.service}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || 'Not specified'}
Service: ${formData.service}

Message:
${formData.message}
    `);
    
    const mailtoLink = `mailto:siyalele.pty.ltd@gmail.com?cc=mphelalufuno1.0@gmail.com&subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-industrial mb-6 tracking-tight">
            Get Your Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tell us about your project and we'll provide you with a detailed quote within 2 hours
          </p>
        </div>

        <Card className="border-0 bg-white shadow-elevated animate-scale-in">
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-industrial">Request a Quote</CardTitle>
            <p className="text-muted-foreground">Fill out the form below and we'll get back to you promptly</p>
          </CardHeader>
          
          <CardContent className="p-8">
            <form 
              name="quote-request" 
              method="POST"
              netlify="true"
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              {/* Netlify form detection - hidden input */}
              <input type="hidden" name="form-name" value="quote-request" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center text-industrial font-medium">
                    <User className="h-4 w-4 mr-2 text-primary" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="border-gray-200 focus:border-primary focus:ring-primary"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center text-industrial font-medium">
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="border-gray-200 focus:border-primary focus:ring-primary"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center text-industrial font-medium">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+27 XX XXX XXXX"
                    required
                    className="border-gray-200 focus:border-primary focus:ring-primary"
                  />
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <Label htmlFor="company" className="flex items-center text-industrial font-medium">
                    <Building className="h-4 w-4 mr-2 text-primary" />
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Enter your company name"
                    className="border-gray-200 focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <Label htmlFor="service" className="flex items-center text-industrial font-medium">
                  <MessageSquare className="h-4 w-4 mr-2 text-primary" />
                  Service Required *
                </Label>
                <Select 
                  name="service"
                  value={formData.service} 
                  onValueChange={(value) => handleInputChange("service", value)}
                  required
                >
                  <SelectTrigger className="border-gray-200 focus:border-primary focus:ring-primary">
                    <SelectValue placeholder="Select the service you need" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {/* Hidden input for Netlify form detection */}
                <input type="hidden" name="service" value={formData.service} />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center text-industrial font-medium">
                  <MessageSquare className="h-4 w-4 mr-2 text-primary" />
                  Project Details *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Please describe your project requirements, timeline, and any specific details..."
                  rows={5}
                  required
                  className="border-gray-200 focus:border-primary focus:ring-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-glow transition-all duration-smooth text-white font-bold text-lg px-12 py-4 transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Submit Quote Request
                      </>
                    )}
                  </Button>
                  
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={handleDirectEmail}
                    className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold text-lg px-8 py-4"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Email Directly
                  </Button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="border-t border-gray-200 pt-6 mt-8">
                <p className="text-center text-muted-foreground mb-4">
                  Prefer to contact us directly?
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
                  <a href="tel:+27732178184" className="flex items-center text-primary hover:text-primary-hover transition-colors">
                    <Phone className="h-4 w-4 mr-2" />
                    +27 73 217 8184
                  </a>
                  <a href="mailto:siyalele.pty.ltd@gmail.com" className="flex items-center text-primary hover:text-primary-hover transition-colors">
                    <Mail className="h-4 w-4 mr-2" />
                    siyalele.pty.ltd@gmail.com
                  </a>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;