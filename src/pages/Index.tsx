import Hero from "@/components/Hero";
import About from "@/components/About";
import Vision from "@/components/Vision";
import Services from "@/components/Services";
import Directors from "@/components/Directors";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Vision />
      <Services />
      <Directors />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
