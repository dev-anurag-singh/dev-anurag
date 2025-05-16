"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, useTransform, useScroll } from "framer-motion"
import { cn } from "@/lib/utils"

export const LampContainer = ({
  children,
  className,
  width = "w-full",
  height = "h-full",
}: {
  children: React.ReactNode
  className?: string
  width?: string
  height?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const scaleX = useTransform(scrollYProgress, [0, 0.5], [1, 2])
  const scaleY = useTransform(scrollYProgress, [0, 0.5], [1, 0.6])
  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, -20])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2])
  const lightOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 0])

  return (
    <div ref={ref} className={cn("relative flex flex-col items-center justify-center overflow-hidden", className)}>
      {isMounted && (
        <motion.div
          style={{
            scaleX,
            scaleY,
            translateY,
            opacity,
          }}
          className="absolute top-40 left-0 right-0 mx-auto w-[40%] rounded-full bg-primary/30 blur-[80px] aspect-[2/0.4]"
        />
      )}
      <div className="relative flex w-full flex-col items-center">{children}</div>
    </div>
  )
}
