import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import SEO from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { Target, Eye, Users, Award, CheckCircle, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every project, delivering solutions that exceed expectations.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Open communication and honest reporting throughout every engagement.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with clients as partners to achieve shared goals.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "Embracing new technologies and methodologies to drive better outcomes.",
  },
];

const milestones = [
  "Founded in Nairobi with a vision to deliver world-class IT solutions",
  "Expanded services to include system architecture and security consulting",
  "Reached 50+ clients across 10 countries",
  "Established 24/7 support operations for global clients",
  "Continued growth with 100+ satisfied clients worldwide",
];

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About itnest",
    description: "Learn about itnest, a professional IT consultancy based in Nairobi, Kenya, delivering innovative technology solutions globally.",
    mainEntity: {
      "@type": "Organization",
      name: "itnest",
      foundingLocation: "Nairobi, Kenya",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        value: "10+",
      },
    },
  };

  return (
    <Layout>
      <SEO
        title="About Us - itnest IT Consultancy"
        description="Learn about itnest, a professional IT consultancy based in Nairobi, Kenya, delivering innovative technology solutions to businesses worldwide."
        canonical="/about"
        keywords="about itnest, IT consultancy Kenya, technology company Nairobi, IT solutions Africa"
        structuredData={structuredData}
      />
      {/* Hero */}
      <section className="bg-hero text-hero-foreground section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm font-medium text-cyan-300 mb-6">
              About itnest
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Driving Digital Transformation{" "}
              <span className="text-cyan-300">Globally</span>
            </h1>
            <p className="text-hero-foreground/80 text-lg">
              Based in Nairobi, Kenya, we provide expert IT consultancy services to businesses 
              across the globe, helping them leverage technology for growth and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-primary/5 text-primary text-sm font-medium rounded-full mb-4">
                Our Story
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Building Technology Solutions That Matter
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                itnest was founded with a simple mission: to bridge the gap between complex 
                technology and business success. Our team of experienced IT professionals 
                brings together expertise in web development, system architecture, security, 
                and more.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                From our base in Nairobi, we've grown to serve clients across Africa, Europe, 
                North America, and beyond. We believe that great technology solutions should be 
                accessible to businesses of all sizes, everywhere.
              </p>
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  Work With Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="bg-section-alt rounded-2xl p-8">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-6">
                Our Journey
              </h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{milestone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-primary/5 text-primary text-sm font-medium rounded-full mb-4">
              Our Values
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-lg border border-border p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-cyan-500" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-cyan-200 mb-8 max-w-xl mx-auto">
            Let's discuss how we can help transform your business with innovative IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
