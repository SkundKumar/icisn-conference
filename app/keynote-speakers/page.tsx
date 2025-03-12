import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Keynote Speakers - ICISN 2025",
  description: "Keynote speakers for the Fifth International Conference on Intelligent Systems and Networks",
}

export default function KeynoteSpeakersPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:px-6 mt-20">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
        Keynote Speakers
      </h1>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="relative h-64 w-64 overflow-hidden rounded-full mb-6">
              <Image
                src={`/placeholder.svg?height=400&width=400`}
                alt={`Keynote Speaker ${i}`}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-center">Prof. Alex Johnson</h2>
            <p className="text-lg text-muted-foreground text-center">Stanford University, USA</p>
            <p className="mt-4 text-center">
              Expert in Artificial Intelligence and Machine Learning with over 20 years of experience in the field.
            </p>
            <h3 className="mt-4 text-xl font-semibold text-center">Keynote Topic:</h3>
            <p className="text-center italic">"The Future of Intelligent Systems in a Connected World"</p>
          </div>
        ))}
      </div>
    </div>
  )
}

