import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Kaze Airlines branding",
    description: "Designing with intent, blending innovation and aesthetics to create intuitive, user-centered experiences.",
    tags: ["Branding", "Visual Design", "Visual Design"],
    image: "/placeholder.svg",
    link: "#"
  },
  {
    id: 2,
    title: "E-commerce Platform Redesign",
    description: "Transforming the shopping experience with modern UI patterns and seamless checkout flows.",
    tags: ["UI/UX Design", "Research", "Prototyping"],
    image: "/placeholder.svg",
    link: "#"
  },
  {
    id: 3,
    title: "Healthcare Mobile App",
    description: "Empowering patients with easy access to health records and appointment scheduling.",
    tags: ["Mobile Design", "UX Research", "Accessibility"],
    image: "/placeholder.svg",
    link: "#"
  }
];

export const SelectedWorks = () => {
  return (
    <section className="relative min-h-screen py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          {/* Sticky Title - Desktop */}
          <div className="hidden lg:block lg:w-32">
            <div className="sticky top-1/2 -translate-y-1/2">
              <h2 
                className="text-5xl xl:text-6xl font-bold text-muted-foreground/30 whitespace-nowrap origin-center"
                style={{ 
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)'
                }}
              >
                Selected Works
              </h2>
            </div>
          </div>

          {/* Mobile/Tablet Title - Sticky */}
          <div className="lg:hidden sticky top-16 z-10 bg-background/80 backdrop-blur-sm -mx-6 px-6 mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-muted-foreground/30 whitespace-nowrap">
              Selected Works
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="flex-1 space-y-32 lg:space-y-48">
            {projects.map((project) => (
              <article 
                key={project.id} 
                className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16"
              >
                {/* Project Image */}
                <div className="lg:w-1/2">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:w-1/2 space-y-6">
                  <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge 
                        key={index}
                        variant="outline" 
                        className="rounded-full px-4 py-1.5 text-sm border-2 border-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="w-12 h-0.5 bg-foreground" />

                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <a 
                    href={project.link}
                    className="inline-flex items-center gap-2 text-lg font-medium text-primary hover:underline"
                  >
                    View Project 
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
