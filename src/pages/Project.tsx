import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import kazeProject from "@/assets/kaze-project.png";
import kazeCover from "@/assets/kaze-cover.png";

const projects = [
  {
    id: "kaze-airlines",
    title: "Kaze Airlines branding",
    description:
      "Designing with intent, blending innovation and aesthetics to create intuitive, user-centered experiences.",
    tags: ["Branding", "Visual Design", "Visual Design"],
    coverImage: kazeCover,
    projectImage: kazeProject,
  },
  {
    id: "ecommerce-redesign",
    title: "E-commerce Platform Redesign",
    description: "Transforming the shopping experience with modern UI patterns and seamless checkout flows.",
    tags: ["UI/UX Design", "Research", "Prototyping"],
    coverImage: "/placeholder.svg",
    projectImage: "/placeholder.svg",
  },
  {
    id: "healthcare-app",
    title: "Healthcare Mobile App",
    description: "Empowering patients with easy access to health records and appointment scheduling.",
    tags: ["Mobile Design", "UX Research", "Accessibility"],
    coverImage: "/placeholder.svg",
    projectImage: "/placeholder.svg",
  },
];

export default function Project() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  const otherProjects = projects.filter((p) => p.id !== id);

  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">{project.title}</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="rounded-full"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {/* Full Screen Project Image */}
      <div className="w-full">
        <img
          src={project.projectImage}
          alt={project.title}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* View Other Projects Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">View Other Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {otherProjects.map((otherProject) => (
              <Link
                key={otherProject.id}
                to={`/project/${otherProject.id}`}
                className="group"
              >
                <article className="space-y-6">
                  {/* Project Image */}
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                    <img
                      src={otherProject.coverImage}
                      alt={otherProject.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold leading-tight group-hover:text-primary transition-colors">
                      {otherProject.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {otherProject.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="rounded-full px-4 py-1.5 text-sm border-2 border-foreground"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <p className="text-base text-muted-foreground leading-relaxed">
                      {otherProject.description}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
