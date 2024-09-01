import React, { useRef } from "react";
import { Image } from "./desk-product-images";

type Props = {
  images: Image[];
};
const MobImages: React.FC<Props> = ({ images }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
    console.log(scrollRef.current?.scrollLeft);
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex items-center">
      <button
        onClick={scrollLeft}
        className="absolute z-10 flex items-center justify-center w-8 h-8 p-2 bg-white rounded-full left-1"
      >
        <img
          src="./images/icon-previous.svg"
          alt="Previous"
          className="w-2 h-2"
        />
      </button>
      <div
        ref={scrollRef}
        className="flex flex-row items-center overflow-hidden overflow-x-scroll"
        style={{ scrollBehavior: "smooth", overflow: "hidden" }}
      >
        {images.map((image) => (
          <img
            key={image.key}
            src={image.image}
            alt="Product"
            style={{ maxWidth: "100%", height: "auto", maxHeight: "250px" }}
          />
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="absolute z-10 flex items-center justify-center w-8 h-8 p-2 bg-white rounded-full right-1"
      >
        <img src="./images/icon-next.svg" alt="Next" className="w-2 h-2" />
      </button>
    </div>
  );
};

export default MobImages;
