import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <SEO title="Page Not Found | itnest" description="The page you're looking for doesn't exist." noindex={true} />
      <section className="section-padding min-h-[60vh] flex items-center justify-center">
        <div className="container-custom text-center">
          <div className="max-w-md mx-auto">
            <h1 className="font-heading text-7xl font-bold text-primary mb-4">404</h1>
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link to="/">
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
