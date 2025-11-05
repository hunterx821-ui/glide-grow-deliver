import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Zero Platform Fees
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Food Delivery,
              <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Reinvented
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Connect local restaurants directly with delivery drivers. No middleman fees. 
              Fair pay for drivers. Fresh food for your community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary">0%</div>
                <div className="text-sm text-muted-foreground mt-1">Platform Fees</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Fair Earnings</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary">Local</div>
                <div className="text-sm text-muted-foreground mt-1">Community</div>
              </div>
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
            <img 
              src={heroImage} 
              alt="Delicious local restaurant food" 
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
