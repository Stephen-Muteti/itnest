import { Users, Award, Globe2, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "100+",
    label: "Clients Served",
  },
  {
    icon: Award,
    value: "5+",
    label: "Years Experience",
  },
  {
    icon: Globe2,
    value: "15+",
    label: "Countries Reached",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support Available",
  },
];

const StatsSection = () => {
  return (
    <section className="section-padding-sm bg-primary">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="h-6 w-6 text-cyan-300" />
              </div>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-cyan-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
