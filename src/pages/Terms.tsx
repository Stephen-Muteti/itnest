import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";

const Terms = () => {
  return (
    <Layout>
      <SEO
        title="Terms & Conditions | itnest"
        description="Read itnest's terms and conditions for using our IT consultancy services. Understand your rights and responsibilities when engaging with our services."
        canonical="/terms"
        keywords="terms and conditions, terms of service, itnest terms, IT consultancy terms"
      />
      {/* Hero */}
      <section className="bg-hero text-hero-foreground section-padding-sm">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Terms & Conditions
            </h1>
            <p className="text-hero-foreground/80">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                  1. Agreement to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using itnest's services, you agree to be bound by these 
                  Terms and Conditions. If you disagree with any part of these terms, you 
                  may not access our services.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                  2. Services
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  itnest provides IT consultancy services including web development, system 
                  architecture, security consulting, and related technology services. The 
                  specific scope of services will be defined in individual project agreements.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                  3. Client Responsibilities
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Clients agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Respond to requests for information in a timely manner</li>
                  <li>Pay invoices according to agreed terms</li>
                  <li>Provide necessary access to systems and resources</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                  4. Payment Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payment terms will be specified in individual project proposals or 
                  agreements. We accept various payment methods including bank transfers, 
                  credit cards, M-Pesa, and PayPal. Late payments may incur additional fees.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                  5. Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Unless otherwise specified in writing, upon full payment, clients will 
                  receive ownership of custom deliverables created specifically for their 
                  project. itnest retains rights to pre-existing tools, frameworks, and 
                  methodologies used in service delivery.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                  6. Confidentiality
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Both parties agree to maintain the confidentiality of proprietary 
                  information shared during the engagement. This obligation survives 
                  the termination of any service agreement.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                  7. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  itnest's liability is limited to the amount paid for the specific 
                  services giving rise to the claim. We are not liable for indirect, 
                  incidental, special, or consequential damages.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                  8. Termination
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate services with written notice as specified 
                  in the project agreement. Upon termination, the client is responsible 
                  for payment for all work completed up to the termination date.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                  9. Governing Law
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms are governed by the laws of Kenya. Any disputes will be 
                  resolved through arbitration in Nairobi, Kenya, unless otherwise agreed.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                  10. Contact
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions regarding these terms, please contact:
                </p>
                <p className="text-foreground mt-2">
                  Email: <a href="mailto:info@itnest.org" className="text-cyan-500 hover:underline">info@itnest.org</a><br />
                  Phone: <a href="tel:+254757090042" className="text-cyan-500 hover:underline">+254 757 090 042</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
