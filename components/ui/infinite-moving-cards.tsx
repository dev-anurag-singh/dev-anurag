"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    setStart(true);
  }, []);

  const speedMap = {
    fast: 20,
    normal: 40,
    slow: 60,
  };

  const getDirection = () => {
    if (direction === "left") {
      return "-";
    }
    return "";
  };

  const getSpeeds = () => {
    return `${getDirection()}${speedMap[speed]}`;
  };

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 overflow-hidden", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={
          {
            "--animation-duration": "40s",
            "--animation-direction": getDirection(),
            "--animation-speed": getSpeeds(),
          } as React.CSSProperties
        }
      >
        {[...items, ...items].map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-primary/10 bg-background px-8 py-6 flex-shrink-0"
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] text-muted-foreground font-normal">
                "{item.quote}"
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {item.title}
                  </span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
