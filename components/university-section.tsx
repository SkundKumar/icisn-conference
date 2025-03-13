"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

export default function UniversitySection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              entry.target.classList.add("animate-fade-in")
            } else if (entry.target === imageRef.current) {
              entry.target.classList.add("animate-slide-in-right")
            } else {
              entry.target.classList.add("animate-slide-up")
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (titleRef.current) observer.observe(titleRef.current)
    if (imageRef.current) observer.observe(imageRef.current)
    if (textRef.current) observer.observe(textRef.current)

    return () => observer.disconnect()
  }, [])
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"], // Triggers when image enters and exits viewport
  })
  
  const yTransform = useTransform(scrollYProgress, [0, 1], ["-40%", "50%"])
  

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2
          ref={titleRef}
          className="opacity-0 text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl"
        >
          Hanoi University of Industry (HaUI)
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 items-center">
          <div ref={imageRef} className="opacity-0 relative h-[400px] overflow-hidden rounded-lg">
          <motion.div
  ref={imageRef}
  style={{ y: yTransform }} // Parallax Effect
  className=" relative h-[400px] overflow-hidden rounded-lg"
>
<Image
  src="https://icisn.com/wp-content/uploads/elementor/thumbs/2c38476e-5697-4081-ba2f-75f674d7b047-qnf7op741ig6i11kxrcxs954wyatwu8x2139hzb8gw.jpg"
  alt="Hanoi University of Industry"
  fill
  className="absolute inset-0 object-cover"
/>
</motion.div>
          </div>

          <div ref={textRef} className="opacity-0 space-y-4 text-muted-foreground">
            <p>
              Hanoi University of Industry (HaUI) is a public university under Ministry of Industry and Trade with a
              126-year history of development (founded in 1898). HaUI is one of the leading application-oriented
              universities in Vietnam with multiple disciplines, modes and levels of training, also a supplier of
              high-quality graduates for the industrialization, modernization and global integration of Vietnam for
              decades.
            </p>
            <p>
              The university currently employs over 1,500 lecturers and support staff in its 3 campuses covering the
              total area of nearly 50 ha and equipped with state-of-the-art facilities, enough to offer training courses
              to over 30,000 students. Regarding organizational structure, the university has 7 functional departments,
              the School of Languages and Tourism, the School of Mechanical and Automotive Engineering, 9 faculties, 8
              training centers, 7 service centers, a research institute and a subsidiary company.
            </p>
            <p>
              Becoming a university of versatile applied scientific research and training, developing according to the
              smart university model; achieving international standards in a number of key areas; being the first choice
              of learners, the community and businesses.
            </p>

            <h3 className="text-xl font-semibold mt-6">Core values of HaUI:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Technology-based Development:</strong> Combining the tradition of the first Engineering
                Technology University in Vietnam; modern engineering technology is the foundation for the formation and
                development.
              </li>
              <li>
                <strong>Consistency with Goals:</strong> Consistency in identifying and implementing activities to
                achieve goals.
              </li>
              <li>
                <strong>Connection-based Strength:</strong> Internal solidarity and partnership create the strength of
                the University.
              </li>
              <li>
                <strong>Customer Centricity:</strong> Market orientation, putting the interests and satisfaction of
                learners, customers and interested parties first is at the center of all activities.
              </li>
              <li>
                <strong>Creativity-based Distinction:</strong> Making a difference through creativity to make a
                breakthrough.
              </li>
            </ul>

            <p className="mt-4">
              <strong>Educational philosophy:</strong> Comprehensive education for sustainable development and
              integration
            </p>
            <p>
              <strong>Missions:</strong> Training high-quality human resources; creating and transferring knowledge,
              technology to society and community to meet the requirements of the Industrial Revolution, serving society
              and the country
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

