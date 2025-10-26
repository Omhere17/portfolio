import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CustomCursor } from "@/components/CustomCursor";
import profileImage from "@/assets/profile.png";

const About = () => {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navigation />
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden">
                <img
                  src={profileImage}
                  alt="Om - UX Designer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-primary">
                The Path That Shaped Me
              </h1>
              
              <div className="space-y-6 text-base lg:text-lg leading-relaxed text-foreground/90">
                <p>
                  Namaste! My name is Om, and I was born and raised in Pune, India. I'm currently 
                  in my final year, at MIT-SD, Alandi. My journey in the creative field began when my 
                  mother enrolled me in an art class during my early school years. Art was 
                  something I enjoyed back then, but as time passed, my interests evolved. I 
                  became deeply involved in sports, especially football, and discovered a passion 
                  for all kinds of music, even exploring DJing and cars.
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
        </div>
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default About;
