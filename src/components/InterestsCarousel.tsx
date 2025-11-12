import { useState, useEffect } from "react";
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

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const getPreviousIndex = () => {
    return currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  };

  const getSecondPreviousIndex = () => {
    const prevIndex = getPreviousIndex();
    return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
  };

  const getSecondNextIndex = () => {
    const nextIndex = getNextIndex();
    return nextIndex === images.length - 1 ? 0 : nextIndex + 1;
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto py-8">
      {/* Container for overlapping images */}
      <div className="relative flex items-center justify-center h-80 lg:h-96">
        {/* Far left image (second previous) */}
        <div className="absolute left-0 md:left-2 lg:left-4 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden z-0 transition-all duration-1000 ease-in-out">
          <img 
            src={images[getSecondPreviousIndex()].src} 
            alt={images[getSecondPreviousIndex()].alt}
            className="w-full h-full object-cover grayscale transition-all duration-1000 ease-in-out"
          />
        </div>
        
        {/* Left side image (previous) */}
        <div className="absolute left-12 md:left-16 lg:left-20 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden z-10 transition-all duration-1000 ease-in-out">
          <img 
            src={images[getPreviousIndex()].src} 
            alt={images[getPreviousIndex()].alt}
            className="w-full h-full object-cover grayscale transition-all duration-1000 ease-in-out"
          />
        </div>
        
        {/* Center main image (current) */}
        <div className="relative z-20 w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl group cursor-pointer transition-all duration-1000 ease-in-out">
          <img 
            src={images[currentIndex].src} 
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
          />
        </div>
        
        {/* Right side image (next) */}
        <div className="absolute right-12 md:right-16 lg:right-20 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden z-10 transition-all duration-1000 ease-in-out">
          <img 
            src={images[getNextIndex()].src} 
            alt={images[getNextIndex()].alt}
            className="w-full h-full object-cover grayscale transition-all duration-1000 ease-in-out"
          />
        </div>

        {/* Far right image (second next) */}
        <div className="absolute right-0 md:right-2 lg:right-4 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden z-0 transition-all duration-1000 ease-in-out">
          <img 
            src={images[getSecondNextIndex()].src} 
            alt={images[getSecondNextIndex()].alt}
            className="w-full h-full object-cover grayscale transition-all duration-1000 ease-in-out"
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
