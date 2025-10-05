import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end pt-1">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="IELTS students" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/40 to-blue-900/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-8xl px-6 sm:px-12 mx-auto flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl sm:text-4xl font-bold text-white mb-6 leading-tight">
          Achieve Your Dream IELTS with Confidence
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-8">
          Expert trainers, personalized feedback, and AI-assisted learning — all designed to help you reach your target faster.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-4 shadow-2xl hover:shadow-xl">
            Join Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-4 bg-white hover:bg-secondary"
            onClick={() => scrollToSection("demo")}
          >
            Book a Free Demo
          </Button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 bg-white py-10 shadow-lg">
        <div className="container mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-3 gap-12 text-center">
            <div className="animate-slide-up">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm sm:text-base text-muted-foreground font-medium">Expert Mentors</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-sm sm:text-base text-muted-foreground font-medium">Students Globally</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm sm:text-base text-muted-foreground font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
