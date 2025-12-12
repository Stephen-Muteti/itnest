import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Zap,
  Shield,
  Server,
  Database,
  Cloud,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
  },
  {
    icon: Zap,
    title: "System Scaling",
    description: "Optimize your systems with performant data pipelines and efficient algorithms for maximum speed and throughput.",
  },
  {
    icon: Shield,
    title: "Security Enhancement",
    description: "Comprehensive security audits, vulnerability assessments, and cyber-attack recovery solutions.",
  },
  {
    icon: Server,
    title: "System Architecture",
    description: "Design robust, scalable system architectures that grow with your business needs.",
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Database design, optimization, and migration services for efficient data management.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Cloud migration, infrastructure setup, and managed cloud solutions for modern businesses.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-primary/5 text-primary text-sm font-medium rounded-full mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive IT Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From development to security, we provide end-to-end IT consultancy services 
            tailored to your business needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <service.icon className="h-6 w-6 text-cyan-500" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="ctaOutline" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
