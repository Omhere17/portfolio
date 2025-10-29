import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import kazeProject from "@/assets/kaze-project.png";
import kazeCover from "@/assets/kaze-cover.png";
import stravaCover from "@/assets/strava-cover.png";
import stravaIntro from "@/assets/strava-intro.png";
import strava1 from "@/assets/strava-1.png";
import strava2 from "@/assets/strava-2.png";
import strava3 from "@/assets/strava-3.png";
import strava4 from "@/assets/strava-4.png";
import strava5 from "@/assets/strava-5.png";
import stravaLast from "@/assets/strava-1.png";
import mooloCover from "@/assets/moolo-cover.png";
import mooloIntro1 from "@/assets/moolo-intro-1.png";
import mooloIntro2 from "@/assets/moolo-intro-2.png";
import mooloIntro3 from "@/assets/moolo-intro-3.png";
import mooloIntro4 from "@/assets/moolo-intro-4.png";
import mooloIntro5 from "@/assets/moolo-intro-5.png";
import mooloIntro6 from "@/assets/moolo-intro-6.png";
import mooloIntro7 from "@/assets/moolo-intro-7.png";
import mooloIntro8 from "@/assets/moolo-intro-8.png";
import mooloIntro9 from "@/assets/moolo-intro-9.png";
import mooloIntro10 from "@/assets/moolo-intro-10.png";
import mooloFirst from "@/assets/moolo-first.jpg";
import mooloSecond from "@/assets/moolo-second.jpg";
import shelterCover from "@/assets/shelter-cover.png";
import shelterProject from "@/assets/shelter-project.png";
import kalakoshaCover from "@/assets/kalakosha-cover.png";
import kalakoshaProject from "@/assets/kalakosha-project.png";

interface ProjectImage {
  src: string;
  alt: string;
  embedCode?: string;
}

