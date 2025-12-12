import { Target, Eye, Lightbulb } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Target,
      title: "Results-Driven Approach",
      description: "We focus on delivering measurable outcomes that directly impact your business growth and efficiency.",
    },
    {
      icon: Eye,
      title: "Client-Centric Focus",
      description: "Your success is our priority. We work closely with you to understand and address your unique challenges.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "Leveraging cutting-edge technologies and methodologies to keep you ahead of the competition.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-primary/5 text-primary text-sm font-medium rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Partner You Can Trust
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With years of experience serving clients across Africa and beyond, we bring 
              expertise, reliability, and innovation to every project. Our team of certified 
              professionals is committed to delivering solutions that exceed expectations.
            </p>
            <div className="space-y-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="h-6 w-6 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-secondary rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                    <span className="font-heading text-3xl font-bold text-cyan-500">iT</span>
                  </div>
                  <p className="font-heading text-xl font-semibold text-foreground">
                    Trusted IT Partner
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Serving clients worldwide from Kenya
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500/10 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
