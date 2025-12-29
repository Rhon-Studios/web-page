"use client";

import Image from "next/image";
import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { GalleryImage } from "./charactersGallery";

export type MainGalleryProps = {
  readonly images: readonly GalleryImage[];
};

export default function MainGallery({ images }: MainGalleryProps) {
  const [index, setIndex] = useState(0);
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const current = images[index];

  useLayoutEffect(() => {
    if (pendingIndex === null) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setPendingIndex(null);
      },
    });

    tl.to(contentRef.current, {
      x: -100,
      opacity: 0,
      duration: 0.35,
      ease: "back.in(1.4)",
      onComplete: () => setIndex(pendingIndex),
    })
      .set(contentRef.current, { x: 100, opacity: 0 })
      .to(contentRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.45,
        ease: "back.out(1.4)",
      });

    return () => {
      tl.kill();
    };
  }, [pendingIndex]);

  const changeIndex = (newIndex: number) => {
    if (newIndex === index) return;
    setPendingIndex(newIndex);
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto">
      <div className="">
        <div
          ref={contentRef}
          className="flex items-center justify-center m-auto"
        >
          <div className="relative w-full h-[400px]">
            <Image
              src={current.src}
              alt={current.name}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col m-auto justify-center max-w-md">
            <h3 className="text-5xl font-semibold text-main mb-4">
              {current.name}
            </h3>
            <p className="text-foreground/80 text-lg leading-relaxed">
              {current.description}
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-center mt-8">
        {images.map((img, i) => (
          <button
            key={i}
            onMouseEnter={() => changeIndex(i)}
            onClick={() => changeIndex(i)}
            aria-label={`Seleccionar ${img.name}`}
            className={`relative w-24 h-24 rounded-full overflow-hidden transition-all duration-300 ${
              i === index
                ? "ring-2 ring-main scale-110"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <Image src={img.src} alt={img.name} fill className="object-cover" />
          </button>
        ))}
      </div>
    </section>
  );
}
