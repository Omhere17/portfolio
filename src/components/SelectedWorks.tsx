import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import recovrCover from "@/assets/recovr-cover.png";
import stravaCover from "@/assets/strava-cover.png";
import mooloCover from "@/assets/moolo-cover.png";
import shelterCover from "@/assets/shelter-cover.png";
import eclipseraCover from "@/assets/eclipsera-cover.png";
import visualRepCover from "@/assets/visual-rep-cover.png";

const projects = [
  {
    id: "recovr",
    title: "RecoVr - Healing Phobias through VR",
    description:
      "A Virtual Reality app enabling users to confront and manage their phobias safely at home through immersive exposure therapy experiences.",
    tags: ["Virtual Reality", "Exposure Therapy", "Lean UX"],
    image: recovrCover,
    link: "/project/recovr",
  },
  {
    id: "moolo-iot",
    title: "IoT-Based Kids Tangible Product",
    description:
      "Iot based interactive device that simplifies complex financial concepts through engaging, hands-on learning.",
    tags: ["Tangible Interaction", "IOT", "Machine learning"],
    image: mooloCover,
    link: "/project/moolo-iot",
  },
  {
    id: "strava-gamification",
    title: "Gamifying the Strava Experience",
    description:
      "Gamified the Strava app using the Octalysis Framework. Designed and tested UI concepts to boost weak core drives, improving user motivation and engagement.",
    tags: ["UX Research", "UI Design", "Prototyping"],
    image: stravaCover,
    link: "/project/strava-gamification",
  },
  {
    id: "shelter-to-home",
    title: "Shelter to Home",
    description:
      "Creating a digital platform designed to help animal NGOs boost adoptions, attract volunteers, and secure donations. Through a data-driven approach, it identifies challenges in these areas and provides solutions to bridge the gaps effectively.",
    tags: ["Data Driven UX", "Data Visualization", "Social Design"],
    image: shelterCover,
    link: "/project/shelter-to-home",
  },
  {
    id: "eclipsera",
    title: "Eclipsera - Physical Board Game Design",
    description:
      "A sci-fi adventure board game where two universes collide. Players must close portals, face demons, and defeat a final villain to restore balance through strategic decision-making and suspense.",
    tags: ["Game Design", "Physical Product", "Prototyping"],
    image: eclipseraCover,
    link: "/project/eclipsera",
  },
  {
    id: "visual-representation",
    title: "Visual Representation",
    description:
      "Created a set of illustrations using a consistent set of visual elements to demonstrate how the same components can be rearranged and transformed to produce varied yet thematically linked visuals.",
    tags: ["Illustrations", "Mock Ups", "Semiotics"],
    image: visualRepCover,
    link: "/project/visual-representation",
  },
];

const ProjectImage = ({ src, alt }: { src: string; alt: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!isLoaded && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export const SelectedWorks = () => {
  return (
    <section id="selected-works" className="relative min-h-screen pt-32 lg:pt-48 pb-0">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:gap-6">
          {/* Sticky Title - Desktop */}
          <div className="hidden lg:block lg:w-32">
            <div className="sticky top-1/2 -translate-y-1/2">
              <h2
                className="text-5xl xl:text-6xl font-bold text-muted-foreground/30 whitespace-nowrap origin-center"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                Selected Works
              </h2>
            </div>
          </div>

          {/* Mobile/Tablet Title - Sticky */}
          <div className="lg:hidden sticky top-16 z-10 bg-background/80 backdrop-blur-sm -mx-6 px-7 sm:px-9 py-5 sm:py-7 mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-muted-foreground/30 whitespace-nowrap text-center">
              Selected Works
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="flex-1 space-y-16 sm:space-y-24 lg:space-y-48 pb-[50vh]">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={project.link}
                className="block"
              >
                <article className="flex flex-col lg:flex-row-reverse lg:items-center gap-6 sm:gap-8 lg:gap-16 cursor-pointer group">
                  {/* Project Image */}
                  <div className="lg:w-1/2">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                      <ProjectImage src={project.image} alt={project.title} />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:w-1/2 space-y-4 sm:space-y-6">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap lg:flex-nowrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="rounded-full px-2.5 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm border-2 border-foreground whitespace-nowrap"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="w-12 h-0.5 bg-foreground" />

                    <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">{project.description}</p>

                    <span className="inline-flex items-center gap-2 text-lg font-medium text-primary group-hover:underline">
                      View Project
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
