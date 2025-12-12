import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero text-hero-foreground section-padding-sm">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Privacy Policy
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
          <div className="max-w-3xl mx-auto prose prose-slate">
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                  1. Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  itnest ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard 
                  your information when you visit our website or engage our services.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We may collect information about you in various ways, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Personal data you voluntarily provide (name, email, phone number)</li>
                  <li>Business information for service delivery</li>
                  <li>Technical data such as IP address and browser type</li>
                  <li>Usage data including pages visited and time spent</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide, operate, and maintain our services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you updates and marketing communications (with consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                  4. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures 
                  to protect your personal information. However, no method of transmission 
                  over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                  5. Third-Party Services
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may share your information with trusted third-party service providers 
                  who assist us in operating our website and conducting our business. These 
                  parties are obligated to keep your information confidential.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                  6. Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Depending on your location, you may have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                  7. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
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

export default Privacy;
