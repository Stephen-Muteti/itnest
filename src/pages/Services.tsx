import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Zap,
  Shield,
  Server,
  Database,
  Cloud,
  Code,
  Settings,
  ArrowRight,
  Check,
  CreditCard,
  Building,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Custom websites and web applications built with modern frameworks and best practices.",
    features: [
      "Responsive design for all devices",
      "E-commerce solutions",
      "Content management systems",
      "Progressive web applications",
    ],
  },
  {
    icon: Zap,
    title: "System Scaling & Optimization",
    description: "Optimize your systems for maximum performance with efficient algorithms and data pipelines.",
    features: [
      "Performance auditing",
      "Database optimization",
      "Load balancing solutions",
      "Caching strategies",
    ],
  },
  {
    icon: Shield,
    title: "Security Enhancement",
    description: "Comprehensive security services to protect your systems and recover from attacks.",
    features: [
      "Security audits & assessments",
      "Vulnerability testing",
      "Cyber-attack recovery",
      "Compliance consulting",
    ],
  },
  {
    icon: Server,
    title: "System Architecture Design",
    description: "Design robust, scalable architectures that support your business growth.",
    features: [
      "Microservices architecture",
      "API design & development",
      "System integration",
      "Technical documentation",
    ],
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Expert database design, optimization, and migration services.",
    features: [
      "Database design & modeling",
      "Performance tuning",
      "Data migration",
      "Backup & recovery",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Cloud migration, deployment, and management for modern businesses.",
    features: [
      "Cloud migration planning",
      "AWS, Azure, GCP setup",
      "Serverless architecture",
      "Cost optimization",
    ],
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Bespoke software solutions tailored to your unique business requirements.",
    features: [
      "Business process automation",
      "Enterprise applications",
      "Mobile app development",
      "API integration",
    ],
  },
  {
    icon: Settings,
    title: "IT Consulting & Strategy",
    description: "Strategic technology planning and consulting to align IT with business goals.",
    features: [
      "Technology roadmapping",
      "Digital transformation",
      "Vendor management",
      "IT governance",
    ],
  },
];

const pricingTiers = [
  {
    name: "Consultation",
    price: "Free",
    description: "Initial consultation to understand your needs",
    features: [
      "30-minute discovery call",
      "Needs assessment",
      "Preliminary recommendations",
      "No commitment required",
    ],
    cta: "Book a Call",
    highlighted: false,
  },
  {
    name: "Project-Based",
    price: "Custom",
    description: "Fixed pricing for defined project scope",
    features: [
      "Detailed project proposal",
      "Milestone-based delivery",
      "Clear deliverables",
      "Post-launch support",
    ],
    cta: "Get a Quote",
    highlighted: true,
  },
  {
    name: "Retainer",
    price: "From $1,500/mo",
    description: "Ongoing support and development services",
    features: [
      "Dedicated hours per month",
      "Priority support",
      "Regular consultations",
      "Flexible scope",
    ],
    cta: "Learn More",
    highlighted: false,
  },
];

const paymentMethods = [
  { icon: CreditCard, name: "Credit/Debit Cards" },
  { icon: Building, name: "Bank Transfer" },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero text-hero-foreground section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm font-medium text-cyan-300 mb-6">
              Our Services
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Comprehensive IT{" "}
              <span className="text-cyan-300">Solutions</span>
            </h1>
            <p className="text-hero-foreground/80 text-lg">
              From web development to security consulting, we offer a full range of IT services 
              to help your business thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card rounded-xl border border-border p-6 md:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-6 w-6 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-cyan-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-primary/5 text-primary text-sm font-medium rounded-full mb-4">
              Pricing
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Flexible Engagement Models
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the engagement model that works best for your project and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl p-6 ${
                  tier.highlighted
                    ? "bg-primary text-primary-foreground ring-2 ring-cyan-500"
                    : "bg-card border border-border"
                }`}
              >
                <h3 className={`font-heading font-semibold text-lg mb-2 ${
                  tier.highlighted ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {tier.name}
                </h3>
                <div className={`text-2xl font-bold mb-2 ${
                  tier.highlighted ? "text-cyan-300" : "text-cyan-500"
                }`}>
                  {tier.price}
                </div>
                <p className={`text-sm mb-6 ${
                  tier.highlighted ? "text-cyan-200" : "text-muted-foreground"
                }`}>
                  {tier.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className={`flex items-center gap-2 text-sm ${
                      tier.highlighted ? "text-cyan-100" : "text-muted-foreground"
                    }`}>
                      <Check className={`h-4 w-4 ${tier.highlighted ? "text-cyan-300" : "text-cyan-500"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.highlighted ? "hero" : "ctaOutline"}
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">{tier.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="section-padding-sm border-b border-border">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <span className="text-muted-foreground text-sm font-medium">Accepted Payment Methods:</span>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {paymentMethods.map((method) => (
                <div key={method.name} className="flex items-center gap-2 text-foreground">
                  <method.icon className="h-5 w-5 text-cyan-500" />
                  <span className="text-sm">{method.name}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 text-foreground">
                <span className="text-sm font-medium text-cyan-500">M-Pesa</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <span className="text-sm font-medium text-cyan-500">PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-cyan-200 mb-8 max-w-xl mx-auto">
            Contact us today for a free consultation and let's discuss your project needs.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
