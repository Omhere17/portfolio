import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const DesignPhilosophy = () => {
  const scrollToWorks = () => {
    const worksSection = document.getElementById("selected-works");
    worksSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative flex items-center justify-center pt-0 pb-8 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fade-in">
            Design isn't learned once; it's rediscovered with every new lesson.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:scale-105"
              onClick={scrollToWorks}
            >
              View all work
              <ArrowUpRight className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/about" className="flex items-center gap-2">
                More about me
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
