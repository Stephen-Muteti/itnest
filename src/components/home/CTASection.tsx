import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-hero text-hero-foreground">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-hero-foreground/80 mb-8 max-w-xl mx-auto">
            Let's discuss how our IT solutions can help you achieve your goals. 
            Get in touch for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+254757090042">
                <Phone className="h-4 w-4" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
