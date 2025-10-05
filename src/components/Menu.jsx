import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Footer from "./Footer";

const categories = ["MAIN COURSE", "RICE", "SALAD", "BREADS", "DESSERTS", "DRINKS", "STARTERS"];
const types = ["VEGETARIAN", "NON-VEGETARIAN"];

const categoryMap = {
  "MAIN COURSE": "Main Course",
  RICE: "Rice",
  SALAD: "Salad",
  BREADS: "Breads",
  DESSERTS: "Desserts",
  DRINKS: "Drinks",
  STARTERS: "Starters",
};

export function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("MAIN COURSE");
  const [selectedType, setSelectedType] = useState("VEGETARIAN");
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  const fetchMenu = async () => {
    setLoading(true);
    try {
      const categoryParam = categoryMap[selectedCategory];
      const typeParam = selectedType === "VEGETARIAN" ? "VEG" : "NON VEG";

      const response = await axios.get(
        `https://findshproducts-rlsrgzipqq-nw.a.run.app/?category=${encodeURIComponent(categoryParam
        )}&type=${encodeURIComponent(typeParam)}`
      );

      const allDishes = Array.isArray(response.data?.data) ? response.data.data : [];
      // // const filtered = allDishes.filter((dish) =>
      // //   selectedType === "VEGETARIAN" ? dish.veg === true : dish.veg === false
      // );
      setDishes(allDishes);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
      setDishes([]);
    } finally {
      setLoading(false);
    }
  };
  fetchMenu();
}, [selectedCategory, selectedType]);

  return (
  <>
    <div className="bg-[#C20000] text-white px-6 py-10 font-lilita">
      <motion.div className="mx-auto text-center">
        <motion.h1
          className="text-4xl font-barber md:text-8xl tracking-wide mb-3 text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          TASTE BEGINS HERE
        </motion.h1>

        <motion.p
          className="text-base font-lato md:text-lg text-red-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
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
        <div className="inline-flex justify-center py-1.5 px-1.5 bg-white rounded-full gap-4 border border-[#C20000]">
  {types.map((type) => (
    <button
      key={type}
      onClick={() => setSelectedType(type)}
      className={`px-4 py-2 rounded-full font-lilita text-sm transition ${
        selectedType === type
          ? "bg-[#C20000] text-white"
          : "text-[#C20000] hover:bg-[#C20000]/10"
      }`}
    >
      {type}
    </button>
  ))}
</div>

      </motion.div>
</div>
<div className="m-12">
      {/* Dish Grid */}
      <div className="xl:mb-20 grid grid-cols-1 xl:px-16 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {loading ? (
          <div className="col-span-3 flex justify-center items-center">
  <svg
    className="animate-spin h-10 w-10 text-[#C20000]"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    ></path>
  </svg>
</div>

        ) : dishes.length > 0 ? (
          dishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className=" text-[#C20000]  overflow-hidden"
            >
              <img
                src={dish.image}
                alt={dish.title}
                className="w-full h-72 2xl:h-112 object-contain"
              />
              <div className="p-4 flex flex-col items-center text-center">
  <h2 className="text-2xl font-barber tracking-wide">{dish.title}</h2>
  <p className="text-lg mt-1 2xl:px-22 text-[#C20000]">{dish.subtitle}</p>
</div>

            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-3  text-[#C20000] text-lg">
            No {selectedType.toLowerCase()} dishes available in {selectedCategory}.
          </p>
        )}
      </div>
</div>
<Footer />
    </>
  );
}
