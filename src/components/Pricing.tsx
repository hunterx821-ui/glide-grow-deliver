import { ScrollReveal } from "@/components/ScrollReveal";
import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";

const comparison = [
  { feature: "Platform Commission", traditional: "20-30%", ours: "0%" },
  { feature: "Hidden Fees", traditional: "Yes", ours: "None" },
  { feature: "Driver Pay", traditional: "Variable", ours: "Transparent" },
  { feature: "Menu Control", traditional: "Limited", ours: "Full" },
  { feature: "Customer Data", traditional: "Platform owns", ours: "You own" },
];

export const Pricing = () => {
  return (
    <section className="py-24 sm:py-32 bg-[var(--gradient-subtle)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              See how much you can save compared to traditional platforms
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <Card className="max-w-4xl mx-auto overflow-hidden bg-card">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-6 text-lg font-bold">Feature</th>
                    <th className="text-center p-6 text-lg font-bold text-muted-foreground">
                      Traditional Platforms
                    </th>
                    <th className="text-center p-6 text-lg font-bold text-primary">
                      Our Platform
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <tr key={index} className="border-b border-border last:border-0 hover:bg-accent/5 transition-colors">
                      <td className="p-6 font-medium">{item.feature}</td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <X className="w-5 h-5 text-destructive" />
                          <span className="text-muted-foreground">{item.traditional}</span>
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <Check className="w-5 h-5 text-primary" />
                          <span className="font-bold text-primary">{item.ours}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="bg-primary/5 p-8 text-center">
              <p className="text-2xl font-bold mb-2">
                Save an average of <span className="text-primary">$2,000+</span> per month
              </p>
              <p className="text-muted-foreground">
                Based on a restaurant doing $10,000 in monthly delivery sales
              </p>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};
