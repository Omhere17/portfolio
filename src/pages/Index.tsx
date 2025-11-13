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
  const [showLoading, setShowLoading] = useState(() => {
    // Check if user has visited before in this session
    const hasVisited = sessionStorage.getItem('hasVisited');
    return !hasVisited;
  });
  const [showContent, setShowContent] = useState(!showLoading);

  useEffect(() => {
    // Mark as visited for this session
    if (showLoading) {
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, [showLoading]);

  useEffect(() => {
    if (!showLoading) {
      setTimeout(() => setShowContent(true), 50);
    }
  }, [showLoading]);

  return (
    <div className="min-h-screen">
      <CustomCursor />
      {showLoading && <LoadingScreen onLoadingComplete={() => setShowLoading(false)} />}
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
