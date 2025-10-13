import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SelectedWorks } from "@/components/SelectedWorks";
import { DesignPhilosophy } from "@/components/DesignPhilosophy";
import { UXCompetencies } from "@/components/UXCompetencies";
import { TrustedBy } from "@/components/TrustedBy";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <SelectedWorks />
      <DesignPhilosophy />
      <UXCompetencies />
      <TrustedBy />
      <ThemeToggle />
    </div>
  );
};

export default Index;
