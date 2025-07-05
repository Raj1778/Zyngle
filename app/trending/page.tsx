// app/trending/page.tsx
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NewsCard } from "@/components/ui/NewsCard";

const ytvideos = [
  {
    title: "Ed Sheeran - Sapphire",
    description: "Live performance highlight",
    bgImage: "/sapphrie_ed.jpeg",
  },
  {
    title: "Jump Rope Song | Squid Game",
    description: "Viral moment from new episode",
    bgImage: "/squid.jpg",
  },
  {
    title: "Namit Malhotra's Ramayana",
    description: "Fictional epic reimagined",
    bgImage: "/ramayana.jpg",
  },
  {
    title: "Another Ramayana",
    description: "Epic continues",
    bgImage: "/ramayana.jpg",
  },
  {
    title: "Yet Another Ramayana",
    description: "Myth meets modern",
    bgImage: "/ramayana.jpg",
  },
];

const spotifysongs = [
  {
    title: "Sabrina Carpenter - Please Please Please",
    description: "Summer's pop hit",
    bgImage: "/sabrina.jpg",
  },
  {
    title: "Taylor Swift - Fortnight",
    description: "Tortured Poets lead single",
    bgImage: "/fortnight.jpeg",
  },
  {
    title: "Diljit Dosanjh - Lover",
    description: "Punjabi hit goes global",
    bgImage: "/lover.jpeg",
  },
  {
    title: "Olivia Rodrigo - vampire",
    description: "Breakup anthem",
    bgImage: "/vampire.jpg",
  },
];
function ScrollNewsRow({
  items,
  square = false,
}: {
  items: { title: string; description: string; bgImage: string }[];
  square?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;
    ref.current.scrollBy({
      left: dir === "left" ? -320 : 320, // Adjust this if needed
      behavior: "smooth",
    });
  };

  return (
    <div className="relative pt-2 pb-6">
      <button
        onClick={() => scroll("left")}
        className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 bg-zinc-800 p-2 rounded-full z-10 hover:bg-zinc-700"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>

      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto overflow-y-hidden px-10 scrollbar-hide scroll-smooth snap-x snap-mandatory"
      >
        {items.map((n, i) => (
          <div
            key={i}
            className="shrink-0 snap-start"
            style={{ minWidth: square ? "12rem" : "20rem" }}
          >
            <NewsCard
              title={n.title}
              description={n.description}
              bgImage={n.bgImage}
              square={square}
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 bg-zinc-800 p-2 rounded-full z-10 hover:bg-zinc-700"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>
    </div>
  );
}

export default function TrendingPage() {
  return (
    <div className="bg-zinc-900 min-h-screen text-white px-8 lg:px-16 pt-8">
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <Image
            src="/ytlogo.png"
            alt="YouTube"
            width={40}
            height={40}
            className="rounded-md"
          />
          <h2 className="text-2xl font-semibold">YouTube</h2>
        </div>
        <ScrollNewsRow items={ytvideos} />
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <Image
            src="/spotifylogo.webp"
            alt="Spotify"
            width={40}
            height={40}
            className="rounded-md"
          />
          <h2 className="text-2xl font-semibold">Spotify</h2>
        </div>
        <ScrollNewsRow items={spotifysongs} square />
      </section>
    </div>
  );
}
