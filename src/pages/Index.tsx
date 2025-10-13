import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SelectedWorks } from "@/components/SelectedWorks";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <SelectedWorks />
      <ThemeToggle />
    </div>
  );
};

export default Index;
