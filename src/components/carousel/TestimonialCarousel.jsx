import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

// import profile pictures
import profile1 from "../../assets/icons/Ring.svg";
import profile2 from "../../assets/icons/Ring.svg";
import profile3 from "../../assets/icons/Ring.svg";

// quotation mark
import quoteImg from "../../assets/icons/quote.svg";

const testimonials = [
  {
    text: "Saada Halwai turned our wedding into a feast to remember! Every dish was bursting with authentic flavors...",
    name: "ANANYA & ROHAN",
    location: "Dublin",
    image: profile1,
  },
  {
    text: "The food was simply outstanding, and the service made the event so smooth and memorable.",
    name: "PRIYA & KARAN",
    location: "London",
    image: profile2,
  },
  {
    text: "Our guests couldn’t stop talking about the desserts – everything was flawless!",
    name: "NEHA & ARJUN",
    location: "New York",
    image: profile3,
  },
];

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
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
    const interval = setInterval(() => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
    }, 4000); // scroll every 4 seconds

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="w-full mx-auto py-10">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex items-center">
          {testimonials.map((t, i) => {
            const isActive = i === selectedIndex;

            return (
              <div
                key={i}
                className="flex-[0_0_90%] sm:flex-[0_0_70%] md:flex-[0_0_55%] lg:flex-[0_0_50%] flex justify-center px-2 sm:px-4"
              >
                <div
                  onClick={() => emblaApi && emblaApi.scrollTo(i)}
                  className={`relative w-full aspect-[2.3/1] sm:aspect-[2.5/1] md:aspect-[2.3/1] rounded-[1.8rem] border-[3px] border-red-500 p-6 sm:p-8 shadow-lg cursor-pointer transition-all duration-500 ease-in-out
                    ${
                      isActive
                        ? "scale-100 opacity-100 z-20"
                        : "scale-90 opacity-50 z-10"
                    }`}
                >
                  {/* Text */}
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-10 leading-relaxed">
                    {t.text}
                  </p>

                  {/* Profile */}
                  <div className="flex items-center gap-2 sm:gap-3 absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-[16%] sm:w-[20%] max-w-[98px] aspect-square rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div className="text-left">
                      <h3 className="text-red-600 font-bold text-xs sm:text-sm md:text-base">
                        {t.name}
                      </h3>
                      <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">
                        {t.location}
                      </p>
                    </div>
                  </div>

                  {/* Quotation */}
                  <img
                    src={quoteImg}
                    alt="quote"
                    className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 w-[16%] sm:w-[14%] max-w-[180px] aspect-[180/141] opacity-90"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
