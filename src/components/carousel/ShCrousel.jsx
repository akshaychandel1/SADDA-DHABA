import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "../../index.css";

const ShCrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    {
      dish: "laalmaas.png",
      name: "Laal Maas Rajasthani",
      description:
        "A fiery Rajasthani mutton curry slow-cooked in red chili and traditional spices.",
    },
    {
      dish: "mixvegkol.png",
      name: "Mix Veg Kohlapuri",
      description:
        "A spicy Maharashtrian curry made with fresh mixed vegetables and aromatic Kolhapuri masala.",
    },
    {
      dish: "kadhaipaneer.png",
      name: "Kadhai Paneer Punjabi",
      description:
        "Cottage cheese tossed with bell peppers in a rich, spicy tomato gravy.",
    },
    {
      dish: "fishpunjabi.png",
      name: "Fish (Punjabi Style)",
      description:
        "Tender fish fillets cooked in a flavorful Punjabi gravy with bold spices.",
    },
    {
      dish: "chickenbutter.png",
      name: "Chicken Butter Masala",
      description:
        "Succulent chicken simmered in a creamy, buttery tomato sauce with gentle spices.",
    },
    {
      dish: "dumaloo.png",
      name: "Dum Aloo",
      description:
        "Baby potatoes cooked slowly in a rich, tangy, and mildly spiced gravy.",
    },
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    centerMode: true,
    centerPadding: isLandscape ? "5%" : "20%", // desktop fraction smaller to show 5 slides
    slidesToShow: isLandscape ? 5 : 1,
    beforeChange: (_, next) => setCurrentIndex(next),
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: isLandscape ? 5 : 2,
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "25%", // half neighbor visible
        },
      },
    ],
  };

  // Function to calculate scale based on position relative to center
  const getScale = (index) => {
    const distance = Math.abs(index - currentIndex);
    if (distance === 0) return 1; // center
    if (distance === 1) return 0.85; // first neighbors
    if (distance === 2) return 0.7; // second neighbors
    return 0.6; // others
  };

  return (
    <div className="flex justify-center items-center bg-white">
      <div className="w-full">
        <Slider {...settings}>
          {items.map((item, index) => {
            const scale = getScale(index);
            let lidTop =
              index === currentIndex
                ? "0%"
                : isLandscape?"36%":"40%";


 if(lidTop!="0%"){
   if (window.innerWidth < 640) {
    // sm
    lidTop = "40%";
  } else if (window.innerWidth >= 640 && window.innerWidth < 768) {
    // md
    lidTop = "40%";
  } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    // lg
    lidTop = "39%";
  } else if (window.innerWidth >= 1024&& window.innerWidth < 1224) {
    // xl & 2xl
    lidTop = "42%";
  } else if (window.innerWidth >= 1224&& window.innerWidth < 1624) {
    // xl & 2xl
    lidTop = "39%";
  }else{
    lidTop = "33%";
  }

 }
            return (
              <div key={index} className="flex justify-center px-2">
                <motion.div
                  className="w-full flex flex-col items-center text-center"
                  style={{ transform: `scale(${scale})` }}
                  animate={{ scale }}
                  transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
                >
                  <div className="relative h-[330px] w-full overflow-hidden">
                    {/* height increased by 110% (300px -> 330px) */}
                    <img
                      src={`/assets/${item.dish}`}
                      alt={item.name}
                      className="object-contain w-full h-full"
                    />
                    <motion.img
                      src="/assets/lid.png"
                      alt="lid"
                      initial={{ top: "36%" }}
                      animate={{ top: lidTop }}
                      transition={{
                        duration: 0.8,
                        ease: [0.645, 0.045, 0.355, 1],
                      }}
                      className="absolute left-0 right-0 w-full"
                    />
                  </div>
                  <h2 className="text-[20px] font-barber text-red-700 mt-3">
                    {item.name}
                  </h2>
                  <p className="text-[14px] text-red-700 max-w-[250px] mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ShCrousel;