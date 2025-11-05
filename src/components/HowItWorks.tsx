import { ScrollReveal } from "@/components/ScrollReveal";
import { Store, Bike, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Store,
    title: "Restaurant Lists",
    description: "Local restaurants post their menu items directly on the platform with no commission fees.",
    delay: 0,
  },
  {
    icon: Bike,
    title: "Driver Accepts",
    description: "Independent drivers see the order and accept delivery jobs with transparent, fair compensation.",
    delay: 100,
  },
  {
    icon: CheckCircle,
    title: "Customer Receives",
    description: "Fresh food delivered fast. Everyone wins—restaurants keep more, drivers earn more, customers pay less.",
    delay: 200,
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              A simple, transparent process that benefits everyone in the community
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mt-16">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={step.delay} animation="fade-up">
              <div className="relative group">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                
                <div className="relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <div className="absolute top-8 right-8 text-6xl font-bold text-muted/10">
                    {index + 1}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
