import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

// Import publication logos
import guardianLogo from "../../assets/icons/guardian.png";
import foodWineLogo from "../../assets/icons/foodwine.png";
import bonAppetitLogo from "../../assets/icons/bonappetit.png";

const endorsements = [
  {
    logo: guardianLogo,
    quote: "Saada Halwai blends tradition and taste with modern service.",
    source: "The Guardian",
  },
  {
    logo: foodWineLogo,
    quote: "Dishes so fresh, they taste like they came from your kitchen.",
    source: "FOOD & WINE",
  },
  {
    logo: bonAppetitLogo,
    quote: "Authentic Indian flavors brought straight to your events.",
    source: "bon appétit",
  },{
    logo: bonAppetitLogo,
    quote: "Authentic Indian flavors brought straight to your events.",
    source: "bon appétit",
  },{
    logo: bonAppetitLogo,
    quote: "Authentic Indian flavors brought straight to your events.",
    source: "bon appétit",
  },
];

export default function CompanyTestimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("init", onSelect);
  }, [emblaApi, onSelect]);

  // Autoplay effect
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = () => emblaApi.scrollNext();
    const interval = setInterval(autoplay, 4000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="w-full py-10 bg-white">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex items-center">
          {endorsements.map((item, i) => {
            const isActive = i === selectedIndex;

            return (
              <div
                key={i}
                className="flex-[0_0_90%] sm:flex-[0_0_70%] md:flex-[0_0_55%] lg:flex-[0_0_45%] px-4 flex justify-center"
              >
                <div
                  onClick={() => emblaApi && emblaApi.scrollTo(i)}
                  className={`relative w-full aspect-[2.5/1] rounded-xl border-2 border-[#C20000] p-6 shadow-md transition-all duration-500 ease-in-out cursor-pointer
                    ${
                      isActive
                        ? "scale-100 opacity-100 z-20"
                        : "scale-90 opacity-50 z-10"
                    }`}
                >
                  <img
                    src={item.logo}
                    alt={item.source}
                    className="w-[40%] sm:w-[30%] max-w-[120px] mb-4 mx-auto"
                  />
                  <p className="text-center text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed italic">
                    “{item.quote}”
                  </p>
                  <p className="text-center mt-4 text-xs sm:text-sm text-gray-500 font-semibold uppercase tracking-wide">
                    — {item.source}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
