import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CustomCursor } from "@/components/CustomCursor";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import childhoodImg from "@/assets/about-childhood.png";
import musicImg from "@/assets/about-music.png";
import footballImg from "@/assets/about-football.png";
import guitarImg from "@/assets/about-guitar.png";
import podarLogo from "@/assets/podar-logo.png";
import nowrosjeeLogo from "@/assets/nowrosjee-logo.png";
import mitsdLogo from "@/assets/mitsd-logo-text.png";
const About = () => {
  return <div className="min-h-screen">
      <CustomCursor />
      <Navigation />
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {/* Header Section */}
            <div className="space-y-3 my-0">
              <h1 className="text-3xl font-bold text-primary lg:text-xl italic">
                The Path that Shaped me
              </h1>
              
              <p className="text-lg leading-relaxed mx-0 my-0 font-semibold text-foreground lg:text-2xl">
                Namaste! My name is Om, and I was born and raised in Pune, India. I am 
                exploring the vast field of UX design while aligning my interests with the evolving 
                needs of the industry.
              </p>
            </div>

            {/* Image Gallery */}
            <div className="flex justify-center items-center py-8 w-full">
              <div className="flex items-center justify-between w-full max-w-6xl -space-x-16 lg:-space-x-24">
                <div className="relative w-[240px] h-[240px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden group cursor-pointer transition-transform duration-500 hover:z-10 hover:scale-110">
                  <img src={childhoodImg} alt="Childhood" className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" />
                </div>
                
                <div className="relative w-[240px] h-[240px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden group cursor-pointer transition-transform duration-500 hover:z-10 hover:scale-110">
                  <img src={musicImg} alt="Music and Art" className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" />
                </div>
                
                <div className="relative w-[240px] h-[240px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden group cursor-pointer transition-transform duration-500 hover:z-10 hover:scale-110">
                  <img src={footballImg} alt="Football" className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" />
                </div>
                
                <div className="relative w-[240px] h-[240px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden group cursor-pointer transition-transform duration-500 hover:z-10 hover:scale-110">
                  <img src={guitarImg} alt="Guitar and Music" className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" />
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="space-y-6 text-base lg:text-lg leading-relaxed text-foreground/90">
              <p className="text-lg">
                My journey in the creative field began when my mother enrolled me in an art class during my early school years. Art was 
                something I enjoyed back then, but as time passed, my interests evolved. I became deeply involved in sports, 
                especially football, and discovered a passion for all kinds of music, even exploring DJing and cars.
              </p>
              
              <p className="text-lg">
                Throughout my school years, I represented my school in various interschool 
                football tournaments, becoming a dedicated fan of the game. If you showed me 
                all the assists that Mesut Özil made in his career, I'd watch them on repeat—his 
                playmaking inspired me tremendously. Despite my wide range of interests, I hadn't 
                yet considered a career in creative fields.
              </p>
              
              <p className="text-lg">
                It was one fine day that my brother introduced me to the world of design. Since 
                then, I've been exploring design, with a growing focus on projects that make a 
                social impact. Reflecting on this journey, I've realized that everything I did as a kid, 
                has helped me in unexpected ways. This path has become more than a career; 
                it's a way for me to give back and make a difference.
              </p>
            </div>

            {/* Education Section */}
            <div className="space-y-6 pt-12">
              <h2 className="text-3xl font-bold text-primary lg:text-4xl">
                Education
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                {/* Podar International School */}
                <AccordionItem value="podar" className="border-b border-border/50">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 flex-1 text-left">
                      <div className="flex items-center gap-4 md:gap-6">
                        <img src={podarLogo} alt="Podar International School" className="w-16 h-16 object-contain flex-shrink-0" />
                        <span className="text-base font-medium text-foreground md:hidden md:text-lg whitespace-nowrap">
                          Podar International School, Pimpri
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 md:pr-4">
                        <span className="hidden md:block text-lg font-medium text-foreground">
                          Podar International School, Pimpri
                        </span>
                        <div className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-foreground/80 whitespace-nowrap">
                          <span className="text-base md:text-lg font-medium">Schooling</span>
                          <span className="text-border">|</span>
                          <span className="text-base md:text-lg font-medium">ICSE</span>
                          <span className="text-border">|</span>
                          <span className="text-gray-500">2008-2019</span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 gap-12 pt-4 pb-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-4 text-foreground">Achievements</h3>
                        <ul className="space-y-2 text-foreground/80">
                          <li>School Football Team Captain</li>
                          <li>Inter-school Football Tournaments Representative</li>
                          <li>Art Exhibition Participant</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-4 text-foreground">Extra Curricular Activites</h3>
                        <ul className="space-y-2 text-foreground/80">
                          <li>School Football Team</li>
                          <li>Art Classes and Exhibitions</li>
                          <li>Music and DJing Exploration</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Nowrosjee Wadia College */}
                <AccordionItem value="nowrosjee" className="border-b border-border/50">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 flex-1 text-left">
                      <div className="flex items-center gap-4 md:gap-6">
                        <img src={nowrosjeeLogo} alt="Nowrosjee Wadia College" className="w-16 h-16 object-contain flex-shrink-0" />
                        <span className="text-base font-medium text-foreground md:hidden md:text-lg whitespace-nowrap">
                          Nowrosjee Wadia College, Pune
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 md:pr-4">
                        <span className="hidden md:block text-lg font-medium text-foreground">
                          Nowrosjee Wadia College, Pune
                        </span>
                        <div className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-foreground/80 whitespace-nowrap">
                          <span className="text-base md:text-lg font-medium">10+2 Certification</span>
                          <span className="text-border">|</span>
                          <span className="text-base md:text-lg font-medium">HSE</span>
                          <span className="text-border">|</span>
                          <span className="text-gray-500">2019-2021</span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 gap-12 pt-4 pb-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-4 text-foreground">Achievements</h3>
                        <ul className="space-y-2 text-foreground/80">
                          <li>HSC Board Examination Excellence</li>
                          <li>Academic Foundation in Sciences</li>
                          <li>College Sports Representative</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-4 text-foreground">Extra Curricular Activites</h3>
                        <ul className="space-y-2 text-foreground/80">
                          <li>College Football Team</li>
                          <li>Music and Arts Pursuit</li>
                          <li>Community Sports Events</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* MITAOE */}
                <AccordionItem value="mitaoe" className="border-b border-border/50">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 flex-1 text-left">
                      <div className="flex items-center gap-4 md:gap-6">
                        <img src={mitsdLogo} alt="MITAOE School of Design" className="w-16 h-16 object-contain flex-shrink-0" />
                        <span className="text-base font-medium text-foreground md:hidden md:text-lg whitespace-nowrap">
                          MITAOE - School of Design, Pune
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 md:pr-4">
                        <span className="hidden md:block text-lg font-medium text-foreground">
                          MITAOE - School of Design, Pune
                        </span>
                        <div className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-foreground/80 whitespace-nowrap">
                          <span className="text-base md:text-lg font-medium">Bachelor's Degree</span>
                          <span className="text-border">|</span>
                          <span className="text-base md:text-lg font-medium">Bdes Ux Design</span>
                          <span className="text-border">|</span>
                          <span className="text-gray-500">2021-2025</span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 gap-12 pt-4 pb-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-4 text-foreground">Achievements</h3>
                        <ul className="space-y-2 text-foreground/80">
                          <li>College Academic Merit, 3rd Rank UX Design (2nd Year)</li>
                          <li>College Academic Merit, 3rd Rank UX Design (3rd Year)</li>
                          <li>Zonal Representative, Aaviskar 2024 - Research Competition</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-4 text-foreground">Extra Curricular Activites</h3>
                        <ul className="space-y-2 text-foreground/80">
                          <li>Google Developers Group oncampus MITAOE, Creative Lead</li>
                          <li>NASA Space Apps Challenge, Visual Designer</li>
                          <li>Departmental Sports</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ThemeToggle />
    </div>;
};
export default About;