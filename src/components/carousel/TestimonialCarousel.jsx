import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

// import profile pictures
import profile1 from "../../assets/icons/Priya & Aarav Mehta.jpg";
import profile2 from "../../assets/icons/AnjaliSharma.jpg";
import profile3 from "../../assets/icons/Rohan Patel.jpg";
import profile4 from "../../assets/icons/Neha & Karan Bansal.jpg";
import profile5 from "../../assets/icons/Simran Gill.jpg";

// quotation mark
import quoteImg from "../../assets/icons/quote.svg";

const testimonials = [
  {
    text: "<strong>“A Feast Worth Remembering” </strong> We knew right away that Saada Halwai wasn't just another caterer after our first taste. They brought humor, warmth, and a taste that made you feel right at home. Our wedding had a live chaat counter where people could get more than one dish. Everything was done with such care and joy by the team that it felt like family was in the kitchen. They really didn't just serve food; they served memories that were full of flavor and made with love. ",
    name: "Priya & Aarav Mehta",
    location: "London",
    image: profile1,

  },
    {
    text: "<strong>“From Mehndi to Main Course, Perfect!” </strong> They catered our three-day wedding, and wow, what a great time! Everything was made rom scratch and had a lot of soul, from the sour papdi chaat to the rich butter chicken. The team worked hard, but they were also so nice that it was like working with old friends. People couldn't stop talking about how great the food was and how it was served. It's not often that you can find caterers who blend tradition, taste, and fun so well. They really added to the taste of our party. ",
    name: "Anjali Sharma",
    location: "Manchester",
    image: profile2,

  },
  {
    text: "<strong>“Catering That Stole the Show” </strong> When people talk about our wedding, they don't talk about the music or the decorations. They talk about the food! The live counters at Saada Halwai were a big hit, and people were lining up just to smell them. Everything, from the appetizers to the dessert, was hot, fresh, and served on beautiful plates. The best part? It wasn't like a service; it was more like a party. It was easy, tasty, and something I will never forget thanks to them.",
    name: "Rohan Patel",
    location: "Birmingham",
    image: profile3,

  },
  {
    text: "<strong>“The Taste of Celebration” </strong> We wanted our wedding dinner to be a mix of our traditional and modern tastes, and Saada Halwai did a great job of making that happen. Their team put together a menu with a good mix of comfort food and unique items. Each bite tasted like it was made with love by hand. People kept asking us who made the food, and we were proud to say, our halwai heroes! Everything about it was perfect, from the way it was served to how it tasted. It was elegant, soulful, and so distinctly desi.",
    name: "Neha & Karan Bansal",
    location: "Leeds",
    image: profile4,

  },
  {
    text: "<strong> “Beyond Food — It’s Emotion” </strong> One thing makes Saada Halwai stand out. Not only does their food taste great, but each plate feels like it has a story behind it. They brought so much good energy to our event and made sure everyone was full and happy. My guests were still texting me about the desserts and lassi days after the party! They truly care about what they do, and it shows in every detail. I couldn’t have asked for a better team to make our wedding so full of flavour and love.",
    name: "Simran Gill",
    location: "Brighton",
    image: profile5,

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
                 
                    <p className="text-sm sm:text-base md:text-lg text-black mb-10 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.text }} />

                  

                  {/* Profile */}
                  <div className="flex items-center gap-2 sm:gap-3 absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-[20%] sm:w-[24%] max-w-[200px] aspect-square rounded-full object-cover border-3 border-red-600 shadow-sm"
                    />
                    <div className="text-left">
                      <h3 className="text-red-600 font-bold text-base sm:text-md md:text-2xl">
                        {t.name}
                      </h3>
                      <p className="text-[20px] sm:text-sm md:text-lg text-gray-500">
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
