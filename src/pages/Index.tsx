import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ThemeToggle />
    </div>
  );
};

export default Index;
