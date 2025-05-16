"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function BackgroundBeams({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-0 overflow-hidden [--x-px:0] [--y-px:0]",
        className
      )}
      style={
        {
          "--x-px": `${mousePosition.x}px`,
          "--y-px": `${mousePosition.y}px`,
        } as React.CSSProperties
      }
      {...props}
    >
      <div className="relative h-full w-full">
        <div className="pointer-events-none absolute inset-0 z-10 h-full w-full bg-[radial-gradient(circle_at_var(--x-px)_var(--y-px),transparent_0%,hsl(var(--background))_65%)]" />
        <div className="absolute left-1/2 top-1/2 h-[40%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-[100px]" />
        <div className="absolute left-[25%] top-1/3 h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 blur-[100px]" />
        <div className="absolute right-[25%] top-2/3 h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 blur-[100px]" />
      </div>
    </div>
  );
}
