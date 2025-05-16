"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useVelocity,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.clientHeight);
    }
  }, []);

  const y1 = useTransform(scrollYProgress, [0, 0.9], [50, svgHeight - 50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, svgHeight - 50]);

  const latestY = useRef(0);
  const springY = useSpring(y2, { damping: 50, stiffness: 400 });
  const yVelocity = useVelocity(springY);
  const yVelocityFactor = useTransform(yVelocity, [-5000, 0, 5000], [-1, 0, 1]);

  useEffect(() => {
    return springY.onChange(latest => {
      latestY.current = latest;
    });
  }, [springY]);

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full max-w-4xl mx-auto", className)}
    >
      <div className="absolute left-0 top-3">
        <motion.div
          transition={{
            duration: 0.2,
          }}
          className="relative h-full w-[4px] ml-[8px]"
        >
          <svg
            viewBox={`0 0 20 ${svgHeight}`}
            width="20"
            height={svgHeight}
            className="block"
            aria-hidden="true"
          >
            <motion.path
              d={`M 1 0 V ${svgHeight} M 1 ${y1} L 1 ${y2}`}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeOpacity="0.2"
              strokeWidth="2"
              className="motion-safe:transition-all motion-safe:duration-200"
            />
            <motion.path
              d={`M 1 ${y1} L 1 ${y2}`}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              className="motion-safe:transition-all motion-safe:duration-200"
            />
            <motion.circle
              cx="1"
              cy={y2}
              r="4"
              fill="hsl(var(--primary))"
              className="motion-safe:transition-all motion-safe:duration-200"
            />
          </svg>
        </motion.div>
      </div>
      <div ref={contentRef} className="ml-8 pt-10 pb-10">
        {children}
      </div>
    </motion.div>
  );
};
