import devncoLogoLight from "@/assets/devnco-logo-light.png";
import devncoLogoDark from "@/assets/devnco-logo-dark.png";
import mitsdLogoLight from "@/assets/mitsd-logo-light.png";
import mitsdLogoDark from "@/assets/mitsd-logo-dark.png";
import antefLogoLight from "@/assets/antef-logo-light.png";
import antefLogoDark from "@/assets/antef-logo-dark.png";
import gdgLogoLight from "@/assets/gdg-logo-light.png";
import gdgLogoDark from "@/assets/gdg-logo-dark.png";
import ystocxxLogoLight from "@/assets/ystocxx-logo-light.png";
import ystocxxLogoDark from "@/assets/ystocxx-logo-dark.png";
import nasaSpaceAppsLogoLight from "@/assets/nasa-space-apps-logo-light.png";
import nasaSpaceAppsLogoDark from "@/assets/nasa-space-apps-logo-dark.png";
import zestrixLogoLight from "@/assets/zestrix-logo-light.png";
import zestrixLogoDark from "@/assets/zestrix-logo-dark.png";

export const TrustedBy = () => {
  const logos = [{
    lightSrc: devncoLogoLight,
    darkSrc: devncoLogoDark,
    alt: "Devnco",
    size: "h-10"
  }, {
    lightSrc: mitsdLogoLight,
    darkSrc: mitsdLogoDark,
    alt: "MITSD",
    size: "h-8"
  }, {
    lightSrc: antefLogoLight,
    darkSrc: antefLogoDark,
    alt: "Antef",
    size: "h-10"
  }, {
    lightSrc: gdgLogoLight,
    darkSrc: gdgLogoDark,
    alt: "GDG",
    size: "h-10"
  }, {
    lightSrc: ystocxxLogoLight,
    darkSrc: ystocxxLogoDark,
    alt: "Y stocxx",
    size: "h-8"
  }, {
    lightSrc: nasaSpaceAppsLogoLight,
    darkSrc: nasaSpaceAppsLogoDark,
    alt: "NASA Space Apps",
    size: "h-10"
  }, {
    lightSrc: zestrixLogoLight,
    darkSrc: zestrixLogoDark,
    alt: "Zestrix Solutions",
    size: "h-9"
  }];

  // Duplicate logos for seamless endless loop
  const duplicatedLogos = [...logos, ...logos];
  return <section className="pt-8 pb-16 overflow-hidden">
      <div className="container mx-auto px-16 lg:px-24 py-16">
        <h3 className="text-center text-2xl font-medium mb-12">Earning the Trust of People at</h3>
        
        <div className="relative flex items-center overflow-hidden group">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-8 lg:w-16 bg-gradient-to-r from-background via-background/90 to-transparent z-10 pointer-events-none" />
          
          <div className="flex items-center animate-marquee">
            {duplicatedLogos.map((logo, index) => <div key={index} className="flex items-center mx-8 flex-shrink-0">
                <img 
                  src={logo.lightSrc} 
                  alt={logo.alt} 
                  className={`${logo.size} w-auto opacity-40 hover:opacity-100 transition-all grayscale hover:grayscale-0 dark:hidden`} 
                />
                <img 
                  src={logo.darkSrc} 
                  alt={logo.alt} 
                  className={`${logo.size} w-auto opacity-40 hover:opacity-100 transition-all grayscale hover:grayscale-0 hidden dark:block`} 
                />
                <div className="w-4 h-4 rounded-full bg-primary ml-16" />
              </div>)}
          </div>
          
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-8 lg:w-16 bg-gradient-to-l from-background via-background/90 to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>;
};