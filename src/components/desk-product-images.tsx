import clsx from "clsx";
import { useState } from "react";

export type Image = {
  key: string;
  thumbnail: string;
  image: string;
};

type Props = {
  images: Image[];
};
const DeskImages = ({ images }: Props) => {
  const [selected, setSelected] = useState<Image>(images[0]);
  return (
    <div className="flex flex-col items-center p-4 space-y-6">
      <img
        src={selected?.image}
        alt="product image"
        className="object-contain rounded-lg shadow-sm"
        style={{ maxWidth: "100%", height: "auto", maxHeight: "400px" }}
      />
      <div className="flex flex-row items-center justify-between space-x-3">
        {images.map((image) => (
          <img
            key={image.key}
            className={clsx(
              "rounded-md cursor-pointer transition-transform transform hover:scale-105",
              {
                "border-2 border-primary-orange opacity-50":
                  selected.key === image.key,
              }
            )}
            onClick={() => setSelected(image)}
            src={image.thumbnail}
            alt="product thumbnail image"
            style={{ width: "65px", height: "65px", objectFit: "cover" }}
          />
        ))}
      </div>
    </div>
  );
};

export default DeskImages;
