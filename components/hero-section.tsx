"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const dateRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (titleRef.current) observer.observe(titleRef.current)
    if (subtitleRef.current) observer.observe(subtitleRef.current)
    if (dateRef.current) observer.observe(dateRef.current)

    return () => observer.disconnect()
  }, [])
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Controls when effect starts/stops
  })

  // Apply a vertical movement effect
  const yTransform = useTransform(scrollYProgress, [0, 0.4], ["-700px", "700px"])
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://goticisn.goodsonmove.com/wp-content/uploads/2024/04/img6-2.jpg"
          alt="Conference background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mt-96 mx-auto px-4 text-center text-white md:px-6">
        <motion.h1
            ref={titleRef}
            style={{ y: yTransform,  }} // Apply motion
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Fifth International Conference on
          </motion.h1>
          <motion.h2
            ref={subtitleRef}
            className="opacity-0 mt-2 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ y: yTransform,  }}
            
          >
            Intelligent Systems and Networks
          </motion.h2>
          <motion.div
            ref={dateRef}
            className="opacity-0 mt-8 inline-block rounded-full border border-white/30 bg-black/30 px-6 py-3 backdrop-blur-sm"
            style={{ y: yTransform,  }}
          >
            <p className="text-lg font-medium md:text-xl">Hanoi University of Industry, 21-22 March, 2026</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

