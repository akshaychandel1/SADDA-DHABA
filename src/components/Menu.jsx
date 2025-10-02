import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = ["MAIN COURSE", "BREAKFAST", "DESSERTS", "STARTERS"];
const types = ["VEGETARIAN", "NON-VEGETARIAN"];

const menuItems = {
  "MAIN COURSE": {
    VEGETARIAN: [
      { name: "Paneer Lababdar", image: "/images/paneer-lababdar.jpg" },
      { name: "Shahi Paneer", image: "/images/shahi-paneer.jpg" },
      { name: "Dal Makhni", image: "/images/dal-makhni.jpg" },
    ],
    "NON-VEGETARIAN": [
      { name: "Butter Chicken", image: "/images/butter-chicken.jpg" },
      { name: "Chicken Tikka Masala", image: "/images/chicken-tikka.jpg" },
    ],
  },
  BREAKFAST: {
    VEGETARIAN: [
      { name: "Aloo Paratha", image: "/images/aloo-paratha.jpg" },
      { name: "Poha", image: "/images/poha.jpg" },
    ],
    "NON-VEGETARIAN": [
      { name: "Egg Bhurji", image: "/images/egg-bhurji.jpg" },
    ],
  },
  DESSERTS: {
    VEGETARIAN: [
      { name: "Gulab Jamun", image: "/images/gulab-jamun.jpg" },
      { name: "Rasgulla", image: "/images/rasgulla.jpg" },
    ],
    "NON-VEGETARIAN": [],
  },
  STARTERS: {
    VEGETARIAN: [
      { name: "Hara Bhara Kabab", image: "/images/hara-bhara-kabab.jpg" },
      { name: "Paneer Tikka", image: "/images/paneer-tikka.jpg" },
    ],
    "NON-VEGETARIAN": [
      { name: "Chicken Lollipop", image: "/images/chicken-lollipop.jpg" },
    ],
  },
};

export function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("MAIN COURSE");
  const [selectedType, setSelectedType] = useState("VEGETARIAN");

  const dishes = menuItems[selectedCategory][selectedType];

  return (
    <div className=" bg-[#C20000] text-white px-6 py-10 font-lilita">
    <motion.div className="mx-auto text-center">
        {/* H1 */}
        <motion.h1
          className="text-4xl font-barber md:text-8xl tracking-wide mb-3 text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }}
        >
          TASTE BEGINS HERE
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-base md:text-lg text-red-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.3,
          }}
        >
          Your journey into authentic, soulful food starts with our menu.
        </motion.p>
       

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center mt-10 gap-4 mb-6">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setSelectedCategory(item)}
            className={`px-4 py-2 rounded-full border font-lilita text-sm transition ${
              selectedCategory === item
                ? "bg-white text-[#C20000] border-white"
                : "text-white border-white hover:bg-white hover:text-[#C20000]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Type Toggle */}
      <div className="flex justify-center gap-4 mb-10">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-full border font-lilita text-sm transition ${
              selectedType === type
                ? "bg-white text-[#C20000] border-white"
                : "text-white border-white hover:bg-white hover:text-[#C20000]"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
       </motion.div>

      {/* Dish Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {dishes.length > 0 ? (
          dishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white text-[#C20000] rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{dish.name}</h3>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-3 text-white text-lg">
            No {selectedType.toLowerCase()} dishes available in {selectedCategory}.
          </p>
        )}
      </div>
    </div>
  );
}
