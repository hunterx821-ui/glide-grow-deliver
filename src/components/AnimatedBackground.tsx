import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const AnimatedBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity and position based on scroll
  const opacity = Math.max(0.3, 1 - scrollY / 1000);
  const translateY = scrollY * 0.3;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated morphing gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-animate"
        style={{
          opacity,
          transform: `translateY(${translateY}px)`,
        }}
      />
      
      {/* Floating gradient orbs with parallax */}
      <div 
        className="absolute top-20 -left-20 w-[500px] h-[500px] bg-gradient-radial from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl animate-float-slow"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />
      
      <div 
        className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-gradient-radial from-secondary/20 via-secondary/10 to-transparent rounded-full blur-3xl animate-float-slower"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`,
          animationDelay: "2s",
        }}
      />
      
      <div 
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-accent/20 via-accent/10 to-transparent rounded-full blur-3xl animate-float-slow"
        style={{
          transform: `translateY(${-scrollY * 0.25}px)`,
          animationDelay: "4s",
        }}
      />

      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 bg-grain opacity-[0.03]" />
    </div>
  );
};
