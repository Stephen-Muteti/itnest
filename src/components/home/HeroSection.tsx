import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const highlights = [
    "Certified IT Experts",
    "Global Service Delivery",
    "24/7 Technical Support",
  ];

  return (
    <section className="bg-hero text-hero-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2390e0ef' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container-custom section-padding relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm font-medium text-cyan-300 mb-6 animate-fade-in">
            Professional IT Consultancy
          </div>
          
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
            Expert IT Solutions for{" "}
            <span className="text-cyan-300">Modern Business</span>
          </h1>
          
          <p className="text-base sm:text-lg text-hero-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            From web development to system architecture, we deliver innovative technology solutions 
            that drive growth and efficiency for businesses worldwide.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/services">
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">Request Consultation</Link>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-cyan-300" />
                <span className="text-hero-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
