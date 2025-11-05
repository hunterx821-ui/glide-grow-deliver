import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-primary via-primary to-primary-glow relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="scale-in">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Ready to Transform Your Food Delivery?
            </h2>
            
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join hundreds of restaurants and drivers who are building a better, 
              fairer food delivery ecosystem in their communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Get Early Access
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Schedule a Demo
              </Button>
            </div>
            
            <p className="text-sm opacity-75 pt-4">
              No credit card required • Set up in minutes • Cancel anytime
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
