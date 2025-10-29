import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import kazeCover from "@/assets/kaze-cover.png";
import stravaCover from "@/assets/strava-cover.png";
import mooloCover from "@/assets/moolo-cover.png";
import shelterCover from "@/assets/shelter-cover.png";
import kalakoshaCover from "@/assets/kalakosha-cover.png";
import visualRepCover from "@/assets/visual-rep-cover.png";

const projects = [
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
    id: "kaze-airlines",
    title: "Kaze Airlines Branding",
    description:
      "Designing with intent, blending innovation and aesthetics to create intuitive, user-centered experiences.",
    tags: ["Branding", "Visual Design", "Visual Design"],
    image: kazeCover,
    link: "/project/kaze-airlines",
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
    id: "shelter-to-home",
    title: "Shelter to Home",
    description:
      "Creating a digital platform designed to help animal NGOs boost adoptions, attract volunteers, and secure donations. Through a data-driven approach, it identifies challenges in these areas and provides solutions to bridge the gaps effectively.",
    tags: ["Data Driven UX", "Data Visualization", "Social Design"],
    image: shelterCover,
    link: "/project/shelter-to-home",
  },
  {
    id: "kala-kosha",
    title: "Kala Kosha",
    description:
      "Empowering traditional Indian artisans by providing digital tools to showcase their craft globally, enhancing their reach, recognition, and financial stability.",
    tags: ["Dashboard", "User Interface", "Prototyping"],
    image: kalakoshaCover,
    link: "/project/kala-kosha",
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
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
