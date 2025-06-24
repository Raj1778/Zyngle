"use client";
import { cn } from "@/lib/utils";

interface CardDemoProps {
  title?: string;
  description?: string;
  bgImage?: string;
  hoverImage?: string;
  className?: string;
}

export function CardDemo({
  title = "Background Overlays",
  description = "This card is for some special elements, like displaying background gifs on hover only.",
  bgImage = "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  hoverImage = "https://media.giphy.com/media/syEfLvksYQnmM/giphy.gif",
  className,
}: CardDemoProps) {
  return (
    <div
      className={cn(
        "max-w-xs w-full group relative h-96 rounded-md shadow-xl overflow-hidden",
        className
      )}
    >
      {/* Default Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70 transition-opacity duration-500"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Hover Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-90 transition-opacity duration-500"
        style={{ backgroundImage: `url(${hoverImage})` }}
      />

      {/* Optional dark overlay on hover */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

      {/* Foreground text content */}
      <div className="relative z-10 p-4 text-white">
        <h1 className="font-bold text-xl md:text-3xl">{title}</h1>
        <p className="font-normal text-base my-4">{description}</p>
      </div>
    </div>
  );
}
