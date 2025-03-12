"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function GallerySection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              entry.target.classList.add("animate-fade-in")
            } else {
              entry.target.classList.add("animate-fade-in")

              // Add staggered animation to gallery items
              const items = entry.target.querySelectorAll(".gallery-item")
              items.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add("animate-fade-in")
                }, 100 * index)
              })
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (titleRef.current) observer.observe(titleRef.current)
    if (galleryRef.current) observer.observe(galleryRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2
          ref={titleRef}
          className="opacity-0 text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12"
        >
          ICISN Gallery
        </h2>

        <div ref={galleryRef} className="bento-grid">
          {/* Large featured image */}
          <div className="opacity-0 gallery-item bento-span-8 relative h-[400px] overflow-hidden rounded-lg">
            <Image
              src="https://i.pinimg.com/736x/b3/25/f6/b325f69e199b6d6e8d6808129e6d7aa9.jpg"
              alt="Conference hall"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Smaller images */}
          <div className="opacity-0 gallery-item bento-span-4 relative h-[400px] overflow-hidden rounded-lg">
            <Image
              src="https://i.pinimg.com/736x/c4/24/a2/c424a22424792a6e3d019487d0cfe7dc.jpg"
              alt="Keynote speaker"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="opacity-0 gallery-item bento-span-4 relative h-[300px] overflow-hidden rounded-lg">
            <Image
              src="https://i.pinimg.com/736x/23/39/b0/2339b0e4bc1c48d152945529d0b168fa.jpg"
              alt="Conference attendees"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="opacity-0 gallery-item bento-span-4 relative h-[300px] overflow-hidden rounded-lg">
            <Image
              src="https://i.pinimg.com/736x/6f/8a/00/6f8a00a79c28029cf788b3ce637f256d.jpg"
              alt="Panel discussion"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="opacity-0 gallery-item bento-span-4 relative h-[300px] overflow-hidden rounded-lg">
            <Image
              src="https://i.pinimg.com/736x/f3/e4/61/f3e4616dfd4c8f225d84d6c549df62ce.jpg"
              alt="Networking event"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="opacity-0 gallery-item bento-span-12 relative h-[300px] overflow-hidden rounded-lg">
            <Image
              src="/lanmd.jpg"
              alt="Conference panorama"
              fill
              className=" object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

