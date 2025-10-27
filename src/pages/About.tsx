import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CustomCursor } from "@/components/CustomCursor";
import childhoodImg from "@/assets/about-childhood.png";
import musicImg from "@/assets/about-music.png";
import footballImg from "@/assets/about-football.png";
import guitarImg from "@/assets/about-guitar.png";
const About = () => {
  return <div className="min-h-screen">
      <CustomCursor />
      <Navigation />
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {/* Header Section */}
            <div className="space-y-6 my-0">
              <h1 className="text-3xl font-bold text-primary lg:text-xl">
                The Path that Shaped me
              </h1>
              
              <p className="text-lg leading-relaxed mx-0 my-0 font-semibold text-zinc-800 lg:text-2xl">
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
              <p>
                My journey in the creative field began when my mother enrolled me in an art class during my early school years. Art was 
                something I enjoyed back then, but as time passed, my interests evolved. I became deeply involved in sports, 
                especially football, and discovered a passion for all kinds of music, even exploring DJing and cars.
              </p>
              
              <p>
                Throughout my school years, I represented my school in various interschool 
                football tournaments, becoming a dedicated fan of the game. If you showed me 
                all the assists that Mesut Özil made in his career, I'd watch them on repeat—his 
                playmaking inspired me tremendously. Despite my wide range of interests, I hadn't 
                yet considered a career in creative fields.
              </p>
              
              <p>
                It was one fine day that my brother introduced me to the world of design. Since 
                then, I've been exploring design, with a growing focus on projects that make a 
                social impact. Reflecting on this journey, I've realized that everything I did as a kid, 
                has helped me in unexpected ways. This path has become more than a career; 
                it's a way for me to give back and make a difference.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ThemeToggle />
    </div>;
};
export default About;