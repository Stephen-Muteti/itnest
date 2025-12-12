import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+254 757 090 042",
    href: "tel:+254757090042",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@itnest.org",
    href: "mailto:info@itnest.org",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, Kenya",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours (EAT)",
    value: "Mon – Fri: 8AM – 6PM",
    href: null,
  },
];

const serviceOptions = [
  "Web Design & Development",
  "System Scaling & Optimization",
  "Security Enhancement",
  "System Architecture Design",
  "Database Solutions",
  "Cloud Services",
  "Custom Software Development",
  "IT Consulting & Strategy",
  "Other",
];

const budgetOptions = [
  "Under $1,000",
  "$1,000 - $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000+",
  "Not sure yet",
];

const timelineOptions = [
  "ASAP / Urgent",
  "Within 1 month",
  "1-3 months",
  "3-6 months",
  "6+ months",
  "Flexible",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      budget: "",
      timeline: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact itnest",
    description: "Get in touch with itnest for IT consultancy services. Contact us via phone, email, or our contact form.",
    mainEntity: {
      "@type": "Organization",
      name: "itnest",
      telephone: "+254-757-090-042",
      email: "info@itnest.org",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
    },
  };

  return (
    <Layout>
      <SEO
        title="Contact Us - Get IT Consultancy Quote | itnest"
        description="Contact itnest for professional IT consultancy services. Get a free quote for web development, system architecture, cybersecurity, and cloud solutions. Based in Nairobi, serving worldwide."
        canonical="/contact"
        keywords="contact itnest, IT consultancy quote, web development quote, IT services Kenya, hire IT consultants"
        structuredData={structuredData}
      />
      {/* Hero */}
      <section className="bg-hero text-hero-foreground section-padding-sm">
        <div className="container-custom">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm font-medium text-cyan-300 mb-4">
              Get in Touch
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-hero-foreground/80">
              Ready to start your project? Get in touch for a free consultation and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                  Let's Talk
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Have a question or ready to start your project? Reach out and our team 
                  will respond within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border"
                  >
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-cyan-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-foreground hover:text-cyan-500 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-section-alt rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <MessageSquare className="h-5 w-5 text-cyan-500" />
                  <span className="font-medium text-foreground">Quick Response</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="p-6 md:p-8 bg-card rounded-xl border border-border">
                <h2 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Request a Quote
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="bg-secondary border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="bg-secondary border-border"
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 7XX XXX XXX"
                        className="bg-secondary border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Company/Organization
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="bg-secondary border-border"
                      />
                    </div>
                  </div>

                  {/* Service & Budget */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Service Required *
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                      >
                        <SelectTrigger className="bg-secondary border-border">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Estimated Budget
                      </label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) => setFormData({ ...formData, budget: value })}
                      >
                        <SelectTrigger className="bg-secondary border-border">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetOptions.map((budget) => (
                            <SelectItem key={budget} value={budget}>
                              {budget}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Timeline & Subject */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Project Timeline
                      </label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) => setFormData({ ...formData, timeline: value })}
                      >
                        <SelectTrigger className="bg-secondary border-border">
                          <SelectValue placeholder="When do you need this?" />
                        </SelectTrigger>
                        <SelectContent>
                          {timelineOptions.map((timeline) => (
                            <SelectItem key={timeline} value={timeline}>
                              {timeline}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Subject *
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Brief description"
                        required
                        className="bg-secondary border-border"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Project Details *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      rows={5}
                      required
                      className="bg-secondary border-border resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
