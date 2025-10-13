import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-16">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-border">
                <img
                  src={profileImage}
                  alt="Om Tiwari - UX Designer"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight whitespace-nowrap">
              Hello! I'm Om Tiwari
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold italic text-primary mb-8 leading-tight">
              A UX Designer
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Designing with intent, blending innovation and aesthetics to create intuitive, user-centered experiences.
              Passionate about using design for social good, currently honing my craft as a UXD student at MIT-SD.
            </p>

            <div className="flex items-center gap-2 mb-8 justify-center lg:justify-start">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <p className="text-base text-foreground">
                Previously at <span className="font-semibold">Antef & Devnco</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-2 border-foreground transition-all duration-300 flex items-center gap-2"
              >
                Selected Works
                <ArrowDown className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-2 border-foreground transition-all duration-300 flex items-center gap-2"
              >
                More about me
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
