"use client";

import React, { useRef, useState, useEffect } from "react";
import Sidebar from "@/components/ui/Sidebar";
import { FloatingDock } from "@/components/ui/dock";
import ZyngleNavbar from "@/components/ui/Navbar";
import { NewsCard } from "@/components/ui/NewsCard";
import {
  IconHome2,
  IconUser,
  IconSettings,
  IconSearch,
  IconCirclePlus,
  IconMessageCircle2,
  IconTrendingUp,
  IconUsers,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateArrows();
    el.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);

    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const newsItems = [
    {
      title: "Musk backs Trump after threat",
      description:
        "Musk credits Trump for Gaza ceasefire deal, praises efforts in bold online post.",
      bgImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202507/musk-praises-trump-for-resolving-global-conflicts-reuters-020455409-16x9_0.jpg?VersionId=TvmdqTIn.W54qgo613gknoy3sN7Vv4YS&size=690:388",
    },
    {
      title: "NASA Plans Moon Base by 2030",
      description:
        "The Artemis mission sets sights on a permanent human base on the Moon.",
      bgImage:
        "https://images.newscientist.com/wp-content/uploads/2022/09/09152048/SEI_124263525.jpg",
    },
    {
      title: "Panchayat Season 4 Released",
      description:
        "The highly awaited season of Panchayat — fans enjoy across the country.",
      bgImage: "/ps4_cleanup.jpeg",
    },
    {
      title: "Diddy Verdict Stalls on Racketeering",
      description:
        "Jury to keep deliberating after Diddy case deadlocks on top charge.",
      bgImage:
        "https://external-preview.redd.it/jury-reaches-verdict-on-4-of-5-counts-in-diddy-trial-judge-v0-MTr6TYjgcU-N1e7Hvc0rTViJW2DWPsINSJDwb9g2EeA.jpeg?width=640&crop=smart&auto=webp&s=fd3dd13e096e00572eadfca506a15e5b745598bf",
    },
    {
      title: "Time Crystal Achieved",
      description:
        "Physicists create time crystal – a new phase of matter that defies physics norms.",
      bgImage: "",
    },
    {
      title: "Brain to Text is Real",
      description:
        "New BCI tech lets paralyzed people type using only thoughts – no movement needed.",
      bgImage: "",
    },
  ];

  const sidebarLinks = [
    {
      label: "Home",
      href: "/home",
      icon: <IconHome2 className="h-5 w-5 text-neutral-300" />,
    },
    {
      label: "Trending",
      href: "/tredning",
      icon: <IconTrendingUp className="h-5 w-5 text-neutral-300" />,
    },
    {
      label: "Match",
      href: "/match",
      icon: <IconUsers className="h-5 w-5 text-neutral-300" />,
    },
    {
      label: "Profile",
      href: "/profile",
      icon: <IconUser className="h-5 w-5 text-neutral-300" />,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: <IconSettings className="h-5 w-5 text-neutral-300" />,
    },
  ];

  const dockLinks = [
    {
      title: "Home",
      icon: <IconHome2 className="h-full w-full text-neutral-300" />,
      href: "/home",
    },
    {
      title: "Search",
      icon: <IconSearch className="h-full w-full text-neutral-300" />,
      href: "/search",
    },
    {
      title: "Create",
      icon: <IconCirclePlus className="h-full w-full text-neutral-300" />,
      href: "/create",
    },
    {
      title: "Chat",
      icon: <IconMessageCircle2 className="h-full w-full text-neutral-300" />,
      href: "/chat",
    },
    {
      title: "Profile",
      icon: <IconUser className="h-full w-full text-neutral-300" />,
      href: "/profile",
    },
  ];

  return (
    <div className="dark">
      <ZyngleNavbar />
      <Sidebar links={sidebarLinks} />

      <div className="ml-64 pt-16 min-h-screen flex flex-col bg-gray-100 dark:bg-black text-black dark:text-white">
        <main className="flex-1 p-8">
          <div className="relative">
            {canScrollLeft && (
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/70 cursor-pointer rounded-full backdrop-blur-sm"
              >
                <IconChevronLeft className="text-white h-6 w-6" />
              </button>
            )}

            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-4 mb-8 pb-2 pr-4 scroll-smooth snap-x snap-mandatory scrollbar-hide"
            >
              {newsItems.map((item, i) => (
                <NewsCard
                  key={i}
                  className="min-w-[19rem] snap-start"
                  title={item.title}
                  description={item.description}
                  bgImage={item.bgImage}
                />
              ))}
            </div>

            {canScrollRight && (
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/70 cursor-pointer rounded-full backdrop-blur-sm"
              >
                <IconChevronRight className="text-white h-6 w-6" />
              </button>
            )}
          </div>

          <h1 className="text-2xl font-bold mb-4">
            Welcome to Zyngle Home Page – This is your feed 🚀
          </h1>
          <p className="text-neutral-600 dark:text-neutral-300">
            You can view posts, chat with friends, and explore new content here.
          </p>
        </main>

        <div className="fixed bottom-6 left-0 right-0 flex justify-center md:justify-end md:pr-6 z-50">
          <FloatingDock items={dockLinks} />
        </div>
      </div>
    </div>
  );
}
