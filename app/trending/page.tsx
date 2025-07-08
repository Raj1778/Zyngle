// app/trending/page.tsx
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { NewsCard } from "@/components/ui/NewsCard";
import { FloatingDock } from "@/components/ui/dock";

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
    title: "Back to friends",
    description: "Sombr",
    bgImage: "/sombr.jpeg",
  },
  {
    title: "Shaky",
    description: "Sanju Rathod",
    bgImage: "/shaky.jpg",
  },

  {
    title: "Finding Her",
    description: "Kushagra, Bharath, Saaheal",
    bgImage: "/findingher.jpeg",
  },
  {
    title: "Olivia Rodrigo - vampire",
    description: "Breakup anthem",
    bgImage: "/vampire.jpg",
  },

  {
    title: "Ordinary",
    description: "Alex Warren",
    bgImage: "/ordinary.jpg",
  },
  {
    title: "Taylor Swift - Fortnight",
    description: "Tortured Poets lead single",
    bgImage: "/fortnight.jpeg",
  },
];
const netflixItems = [
  {
    title: "Squid Game Season 3",
    description: "Deadlier games, higher stakes",
    bgImage: "/squidgame3.jpg",
  },
  {
    title: "Breaking Bad",
    description: "Classic crime‑drama",
    bgImage: "/breakingbad.jpg",
  },
  {
    title: "The Old Guard 2",
    description: "Charlize Theron action sequel",
    bgImage: "/oldguard2.jpg",
  },

  { title: "Too Much", description: "Rom‑com series", bgImage: "/toomuch.jpg" },
  {
    title: "The Sandman Season 2",
    description: "Fantasy drama, Ep 1–?",
    bgImage: "/sandman2.jpeg",
  },
  {
    title: "UNTAMED",
    description: "Action‑drama series",
    bgImage: "/untamed.jpg",
  },
  {
    title: "My Melody & Kuromi",
    description: "Anime—cute & dark",
    bgImage: "/melody.jpg",
  },
  {
    title: "Happy Gilmore 2",
    description: "Adam Sandler comedy",
    bgImage: "/happyg2.jpg",
  },
  {
    title: "The Summer Hikaru Died",
    description: "Horror‑anime thriller",
    bgImage: "/hikaru.jpg",
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
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);

  const updateArrows = () => {
    const el = ref.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;
    ref.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    updateArrows();
    el.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);

    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  return (
    <div className=" relative pt-2 pb-6   ">
      <div></div>
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm"
        >
          <ChevronLeft className="text-white w-6 h-6" />
        </button>
      )}

      <div
        ref={ref}
        className="flex overflow-x-auto gap-12 mb-2 pr-4 scroll-smooth snap-x snap-mandatory scrollbar-hide"
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

      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm"
        >
          <ChevronRight className="text-white w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default function TrendingPage() {
  return (
    <div className="bg-zinc-900 min-h-screen text-white pt-8 overflow-y-hidden px-6">
      <div className="px-1 pb-6 ">
        <button className=" cursor-pointer bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200 rounded-full p-2 flex items-center gap-2">
          <ArrowLeft></ArrowLeft>
        </button>
      </div>
      {/* Netflix Row */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <Image
            src="/netflixlogo.png"
            alt="Netflix"
            width={40}
            height={40}
            className="rounded-md"
          />
          <h2 className="text-2xl font-semibold">Netflix</h2>
        </div>
        <ScrollNewsRow items={netflixItems} square />
      </section>
      {/* Spotify Row */}
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
      {/* Youtube Row */}
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
    </div>
  );
}
