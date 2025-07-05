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
import RightSidebar from "@/components/ui/RightSidebar";
import PostSection from "@/components/ui/PostSection";
import Post from "@/components/ui/Post";
import { posts } from "@/lib/data/PostData";

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
      bgImage: "",
      // "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202507/musk-praises-trump-for-resolving-global-conflicts-reuters-020455409-16x9_0.jpg?VersionId=TvmdqTIn.W54qgo613gknoy3sN7Vv4YS&size=690:388",
    },
    {
      title: "NASA Plans Moon Base by 2030",
      description:
        "The Artemis mission sets sights on a permanent human base on the Moon.",
      bgImage: "",
      // "https://images.newscientist.com/wp-content/uploads/2022/09/09152048/SEI_124263525.jpg",
    },

    {
      title: "Christopher Nolan’s The Odyssey Trailer",
      description:
        "The first look of Christopher Nolan’s much-awaited The Odyssey is finally out",
      bgImage: "",
      // ""https://images.news18.com/ibnlive/uploads/2025/07/news18-18-2025-07-a5ef172cf003083615f6673641b440b0-16x9.png?impolicy=website&width=640&height=360","
    },
    {
      title: "Panchayat Season 4 Released",
      description: "The highly awaited season of Panchayat has created a hype.",
      bgImage: "/ps4_cleanup.jpeg",
    },
    {
      title: "Diddy Verdict Stalls on Racketeering",
      description:
        "Jury to keep deliberating after Diddy case deadlocks on top charge.",
      bgImage: "",
      // "https://external-preview.redd.it/jury-reaches-verdict-on-4-of-5-counts-in-diddy-trial-judge-v0-MTr6TYjgcU-N1e7Hvc0rTViJW2DWPsINSJDwb9g2EeA.jpeg?width=640&crop=smart&auto=webp&s=fd3dd13e096e00572eadfca506a15e5b745598bf",
    },

    {
      title: "Ex-Bangladesh PM Hasina Gets 6-Month Jail Term by ICT",
      description:
        "Bangladesh’s ICT sentenced former PM Sheikh Hasina to six months in jail in a contempt of court case, as reported by The Dhaka Tribune.",
      bgImage: "",
      // "https://images.indianexpress.com/2025/05/Sheikh-Hasina-1_20250513212005.jpg?w=640",
    },
  ];

  return (
    <div className="dark">
      <ZyngleNavbar />
      <Sidebar />

      <div className="ml-64  pt-16 min-h-screen flex flex-col bg-gray-100 dark:bg-black text-black dark:text-white">
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
                  className="min-w-[18rem] snap-start"
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
          <div className="relative grid grid-cols-[3fr_1fr] gap-6 mt-8">
            {/* Left Content */}
            <div>
              <PostSection>
                <div className=" px-4 md:px-2 space-y-6">
                  {posts.map((post, index) => (
                    <Post key={index} {...post} />
                  ))}
                </div>
              </PostSection>
            </div>

            {/* Right Sidebar Wrapper */}

            <div className="sticky left-2 right-12 top-24 w-64 m-3 px-3 overflow-y-auto max-h-[calc(100vh-5rem)] bg-white dark:bg-neutral-900 p-4 border-l dark:border-neutral-700 rounded-md shadow-md scrollbar-hide">
              <RightSidebar />
            </div>
          </div>
        </main>

        <div className="fixed bottom-6 left-0 right-0 flex justify-center md:justify-end md:pr-6 z-50">
          <FloatingDock />
        </div>
      </div>
    </div>
  );
}
