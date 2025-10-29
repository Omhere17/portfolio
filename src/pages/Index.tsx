import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SelectedWorks } from "@/components/SelectedWorks";
import { DesignPhilosophy } from "@/components/DesignPhilosophy";
import { TrustedBy } from "@/components/TrustedBy";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CustomCursor } from "@/components/CustomCursor";
import { LoadingScreen } from "@/components/LoadingScreen";

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!showLoading) {
      setTimeout(() => setShowContent(true), 50);
    }
  }, [showLoading]);

  if (showLoading) {
    return <LoadingScreen onLoadingComplete={() => setShowLoading(false)} />;
  }

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <div className={`transition-opacity duration-500 ${showContent ? "opacity-100" : "opacity-0"}`}>
        <Navigation />
        <Hero />
        <SelectedWorks />
        <DesignPhilosophy />
        <TrustedBy />
        <Footer />
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Index;
