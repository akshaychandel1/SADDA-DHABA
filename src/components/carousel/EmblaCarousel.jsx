import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import "./css/embla.css";

const SLOT_COUNT = 5; // number of visible slots

const EmblaCarousel = ({ slides, options = { loop: true, containScroll: "keep-snaps" } }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const containerRef = useRef(null);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  // Remove old slot classes from all slide nodes
  const clearSlotClasses = (slideNodes) => {
    if (!slideNodes || !slideNodes.length) return;
    slideNodes.forEach((node) => {
      node.classList.remove("slot-1", "slot-2", "slot-3", "slot-4", "slot-5");
    });
  };

  // Assign slot-N classes to the currently visible slides (left -> right)
  const updateSlots = useCallback(() => {
    if (!emblaApi) return;
    const slideNodes = emblaApi.slideNodes(); // all slide DOM nodes
    if (!slideNodes || !slideNodes.length) return;

    clearSlotClasses(slideNodes);

    // Try to use embla's slidesInView() to get visible indices
    let visibleIndices = [];
    if (typeof emblaApi.slidesInView === "function") {
      visibleIndices = emblaApi.slidesInView();
    }

    // Map to nodes and ensure left->right by sorting by DOM position
    let visibleNodes = visibleIndices
      .map((i) => slideNodes[i])
      .filter(Boolean);

    // Fallback: if slidesInView didn't return useful results, compute by bounding rect
    if (!visibleNodes.length) {
      // pick slides whose bounding rect intersects the viewport
      const viewportRect = emblaRef.current?.getBoundingClientRect();
      visibleNodes = slideNodes.filter((node) => {
        const r = node.getBoundingClientRect();
        // consider visible if any part is inside viewport horizontally
        return viewportRect && r.right > viewportRect.left && r.left < viewportRect.right;
      });
    }

    // Sort visible nodes left -> right by client rect (robust)
    visibleNodes.sort((a, b) => a.getBoundingClientRect().left - b.getBoundingClientRect().left);

    // Keep exactly SLOT_COUNT from the left-most visible nodes
    visibleNodes = visibleNodes.slice(0, SLOT_COUNT);

    // Assign slot classes in order
    visibleNodes.forEach((node, idx) => {
      const slotIndex = idx + 1; // 1..SLOT_COUNT
      if (slotIndex >= 1 && slotIndex <= SLOT_COUNT) node.classList.add(`slot-${slotIndex}`);
    });
  }, [emblaApi, emblaRef]);

  useEffect(() => {
    if (!emblaApi) return;

    // Update slots on important events
    emblaApi.on("select", updateSlots);
    emblaApi.on("reInit", updateSlots);
    emblaApi.on("scroll", updateSlots);

    // Run once now
    updateSlots();

    // cleanup
    return () => {
      emblaApi.off("select", updateSlots);
      emblaApi.off("reInit", updateSlots);
      emblaApi.off("scroll", updateSlots);
    };
  }, [emblaApi, updateSlots]);

  return (
    <div className="embla" ref={containerRef}>
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

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot" + (index === selectedIndex ? " embla__dot--selected" : "")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
