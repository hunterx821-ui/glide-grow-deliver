import { ScrollReveal } from "@/components/ScrollReveal";
import { DollarSign, TrendingUp, Users, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const restaurantBenefits = [
  {
    icon: DollarSign,
    title: "Keep More Revenue",
    description: "Say goodbye to 20-30% platform fees. Keep what you earn and reinvest in your business.",
  },
  {
    icon: TrendingUp,
    title: "Direct Customer Access",
    description: "Build lasting relationships with your customers without third-party interference.",
  },
];

const driverBenefits = [
  {
    icon: Users,
    title: "Fair Compensation",
    description: "Transparent pay structure with no hidden fees. You see exactly what you'll earn upfront.",
  },
  {
    icon: Shield,
    title: "Flexible Schedule",
    description: "Work when you want. Be your own boss with complete freedom and independence.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-24 sm:py-32 bg-[var(--gradient-subtle)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Restaurants Section */}
        <div className="mb-24">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                For Restaurant Owners
              </h2>
              <p className="text-lg text-muted-foreground">
                Take control of your business with tools that work for you
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {restaurantBenefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 100} animation="slide-in-left">
                <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
        
        {/* Drivers Section */}
        <div>
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                For Delivery Drivers
              </h2>
              <p className="text-lg text-muted-foreground">
                Earn more with transparent, fair compensation
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {driverBenefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 100} animation="slide-in-right">
                <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border">
                  <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                    <benefit.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
