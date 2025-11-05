import { ScrollReveal } from "@/components/ScrollReveal";
import { Heart, MapPin, Leaf } from "lucide-react";
import communityImage from "@/assets/community.jpg";

const values = [
  {
    icon: Heart,
    title: "Community First",
    description: "Every transaction strengthens local businesses and keeps money in your neighborhood.",
  },
  {
    icon: MapPin,
    title: "Locally Focused",
    description: "We connect you with restaurants and drivers in your immediate area.",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    description: "Shorter delivery distances mean less environmental impact and fresher food.",
  },
];

export const Community = () => {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <ScrollReveal animation="slide-in-left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-3xl blur-2xl" />
              <img 
                src={communityImage} 
                alt="Community of restaurant owners and delivery drivers"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </ScrollReveal>
          
          {/* Right - Content */}
          <div className="space-y-8">
            <ScrollReveal animation="fade-up">
              <h2 className="text-4xl sm:text-5xl font-bold">
                Built for Your
                <span className="block mt-2 text-primary">Community</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={100}>
              <p className="text-lg text-muted-foreground">
                We believe in empowering local businesses and creating opportunities 
                for independent workers. Our platform is designed to keep communities 
                thriving by eliminating unnecessary middlemen.
              </p>
            </ScrollReveal>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <ScrollReveal key={index} animation="fade-up" delay={200 + index * 100}>
                  <div className="flex gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
