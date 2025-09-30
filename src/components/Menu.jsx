import React, { useState } from "react";
import { motion } from "framer-motion";

export function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("MAIN COURSE");
  const [selectedType, setSelectedType] = useState("VEGETARIAN");

  const categories = ["MAIN COURSE", "BREAKFAST", "APPETIZERS", "BEVERAGES", "DESERTS"];
  const types = ["VEGETARIAN", "NON-VEGETARIAN"];

  return (
    <div className="pt-12 bg-[#C20000] flex flex-col items-center justify-center text-center px-4">
      <motion.div className="mx-auto md:mb-60 text-center">
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
        <div className="flex flex-wrap gap-3 mt-6 justify-center">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setSelectedCategory(item)}
              className={`px-4 py-2 rounded-full border font-lilita text-sm transition
                ${
                  selectedCategory === item
                    ? "bg-white text-[#C20000] border-white"
                    : "text-white border-white hover:bg-white hover:text-[#C20000]"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Veg/Non-Veg Toggle Group */}
        <div className="inline-flex mt-6 bg-white rounded-full p-1">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-5 py-1.5 rounded-full font-lilita text-base md:xl transition
                ${
                  selectedType === type
                    ? "bg-[#C20000] text-white"
                    : "bg-white text-[#C20000]"
                }`}
            >
              {type}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
