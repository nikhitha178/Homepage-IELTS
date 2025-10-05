import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Patel",
    score: "Band 8",
    text: "The mock tests felt exactly like the real IELTS exam! I scored Band 8 and got into my dream university.",
    avatar: "AP",
  },
  {
    name: "Sofia Rahman",
    score: "Band 7.5",
    text: "Amazing trainers and easy-to-use platform. The personalized feedback helped me improve significantly. Highly recommended!",
    avatar: "SR",
  },
  {
    name: "Karan Mehta",
    score: "Band 8.5",
    text: "The AI feedback helped me improve my speaking fluency within weeks. The one-on-one sessions were game-changing!",
    avatar: "KM",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-6xl lg:text-5x1 font-bold text-foreground mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg sm:text-x1 text-muted-foreground max-w-3xl mx-auto">
            Join thousands of students who achieved their target IELTS score
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <Quote className="w-8 h-8 text-primary/30 flex-shrink-0" />
                </div>
                <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.score}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
