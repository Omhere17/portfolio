import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselImage {
  src: string;
  alt: string;
}

interface InterestsCarouselProps {
  images: CarouselImage[];
}

export const InterestsCarousel = ({ images }: InterestsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getPreviousIndex = () => {
    return currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto py-8">
      {/* Container for overlapping images */}
      <div className="relative flex items-center justify-center h-64 lg:h-80">
        {/* Left side image (previous) */}
        <div className="absolute left-8 lg:left-16 w-32 h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden z-0 opacity-50">
          <img 
            src={images[getPreviousIndex()].src} 
            alt={images[getPreviousIndex()].alt}
            className="w-full h-full object-cover grayscale"
          />
        </div>
        
        {/* Center main image (current) */}
        <div className="relative z-10 w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl group cursor-pointer">
          <img 
            src={images[currentIndex].src} 
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        </div>
        
        {/* Right side image (next) */}
        <div className="absolute right-8 lg:right-16 w-32 h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden z-0 opacity-50">
          <img 
            src={images[getNextIndex()].src} 
            alt={images[getNextIndex()].alt}
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>

      {/* Navigation buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded-full"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded-full"
        onClick={goToNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};
