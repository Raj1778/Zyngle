"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CardDemoProps {
  title?: string;
  description?: string;
  bgImage?: string;
  hoverImage?: string;
  className?: string;
  square?: boolean;
}

export function NewsCard({
  title = "Background Overlays",
  description = "This card is for some special elements, like displaying background gifs on hover only.",
  bgImage,
  className,
  square = false,
}: CardDemoProps) {
  return (
    <div
      className={cn(
        "group relative rounded-md shadow-xl overflow-hidden w-full h-48 ",
        square ? "aspect-square" : "",
        className
      )}
    >
      {bgImage && (
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
      <div className="relative flex flex-col justify-end h-full z-10 px-2 my-1 text-white">
        <h1 className="font-bold text-sm truncate">{title}</h1>
        <p className="font-normal text-xs pb-2">{description}</p>
      </div>
    </div>
  );
}
