import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "itnest",
    url: "https://itnest.org",
    logo: "https://itnest.org/og-image.png",
    description: "Professional IT consultancy services including web development, system architecture, security enhancement, and cloud solutions.",
    address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
    contactPoint: { "@type": "ContactPoint", telephone: "+254-757-090-042", contactType: "customer service", email: "info@itnest.org" },
  };

  return (
    <Layout>
      <SEO
        title="itnest | Professional IT Consultancy Services | Nairobi, Kenya"
        description="Expert IT consultancy services including web development, system architecture, security enhancement, and cloud solutions. Serving clients worldwide from Nairobi, Kenya."
        canonical="/"
        keywords="IT consultancy, web development, system architecture, cybersecurity, cloud services, Nairobi, Kenya"
        structuredData={structuredData}
      />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <WhyChooseSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
