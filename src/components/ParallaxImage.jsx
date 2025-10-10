import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import samosa from "../assets/icons/homescroll.jpg";

const ParallaxImage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div  className="relative z-30 overflow-hidden rounded-[2rem] shadow-lg">
      <motion.img ref={ref}
        src={samosa}
        alt="Display of various Indian sweets and chaat dishes"
        style={{ y }}
        className="w-full object-cover object-bottom "
      />
    </div>
  );
};
export default ParallaxImage