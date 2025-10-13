import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SelectedWorks } from "@/components/SelectedWorks";
import { DesignPhilosophy } from "@/components/DesignPhilosophy";
import { TrustedBy } from "@/components/TrustedBy";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <SelectedWorks />
      <DesignPhilosophy />
      <TrustedBy />
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default Index;
