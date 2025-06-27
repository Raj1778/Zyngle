"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow", // Default to slow
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "very-slow" | "slow" | "normal" | "fast"; // Added very-slow option
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current && !start) {
      const original = Array.from(scrollerRef.current.children);
      original.forEach((item) => {
        const clone = item.cloneNode(true);
        scrollerRef.current!.appendChild(clone);
      });

      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "normal" : "reverse"
      );
      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast"
          ? "60s"
          : speed === "normal"
          ? "80s"
          : speed === "slow"
          ? "100s"
          : "120s" // very-slow
      );

      setStart(true);
    }
  }, [start, direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]", // Wider visible area
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-4", // Increased gap
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          backfaceVisibility: "hidden",
          willChange: "transform",
        }}
      >
        {items.map((item, idx) => (
          <li
            key={item.name + idx}
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-zinc-700 bg-zinc-900 px-8 py-6 md:w-[450px] shadow-md"
            style={{
              transform: "translate3d(0,0,0)",
              backfaceVisibility: "hidden",
            }}
          >
            <blockquote>
              <span
                className="relative z-20 text-base leading-relaxed font-normal text-zinc-300" // Larger text size
                style={{
                  textRendering: "optimizeLegibility",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-base leading-snug font-semibold text-zinc-400">
                    {" "}
                    {/* Larger text */}
                    {item.name}
                  </span>
                  <span className="text-sm leading-snug font-normal text-zinc-500">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
