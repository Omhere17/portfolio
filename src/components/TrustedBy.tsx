import devncoLogo from "@/assets/devnco-logo.png";
import mitsdLogo from "@/assets/mitsd-logo.png";
import antefLogo from "@/assets/antef-logo.png";

export const TrustedBy = () => {
  const logos = [
    { src: devncoLogo, alt: "Devnco" },
    { src: mitsdLogo, alt: "MITSD" },
    { src: antefLogo, alt: "Antef" },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 bg-[hsl(var(--philosophy-bg))] overflow-hidden">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-2xl font-medium mb-12">Trusted by</h3>
        
        <div className="relative">
          <div className="flex animate-marquee">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex items-center mx-8 flex-shrink-0">
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
                />
                <div className="w-2 h-2 rounded-full bg-primary ml-16" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
