import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Zap, Shield, Server, Database, Cloud, ArrowRight } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", description: "Custom websites and web applications built with modern technologies." },
  { icon: Zap, title: "System Scaling", description: "Optimize your systems with performant data pipelines and algorithms." },
  { icon: Shield, title: "Security Enhancement", description: "Comprehensive security audits and cyber-attack recovery solutions." },
  { icon: Server, title: "System Architecture", description: "Design robust, scalable system architectures for your business." },
  { icon: Database, title: "Database Solutions", description: "Database design, optimization, and migration services." },
  { icon: Cloud, title: "Cloud Services", description: "Cloud migration, infrastructure setup, and managed solutions." },
];

const ServicesSection = () => (
  <section className="section-padding bg-section-alt">
    <div className="container-custom">
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 bg-primary/5 text-primary text-sm font-medium rounded-full mb-4">Our Services</span>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Comprehensive IT Solutions</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">From development to security, we provide end-to-end IT consultancy services.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {services.map((service) => (
          <article key={service.title} className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <service.icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{service.title}</h3>
            <p className="text-muted-foreground text-sm">{service.description}</p>
          </article>
        ))}
      </div>
      <div className="text-center">
        <Button variant="ctaOutline" asChild><Link to="/services">View All Services<ArrowRight className="h-4 w-4" /></Link></Button>
      </div>
    </div>
  </section>
);

export default ServicesSection;
