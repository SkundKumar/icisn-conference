"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-start pt-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/mob.png" // Replace with actual mobile image path
            alt="Conference background"
            fill
            priority
            className="object-cover"
          />
        </div>
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/test.png" // Replace with actual desktop image path
            alt="Conference background"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Text Section - Kept Left-Aligned but Increased Vertical Scaling */}
      <div className="relative z-10 w-full px-4 md:px-8 lg:px-12 flex mt-52 md:ml-20">
        <div
          ref={containerRef}
          className="max-w-screen-md"
        >
          <motion.h1
            className="text-white font-semibold ml-4 leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sixth International Conference on
          </motion.h1>
          <motion.h2
            className="mt-2 text-white font-semibold ml-4 leading-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Intelligent Systems and Networks
          </motion.h2>
          <motion.h2
            className="mt-2 text-white ml-4 leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-5xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hanoi, Vietnam
          </motion.h2>
          <motion.div
            className="mt-6 inline-block rounded-full border border-white/30 bg-black/40 px-6 py-3 md:px-6 md:py-3 backdrop-blur-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
              Hanoi University of Industry, 21-22 March, 2026
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