const projects = [
  {
    id: "strava-gamification",
    title: "Gamifying the Strava Experience",
    description:
      "Gamified the Strava app using the Octalysis Framework. Designed and tested UI concepts to boost weak core drives, improving user motivation and engagement.",
    tags: ["UX Research", "UI Design", "Prototyping"],
    coverImage: stravaCover,
    projectImages: [
      {
        src: stravaIntro,
        alt: "Strava gamification introduction",
        embedCode: '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/proto/cSx460aMzQIEwQxc39xJvS/Visual-feedback-mechanism--Toast-Notification-?page-id=0%3A1&node-id=1-70&p=f&viewport=471%2C362%2C0.18&scaling=scale-down&content-scaling=fixed&embed-host=share" allowfullscreen></iframe>',
      },
      {
        src: strava2,
        alt: "Experience Points & Levels",
        embedCode: '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/proto/lzEeKTXYT52Vq7mjWeuX7w/Experience-Points---levels?page-id=0%3A1&node-id=1-176&p=f&viewport=417%2C193%2C0.18&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A176&embed-host=share" allowfullscreen></iframe>',
      },
      {
        src: strava3,
        alt: "Purpose-driven goals",
        embedCode: '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/proto/Xn11zNHVuQ0IoLLC8O0euh/Purpose-Driven-Goals?page-id=0%3A1&node-id=1-55&p=f&viewport=541%2C438%2C0.5&scaling=min-zoom&content-scaling=fixed&embed-host=share" allowfullscreen></iframe>',
      },
      {
        src: strava4,
        alt: "Real-Time Feedback / Audio Feedback",
        embedCode: '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/proto/XpJXSMEs29em0rSDXW72ko/Real-Time-Feedback---Audio-Feedback?page-id=0%3A1&node-id=1-6&p=f&viewport=45%2C201%2C0.32&scaling=min-zoom&content-scaling=fixed&embed-host=share" allowfullscreen></iframe>',
      },
      {
        src: strava5,
        alt: "Badges",
        embedCode: '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/proto/YsgPCUUckvt1mT6WclhoX5/Badges?page-id=0%3A1&node-id=0-228&p=f&viewport=200%2C93%2C0.17&scaling=min-zoom&content-scaling=fixed&embed-host=share" allowfullscreen></iframe>',
      },
      {
        src: stravaLast,
        alt: "Strava gamification summary",
      },
    ] as ProjectImage[],
  },
  {
    id: "moolo-iot",
    title: "IoT-Based Kids Tangible Product",
    description:
      "Iot based interactive device that simplifies complex financial concepts through engaging, hands-on learning.",
    tags: ["Tangible Interaction", "IOT", "Machine learning"],
    coverImage: mooloCover,
    projectImages: [
      {
        src: mooloIntro1,
        alt: "Moolo IoT project overview",
      },
      {
        src: mooloIntro2,
        alt: "Moolo process followed",
      },
      {
        src: mooloIntro3,
        alt: "Moolo desk research statistics",
      },
      {
        src: mooloIntro4,
        alt: "Moolo financial topics taught",
      },
      {
        src: mooloIntro5,
        alt: "Moolo primary research",
      },
      {
        src: mooloIntro6,
        alt: "Moolo personas",
      },
      {
        src: mooloIntro7,
        alt: "Moolo affinity mapping",
      },
      {
        src: mooloIntro8,
        alt: "Moolo problem statement",
      },
      {
        src: mooloIntro9,
        alt: "Moolo early concept",
      },
      {
        src: mooloIntro10,
        alt: "Moolo required components",
      },
      {
        src: mooloIntro10,
        alt: "Moolo video demonstration",
        embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/gi5Yng4cE50?si=q2HzAbma9bGjzdZx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      },
      {
        src: mooloSecond,
        alt: "Moolo product features",
      },
    ] as ProjectImage[],
  },
  {
    id: "kaze-airlines",
    title: "Kaze Airlines branding",
    description:
      "Designing with intent, blending innovation and aesthetics to create intuitive, user-centered experiences.",
    tags: ["Branding", "Visual Design", "Visual Design"],
    coverImage: kazeCover,
    projectImages: [
      {
        src: kazeProject,
        alt: "Kaze Airlines branding",
      },
    ] as ProjectImage[],
  },
  {
    id: "shelter-to-home",
    title: "Shelter to Home",
    description:
      "Creating a digital platform designed to help animal NGOs boost adoptions, attract volunteers, and secure donations. Through a data-driven approach, it identifies challenges in these areas and provides solutions to bridge the gaps effectively.",
    tags: ["Data Driven UX", "Data Visualization", "Social Design"],
    coverImage: shelterCover,
    projectImages: [
      {
        src: shelterProject,
        alt: "Shelter to Home data-driven UX design",
      },
    ] as ProjectImage[],
  },
  {
    id: "kala-kosha",
    title: "Kala Kosha",
    description:
      "Empowering traditional Indian artisans by providing digital tools to showcase their craft globally, enhancing their reach, recognition, and financial stability.",
    tags: ["Dashboard", "User Interface", "Prototyping"],
    coverImage: kalakoshaCover,
    projectImages: [
      {
        src: kalakoshaProject,
        alt: "Kala Kosha artisan dashboard",
      },
    ] as ProjectImage[],
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
      <CustomCursor />
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 py-4 flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="rounded-full"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold absolute left-1/2 -translate-x-1/2">{project.title}</h1>
        </div>
      </nav>

      {/* Project Content */}
      <div className="w-full">
        {project.projectImages.map((image, index) => (
          <div key={index} className="w-full">
            {/* Project Image */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-contain shadow-none"
            />
            
            {/* Figma Embed */}
            {image.embedCode && (
              <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] py-12 bg-muted/20">
                <div 
                  className="w-full h-[80vh]"
                  dangerouslySetInnerHTML={{ 
                    __html: image.embedCode.replace(/width="\d+"/, 'width="100%"').replace(/height="\d+"/, 'height="100%"')
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* View Other Projects Section */}
      <section className="py-20 bg-muted/30 mt-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8 max-w-5xl mx-auto">View Other Projects</h2>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {otherProjects.map((otherProject) => (
                <CarouselItem key={otherProject.id}>
                  <article 
                    className="grid lg:grid-cols-2 gap-8 items-center cursor-pointer"
                    onClick={() => navigate(`/project/${otherProject.id}`)}
                  >
                    {/* Project Image */}
                    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                      <img
                        src={otherProject.coverImage}
                        alt={otherProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Project Details */}
                    <div className="space-y-4">
                      <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <Footer />
    </div>
  );
}
