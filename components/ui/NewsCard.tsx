"use client";
import { cn } from "@/lib/utils";

interface CardDemoProps {
  title?: string;
  description?: string;
  bgImage?: string;
  hoverImage?: string;
  className?: string;
}

export function NewsCard({
  title = "Background Overlays",
  description = "This card is for some special elements, like displaying background gifs on hover only.",
  bgImage = "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  className,
}: CardDemoProps) {
  return (
    <div
      className={cn(
        "max-w-md group relative h-48 rounded-md shadow-xl overflow-hidden",
        className
      )}
    >
      {/* Default Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90 transition-opacity duration-500"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Optional dark overlay on hover */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

      {/* Foreground text content */}
      <div className="relative flex flex-col justify-end h-full z-10 px-2 my-1 text-white">
        <h1 className="font-bold text-md">{title}</h1>
        <p className="font-normal text-sm my-2">{description}</p>
      </div>
    </div>
  );
}
