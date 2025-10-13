import devncoLogo from "@/assets/devnco-logo.png";
import mitsdLogo from "@/assets/mitsd-logo.png";
import antefLogo from "@/assets/antef-logo.png";

export const TrustedBy = () => {
  const logos = [
    { src: devncoLogo, alt: "Devnco", size: "h-10" },
    { src: mitsdLogo, alt: "MITSD", size: "h-12" },
    { src: antefLogo, alt: "Antef", size: "h-12" },
  ];

  // Triple logos for seamless endless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-16 lg:px-24">
        <h3 className="text-center text-2xl font-medium mb-12">Trusted by</h3>
        
        <div className="relative flex items-center">
          <div className="flex items-center animate-marquee">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex items-center mx-8 flex-shrink-0">
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className={`${logo.size} w-auto opacity-60 hover:opacity-100 transition-opacity`}
                />
                <div className="w-4 h-4 rounded-full bg-primary ml-16" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
