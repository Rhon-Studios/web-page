"use client"; // Línea agregada

import Image from "next/image";
import { useState, KeyboardEvent } from "react";

export type GalleryImage = {
  readonly src: string;
  readonly name: string;
  readonly description?: string;
};

export type GalleryProps = {
  readonly images: readonly GalleryImage[];
};

export default function CharactersGallery({ images }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = images[selectedIndex];

  const handleKey = (e: KeyboardEvent<HTMLDivElement>, i: number) => {
    if (e.key === "Enter" || e.key === " ") {
      setSelectedIndex(i);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl mx-auto">
      {/* Miniaturas */}
      <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-x-hidden">
        {images.map((img, i) => (
          <div
            key={i}
            role="button"
            tabIndex={0}
            className={`relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden cursor-pointer border-2 ${
              i === selectedIndex ? "border-main" : "border-transparent"
            }`}
            onClick={() => setSelectedIndex(i)}
            onKeyDown={e => handleKey(e, i)}
          >
            <Image
              src={img.src}
              alt={img.name}
              fill
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Imagen grande + descripción */}
      <div className="flex-1 flex flex-col md:flex-row gap-6 items-start md:items-center">
        <div className="relative w-full md:w-1/2 aspect-4/3 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={selected.src}
            alt={selected.name}
            fill
            className="object-cover object-center transition-transform duration-300"
          />
        </div>
        <div className="md:w-1/2 flex flex-col gap-4">
          <h3>{selected.name}</h3>
          <p className="text-foreground/80">{selected.description}</p>
        </div>
      </div>
    </div>
  );
}
