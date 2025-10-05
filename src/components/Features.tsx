import { Mic, BookOpen, BarChart3, Headphones } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Mic,
    title: "Speaking Practice",
    description: "AI-powered feedback to improve pronunciation and fluency with real-time analysis.",
  },
  {
    icon: BookOpen,
    title: "Mock Tests",
    description: "Real exam-style tests with instant analytics and detailed performance reports.",
  },
  {
    icon: BarChart3,
    title: "AI Band Predictor",
    description: "Smart insights to estimate your IELTS score and identify improvement areas.",
  },
  {
    icon: Headphones,
    title: "One-on-One Tutoring",
    description: "Personalized coaching from certified trainers tailored to your learning needs.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4">
            Why Choose IELTS Mastery?
          </h2>
          <p className="text-lg sm:text-x1 text-muted-foreground max-w-2xl mx-auto">
            Comprehensive features designed to accelerate your IELTS success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
