import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./css/embla.css";

const EmblaCarousel = ({ slides, options = { loop: true, containScroll: "keepSnaps" } }) => {
  const [emblaRef] = useEmblaCarousel(options);



  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              {React.isValidElement(slide) ? (
                React.cloneElement(slide, {
                  className: `${slide.props.className ?? ""} embla__slide__img`,
                  alt: slide.props.alt ?? `slide-${index + 1}`,
                })
              ) : (
                <img
                  src={slide.src}
                  alt={slide.alt ?? `slide-${index + 1}`}
                  className="embla__slide__img"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
