import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export const DesignPhilosophy = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-8 pb-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Design isn't learned once; it's rediscovered with every new lesson.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-full px-8 py-6 text-base font-medium"
              asChild
            >
              <a href="#work" className="flex items-center gap-2">
                View all work
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-full px-8 py-6 text-base font-medium"
              asChild
            >
              <a href="#about" className="flex items-center gap-2">
                More about me
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
