import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CustomCursor } from "@/components/CustomCursor";
import { TrustedBy } from "@/components/TrustedBy";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InterestsCarousel } from "@/components/InterestsCarousel";
import { useState } from "react";
import childhoodImg from "@/assets/about-childhood.png";
import musicImg from "@/assets/about-music.png";
import footballImg from "@/assets/about-football.png";
import guitarImg from "@/assets/about-guitar.png";
import podarLogo from "@/assets/podar-logo.png";
import nowrosjeeLogo from "@/assets/nowrosjee-logo.png";
import mitsdLogo from "@/assets/mitsd-logo-text.png";
import devncoLogo from "@/assets/devnco-logo.png";
import antefLogo from "@/assets/antef-logo.png";
import ystocxxLogo from "@/assets/ystocxx-logo.png";
import interestPottery from "@/assets/interest-pottery.png";
import interestMeditation from "@/assets/interest-meditation.png";
import interestWoodwork from "@/assets/interest-woodwork.png";
import interestFootballTeam from "@/assets/interest-football-team.png";
import interestGuitar from "@/assets/interest-guitar.png";
import interestFootballAction from "@/assets/interest-football-action.png";
import interestFootballField from "@/assets/interest-football-field.png";
import gdgLogo from "@/assets/gdg-logo.png";
import nasaSpaceAppsLogo from "@/assets/nasa-space-apps-logo.png";
import zestrixLogo from "@/assets/zestrix-logo.jpg";
import figmaLight from "@/assets/figma-light.png";
import photoshopLight from "@/assets/photoshop-light.png";
import illustratorLight from "@/assets/illustrator-light.png";
import afterEffectsLight from "@/assets/after-effects-light.png";
import premiereLight from "@/assets/premiere-light.png";
import notionLight from "@/assets/notion-light.png";
import miroLight from "@/assets/miro-light.png";
import unityLight from "@/assets/unity-light.png";
import tableauLight from "@/assets/tableau-light.png";
import webflowLight from "@/assets/webflow-light.png";
import figmaHover from "@/assets/figma-hover.png";
import photoshopHover from "@/assets/photoshop-hover.png";
import illustratorHover from "@/assets/illustrator-hover.png";
import afterEffectsHover from "@/assets/after-effects-hover.png";
import premiereHover from "@/assets/premiere-hover.png";
import notionHover from "@/assets/notion-hover.png";
import miroHover from "@/assets/miro-hover.png";
import unityHover from "@/assets/unity-hover.png";
import tableauHover from "@/assets/tableau-hover.png";
import webflowHover from "@/assets/webflow-hover.png";
const About = () => {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);
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
              <h2 className="text-3xl font-bold text-black lg:text-4xl">
                Education
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                {/* MITAOE */}
                <AccordionItem value="mitaoe" className="border-b border-border/50">
                  <AccordionTrigger className="hover:no-underline py-6 transition-all duration-300 hover:scale-[1.02] hover:bg-muted data-[state=open]:bg-muted rounded-lg px-4">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 flex-1 text-left">
                      <div className="flex items-center gap-4 lg:gap-6">
                        <img src={mitsdLogo} alt="MITAOE School of Design" className="w-12 h-12 lg:w-16 lg:h-16 object-contain flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300" />
                        <span className="text-sm md:text-lg font-medium text-foreground lg:hidden lg:text-xl whitespace-nowrap">
                          MITAOE - School of Design
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-4 lg:pr-4">
                        <span className="hidden lg:block text-xl font-medium text-foreground">
                          MITAOE - School of Design
                        </span>
                        <div className="flex items-center gap-3 text-sm lg:text-base text-foreground/80 flex-wrap">
                          <div className="flex items-center gap-3 whitespace-nowrap">
                            <span className="text-base md:text-lg lg:text-lg font-medium">Bachelor's Degree</span>
                            <span className="text-border">|</span>
                            <span className="text-base md:text-lg lg:text-lg font-medium">Bdes - Ux Design</span>
                          </div>
                          <span className="text-border hidden lg:inline">|</span>
                          <div className="flex items-center gap-3">
                            <span className="text-gray-500">Pune</span>
                            <span className="text-border">|</span>
                            <span className="text-gray-500">2021-2026</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 gap-12 pt-4 pb-6 px-4">
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

                {/* Nowrosjee Wadia College */}
                <AccordionItem value="nowrosjee" className="border-b border-border/50">
                  <AccordionTrigger className="hover:no-underline py-6 transition-all duration-300 hover:scale-[1.02] hover:bg-muted data-[state=open]:bg-muted rounded-lg px-4">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 flex-1 text-left">
                      <div className="flex items-center gap-4 lg:gap-6">
                        <img src={nowrosjeeLogo} alt="Nowrosjee Wadia College" className="w-12 h-12 lg:w-16 lg:h-16 object-contain flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300" />
                        <span className="text-sm md:text-lg font-medium text-foreground lg:hidden lg:text-xl whitespace-nowrap">
                          Nowrosjee Wadia College
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-4 lg:pr-4">
                        <span className="hidden lg:block text-xl font-medium text-foreground">
                          Nowrosjee Wadia College
                        </span>
                        <div className="flex items-center gap-3 text-sm lg:text-base text-foreground/80 flex-wrap">
                          <div className="flex items-center gap-3 whitespace-nowrap">
                            <span className="text-base md:text-lg lg:text-lg font-medium">10+2 Certification</span>
                            <span className="text-border">|</span>
                            <span className="text-base md:text-lg lg:text-lg font-medium">HSE - Science</span>
                          </div>
                          <span className="text-border hidden lg:inline">|</span>
                          <div className="flex items-center gap-3">
                            <span className="text-gray-500">Pune</span>
                            <span className="text-border">|</span>
                            <span className="text-gray-500">2019-2021</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 gap-12 pt-4 pb-6 px-4">
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

                {/* Podar International School */}
                <AccordionItem value="podar" className="border-b border-border/50">
                  <AccordionTrigger className="hover:no-underline py-6 transition-all duration-300 hover:scale-[1.02] hover:bg-muted data-[state=open]:bg-muted rounded-lg px-4">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 flex-1 text-left">
                      <div className="flex items-center gap-4 lg:gap-6">
                        <img src={podarLogo} alt="Podar International School" className="w-12 h-12 lg:w-16 lg:h-16 object-contain flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300" />
                        <span className="text-sm md:text-lg font-medium text-foreground lg:hidden lg:text-xl whitespace-nowrap">
                          Podar International School
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-4 lg:pr-4">
                        <span className="hidden lg:block text-xl font-medium text-foreground">
                          Podar International School
                        </span>
                        <div className="flex items-center gap-3 text-sm lg:text-base text-foreground/80 flex-wrap">
                          <div className="flex items-center gap-3 whitespace-nowrap">
                            <span className="text-base md:text-lg lg:text-lg font-medium">10th Grade</span>
                            <span className="text-border">|</span>
                            <span className="text-base md:text-lg lg:text-lg font-medium">ICSE</span>
                          </div>
                          <span className="text-border hidden lg:inline">|</span>
                          <div className="flex items-center gap-3">
                            <span className="text-gray-500">Pimpri</span>
                            <span className="text-border">|</span>
                            <span className="text-gray-500">2007-2019</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 gap-12 pt-4 pb-6 px-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-4 text-foreground">Achievements</h3>
                        <ul className="space-y-2 text-foreground/80">
                          <li>School Football Team Captain</li>
                          <li>Inter-school Football Tournaments Representative</li>
                          <li>Academic Excellence Awards</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-4 text-foreground">Extra Curricular Activites</h3>
                        <ul className="space-y-2 text-foreground/80">
                          <li>School Football Team</li>
                          <li>Art Classes and Creative Pursuits</li>
                          <li>Music and Sports Activities</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Experience Section */}
            <div className="space-y-6 pt-12">
              <h2 className="text-3xl font-bold text-black lg:text-4xl">Work Experience</h2>
              
              <Accordion type="single" collapsible className="w-full">
                {/* Antef */}
                <AccordionItem value="antef" className="border-b border-border/50">
                  <AccordionTrigger className="hover:no-underline py-6 transition-all duration-300 hover:scale-[1.02] hover:bg-muted data-[state=open]:bg-muted rounded-lg px-4">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 flex-1 text-left">
                      <div className="flex items-center gap-4 lg:gap-6">
                        <img src={antefLogo} alt="Antef" className="w-12 h-12 lg:w-16 lg:h-16 object-contain flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300" />
                        <span className="text-sm md:text-lg font-medium text-foreground lg:hidden lg:text-xl whitespace-nowrap">
                          Antef
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-4 lg:pr-4">
                        <span className="hidden lg:block text-xl font-medium text-foreground">
                          Antef
                        </span>
                        <div className="flex items-center gap-3 text-sm lg:text-base text-foreground/80 flex-wrap">
                          <div className="flex items-center gap-3 whitespace-nowrap">
                            <span className="text-base md:text-lg lg:text-lg font-medium">UX Design Intern</span>
                            <span className="text-border">|</span>
                            <span className="text-base md:text-lg lg:text-lg font-medium">Full-time</span>
                          </div>
                          <span className="text-border hidden lg:inline">|</span>
                          <div className="flex items-center gap-3">
                            <span className="text-gray-500">Remote</span>
                            <span className="text-border">|</span>
                            <span className="text-gray-500">June 2025 - Sept 2025</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-4 pb-6 px-4">
                      <p className="text-foreground/80 text-lg leading-relaxed">
                        Redesigned the Geodit mobile app by evaluating user experience and use cases. Collaborated directly with the CEO to align product vision and with developers to ensure a smooth developer handoff.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Devnco Technologies */}
                <AccordionItem value="devnco" className="border-b border-border/50">
                  <AccordionTrigger className="hover:no-underline py-6 transition-all duration-300 hover:scale-[1.02] hover:bg-muted data-[state=open]:bg-muted rounded-lg px-4">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 flex-1 text-left">
                      <div className="flex items-center gap-4 lg:gap-6">
                        <img src={devncoLogo} alt="Devnco Technologies" className="w-12 h-12 lg:w-16 lg:h-16 object-contain flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300" />
                        <span className="text-sm md:text-lg font-medium text-foreground lg:hidden lg:text-xl whitespace-nowrap">
                          Devnco Technologies
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-4 lg:pr-4">
                        <span className="hidden lg:block text-xl font-medium text-foreground">
                          Devnco Technologies
                        </span>
                        <div className="flex items-center gap-3 text-sm lg:text-base text-foreground/80 flex-wrap">
                          <div className="flex items-center gap-3 whitespace-nowrap">
                            <span className="text-base md:text-lg lg:text-lg font-medium">UX Design Intern</span>
                            <span className="text-border">|</span>
                            <span className="text-base md:text-lg lg:text-lg font-medium">Part-time</span>
                          </div>
                          <span className="text-border hidden lg:inline">|</span>
                          <div className="flex items-center gap-3">
                            <span className="text-gray-500">On-site</span>
                            <span className="text-border">|</span>
                            <span className="text-gray-500">Nov 2024 - Apr 2025</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-4 pb-6 px-4">
                      <p className="text-foreground/80 text-lg leading-relaxed">
                        Designed responsive website UI/UX (IA, flows, wireframes) with smooth developer handoff, and created product brochure for Enviro Genesis.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Zestrix Solutions */}
                <AccordionItem value="zestrix" className="border-b border-border/50">
                  <AccordionTrigger className="hover:no-underline py-6 transition-all duration-300 hover:scale-[1.02] hover:bg-muted data-[state=open]:bg-muted rounded-lg px-4">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 flex-1 text-left">
                      <div className="flex items-center gap-4 lg:gap-6">
                        <img src={zestrixLogo} alt="Zestrix Solutions" className="w-12 h-12 lg:w-16 lg:h-16 object-contain flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300" />
                        <span className="text-sm md:text-lg font-medium text-foreground lg:hidden lg:text-xl whitespace-nowrap">
                          Zestrix Solutions
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-4 lg:pr-4">
                        <span className="hidden lg:block text-xl font-medium text-foreground">
                          Zestrix Solutions
                        </span>
                        <div className="flex items-center gap-3 text-sm lg:text-base text-foreground/80 flex-wrap">
                          <div className="flex items-center gap-3 whitespace-nowrap">
                            <span className="text-base md:text-lg lg:text-lg font-medium">Visual Design Intern</span>
                            <span className="text-border">|</span>
                            <span className="text-base md:text-lg lg:text-lg font-medium">Part-time</span>
                          </div>
                          <span className="text-border hidden lg:inline">|</span>
                          <div className="flex items-center gap-3">
                            <span className="text-gray-500">On-site</span>
                            <span className="text-border">|</span>
                            <span className="text-gray-500">Mar 2024 - Jun 2024</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-4 pb-6 px-4">
                      <p className="text-foreground/80 text-lg leading-relaxed">
                        Created poster designs with strong visual hierarchy. Used Photoshop and Illustrator for editing, layout, and asset optimization.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Ystocxx */}
                <AccordionItem value="ystocxx" className="border-b border-border/50">
                  <AccordionTrigger className="hover:no-underline py-6 transition-all duration-300 hover:scale-[1.02] hover:bg-muted data-[state=open]:bg-muted rounded-lg px-4">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 flex-1 text-left">
                      <div className="flex items-center gap-4 lg:gap-6">
                        <img src={ystocxxLogo} alt="Ystocxx" className="w-12 h-12 lg:w-16 lg:h-16 object-contain flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300" />
                        <span className="text-sm md:text-lg font-medium text-foreground lg:hidden lg:text-xl whitespace-nowrap">
                          Ystocxx
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-4 lg:pr-4">
                        <span className="hidden lg:block text-xl font-medium text-foreground">
                          Ystocxx
                        </span>
                        <div className="flex items-center gap-3 text-sm lg:text-base text-foreground/80 flex-wrap">
                          <div className="flex items-center gap-3 whitespace-nowrap">
                            <span className="text-base md:text-lg lg:text-lg font-medium">UX Designer</span>
                            <span className="text-border">|</span>
                            <span className="text-base md:text-lg lg:text-lg font-medium">Part-time</span>
                          </div>
                          <span className="text-border hidden lg:inline">|</span>
                          <div className="flex items-center gap-3">
                            <span className="text-gray-500">Hybrid</span>
                            <span className="text-border">|</span>
                            <span className="text-gray-500">Feb 2024 - June 2024</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-4 pb-6 px-4">
                      <p className="text-foreground/80 text-lg leading-relaxed">
                        Collaborated with IIT Madras student's startup to design the initial UI by discussing user scenarios with stakeholders and created pitch decks to support their vision.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Interests in Focus Section */}
            <div className="space-y-6 pt-12 py-[29px]">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center my-[6px]">
                {/* Text Content */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-black lg:text-4xl">
                    Interests in focus
                  </h2>
                  
                  <div className="space-y-4 text-base lg:text-lg leading-relaxed text-foreground/90 max-w-md">
                    <p>I am an avid football player who loves to sketch, meditate, listen to and occasionally mix music, play the guitar, and explore photography. I have recently picked up chess and enjoy the challenge it brings.

I am enthusiastic about learning new things and understanding the science behind them.</p>
                  </div>
                </div>

                {/* Carousel with Overlapping Images */}
                <div className="relative">
                  <InterestsCarousel images={[{
                  src: interestPottery,
                  alt: "Pottery"
                }, {
                  src: interestMeditation,
                  alt: "Meditation"
                }, {
                  src: interestWoodwork,
                  alt: "Woodwork"
                }, {
                  src: interestFootballTeam,
                  alt: "Football Team"
                }, {
                  src: interestGuitar,
                  alt: "Guitar"
                }, {
                  src: interestFootballAction,
                  alt: "Football Action"
                }, {
                  src: interestFootballField,
                  alt: "Football Field"
                }]} />
                </div>
              </div>
            </div>

            {/* Digital Tools Proficiency Section */}
            <div className="space-y-8 pt-12">
              <h2 className="text-3xl font-bold text-black lg:text-4xl">
                Digital Tools Proficiency
              </h2>
              
              <div className="space-y-4 max-w-6xl">
                {/* Top Row - 5 logos */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                  {/* Figma */}
                  <div 
                    className="flex flex-col items-center justify-center gap-3 p-6 rounded-lg bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700/50 transition-all duration-300 group cursor-pointer"
                    onMouseEnter={() => setHoveredLogo('figma')}
                    onMouseLeave={() => setHoveredLogo(null)}
                  >
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img 
                        src={hoveredLogo === 'figma' ? figmaHover : figmaLight} 
                        alt="Figma" 
                        className="w-full h-full object-contain transition-all duration-300" 
                      />
                    </div>
                    <span className="text-xs font-medium text-foreground text-center">Figma</span>
                  </div>

                  {/* Photoshop */}
                  <div 
                    className="flex flex-col items-center justify-center gap-3 p-6 rounded-lg bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700/50 transition-all duration-300 group cursor-pointer"
                    onMouseEnter={() => setHoveredLogo('photoshop')}
                    onMouseLeave={() => setHoveredLogo(null)}
                  >
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img 
                        src={hoveredLogo === 'photoshop' ? photoshopHover : photoshopLight} 
                        alt="Adobe Photoshop" 
                        className="w-full h-full object-contain transition-all duration-300" 
                      />
                    </div>
                    <span className="text-xs font-medium text-foreground text-center">Photoshop</span>
                  </div>

                  {/* Illustrator */}
                  <div 
                    className="flex flex-col items-center justify-center gap-3 p-6 rounded-lg bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700/50 transition-all duration-300 group cursor-pointer"
                    onMouseEnter={() => setHoveredLogo('illustrator')}
                    onMouseLeave={() => setHoveredLogo(null)}
                  >
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img 
                        src={hoveredLogo === 'illustrator' ? illustratorHover : illustratorLight} 
                        alt="Adobe Illustrator" 
                        className="w-full h-full object-contain transition-all duration-300" 
                      />
                    </div>
                    <span className="text-xs font-medium text-foreground text-center">Illustrator</span>
                  </div>

                  {/* After Effects */}
                  <div 
                    className="flex flex-col items-center justify-center gap-3 p-6 rounded-lg bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700/50 transition-all duration-300 group cursor-pointer"
                    onMouseEnter={() => setHoveredLogo('aftereffects')}
                    onMouseLeave={() => setHoveredLogo(null)}
                  >
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img 
                        src={hoveredLogo === 'aftereffects' ? afterEffectsHover : afterEffectsLight} 
                        alt="Adobe After Effects" 
                        className="w-full h-full object-contain transition-all duration-300" 
                      />
                    </div>
                    <span className="text-xs font-medium text-foreground text-center">After Effects</span>
                  </div>

                  {/* Premiere Pro */}
                  <div 
                    className="flex flex-col items-center justify-center gap-3 p-6 rounded-lg bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700/50 transition-all duration-300 group cursor-pointer"
                    onMouseEnter={() => setHoveredLogo('premiere')}
                    onMouseLeave={() => setHoveredLogo(null)}
                  >
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img 
                        src={hoveredLogo === 'premiere' ? premiereHover : premiereLight} 
                        alt="Adobe Premiere Pro" 
                        className="w-full h-full object-contain transition-all duration-300" 
                      />
                    </div>
                    <span className="text-xs font-medium text-foreground text-center">Premiere Pro</span>
                  </div>
                </div>

                {/* Bottom Row - 5 logos */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                  {/* Notion */}
                  <div 
                    className="flex flex-col items-center justify-center gap-3 p-6 rounded-lg bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700/50 transition-all duration-300 group cursor-pointer"
                    onMouseEnter={() => setHoveredLogo('notion')}
                    onMouseLeave={() => setHoveredLogo(null)}
                  >
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img 
                        src={hoveredLogo === 'notion' ? notionHover : notionLight} 
                        alt="Notion" 
                        className="w-full h-full object-contain transition-all duration-300" 
                      />
                    </div>
                    <span className="text-xs font-medium text-foreground text-center">Notion</span>
                  </div>

                  {/* Miro */}
                  <div 
                    className="flex flex-col items-center justify-center gap-3 p-6 rounded-lg bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700/50 transition-all duration-300 group cursor-pointer"
                    onMouseEnter={() => setHoveredLogo('miro')}
                    onMouseLeave={() => setHoveredLogo(null)}
                  >
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img 
                        src={hoveredLogo === 'miro' ? miroHover : miroLight} 
                        alt="Miro" 
                        className="w-full h-full object-contain transition-all duration-300" 
                      />
                    </div>
                    <span className="text-xs font-medium text-foreground text-center">Miro</span>
                  </div>

                  {/* Unity */}
                  <div 
                    className="flex flex-col items-center justify-center gap-3 p-6 rounded-lg bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700/50 transition-all duration-300 group cursor-pointer"
                    onMouseEnter={() => setHoveredLogo('unity')}
                    onMouseLeave={() => setHoveredLogo(null)}
                  >
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img 
                        src={hoveredLogo === 'unity' ? unityHover : unityLight} 
                        alt="Unity" 
                        className="w-full h-full object-contain transition-all duration-300" 
                      />
                    </div>
                    <span className="text-xs font-medium text-foreground text-center">Unity</span>
                  </div>

                  {/* Tableau */}
                  <div 
                    className="flex flex-col items-center justify-center gap-3 p-6 rounded-lg bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700/50 transition-all duration-300 group cursor-pointer"
                    onMouseEnter={() => setHoveredLogo('tableau')}
                    onMouseLeave={() => setHoveredLogo(null)}
                  >
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img 
                        src={hoveredLogo === 'tableau' ? tableauHover : tableauLight} 
                        alt="Tableau" 
                        className="w-full h-full object-contain transition-all duration-300" 
                      />
                    </div>
                    <span className="text-xs font-medium text-foreground text-center">Tableau</span>
                  </div>

                  {/* Webflow */}
                  <div 
                    className="flex flex-col items-center justify-center gap-3 p-6 rounded-lg bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700/50 transition-all duration-300 group cursor-pointer"
                    onMouseEnter={() => setHoveredLogo('webflow')}
                    onMouseLeave={() => setHoveredLogo(null)}
                  >
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img 
                        src={hoveredLogo === 'webflow' ? webflowHover : webflowLight} 
                        alt="Webflow" 
                        className="w-full h-full object-contain transition-all duration-300" 
                      />
                    </div>
                    <span className="text-xs font-medium text-foreground text-center">Webflow</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Extracurriculars & Volunteering Section */}
            <div className="space-y-6 pt-20 pb-4">
              <h2 className="text-3xl font-bold text-black lg:text-4xl">Extracurriculars & Volunteering</h2>
              
              <Accordion type="single" collapsible className="w-full">
                {/* GDG on campus MITAOE */}
                <AccordionItem value="gdg" className="border-b border-border/50">
                  <AccordionTrigger className="hover:no-underline py-6 transition-all duration-300 hover:scale-[1.02] hover:bg-muted data-[state=open]:bg-muted rounded-lg px-4">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 flex-1 text-left">
                      <div className="flex items-center gap-4 lg:gap-6">
                        <img src={gdgLogo} alt="GDG on campus MITAOE" className="w-12 h-12 lg:w-16 lg:h-16 object-contain flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300" />
                        <span className="text-sm md:text-lg font-medium text-foreground lg:hidden lg:text-xl whitespace-nowrap">
                          GDG on campus MITAOE
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-4 lg:pr-4">
                        <span className="hidden lg:block text-xl font-medium text-foreground">
                          GDG on campus MITAOE
                        </span>
                        <div className="flex items-center gap-3 text-sm lg:text-base text-foreground/80 flex-wrap">
                          <div className="flex items-center gap-3 whitespace-nowrap">
                            <span className="text-base md:text-lg lg:text-lg font-medium">Creative Lead</span>
                            <span className="text-border">|</span>
                            <span className="text-base md:text-lg lg:text-lg font-medium">Part-time</span>
                          </div>
                          <span className="text-border hidden lg:inline">|</span>
                          <div className="flex items-center gap-3">
                            <span className="text-gray-500">Hybrid</span>
                            <span className="text-border">|</span>
                            <span className="text-gray-500">Oct 2025 - Present</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-4 pb-6 px-4">
                      <p className="text-foreground/80 text-lg leading-relaxed">
                        Led creative initiatives for GDG on campus MITAOE, managing visual design and branding efforts for various technical events and community programs.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* NASA Space Apps Challenge */}
                <AccordionItem value="nasa" className="border-b border-border/50">
                  <AccordionTrigger className="hover:no-underline py-6 transition-all duration-300 hover:scale-[1.02] hover:bg-muted data-[state=open]:bg-muted rounded-lg px-4">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 flex-1 text-left">
                      <div className="flex items-center gap-4 lg:gap-6">
                        <img src={nasaSpaceAppsLogo} alt="NASA Space Apps Challenge" className="w-10 h-10 lg:w-12 lg:h-12 object-contain flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300" />
                        <span className="text-sm md:text-lg font-medium text-foreground lg:hidden lg:text-xl whitespace-nowrap">
                          NASA Space Apps Challenge
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-4 lg:pr-4">
                        <span className="hidden lg:block text-xl font-medium text-foreground">
                          NASA Space Apps Challenge
                        </span>
                        <div className="flex items-center gap-3 text-sm lg:text-base text-foreground/80 flex-wrap">
                          <div className="flex items-center gap-3 whitespace-nowrap">
                            <span className="text-base md:text-lg lg:text-lg font-medium">Visual Designer</span>
                            <span className="text-border">|</span>
                            <span className="text-base md:text-lg lg:text-lg font-medium">Part-time</span>
                          </div>
                          <span className="text-border hidden lg:inline">|</span>
                          <div className="flex items-center gap-3">
                            <span className="text-gray-500">Hybrid</span>
                            <span className="text-border">|</span>
                            <span className="text-gray-500">June 2024 - Sep 2025</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-4 pb-6 px-4">
                      <p className="text-foreground/80 text-lg leading-relaxed">
                        Contributed as a Visual Designer for NASA Space Apps Challenge, creating compelling visual materials and design assets for space-related projects and presentations.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </main>
      <TrustedBy />
      <Footer />
      <ThemeToggle />
    </div>
};
export default About;