
import React from "react";
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
  },
];

export default function CompanyTestimonials() {
  return (
    <div className="w-full flex items-center justify-center bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-8xl px-6">
        {endorsements.map((item, i) => (
          <div
            key={i}
            className="flex flex-col justify-center items-center text-center p-6 bg-transparent"
          >
            <img
              src={item.logo}
              alt={item.source}
              className="w-[40%] sm:w-[50%] max-w-[180px] mb-6 "
            />
            <p className="text-gray-700 text-base md:text-xl leading-relaxed italic">
              “{item.quote}”
            </p>
            <p className="mt-4 text-gray-500 font-semibold uppercase tracking-wide text-sm md:text-base">
              — {item.source}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
