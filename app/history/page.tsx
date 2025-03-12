import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "History - ICISN 2025",
  description: "History of the International Conference on Intelligent Systems and Networks",
}

export default function HistoryPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:px-6 mt-20">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
        Conference History
      </h1>

      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-8">
          The International Conference on Intelligent Systems and Networks (ICISN) has a rich history of bringing
          together researchers, academics, and industry professionals to discuss the latest advancements in intelligent
          systems and networks.
        </p>

        <div className="space-y-16">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <Image src="/placeholder.svg?height=600&width=800" alt="ICISN 2024" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">ICISN 2024</h2>
              <p className="mb-2">
                <strong>Location:</strong> Bangkok, Thailand
              </p>
              <p className="mb-2">
                <strong>Date:</strong> March 18-19, 2024
              </p>
              <p className="mb-2">
                <strong>Theme:</strong> Intelligent Systems for Smart Cities
              </p>
              <p className="mb-4">
                The fourth ICISN conference focused on the application of intelligent systems in developing smart
                cities. The conference featured 150 papers from 25 countries and had over 300 attendees.
              </p>
              <p>
                <strong>Keynote Speakers:</strong> Prof. Sarah Chen (MIT), Dr. Robert Kim (Samsung Research)
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-center md:flex-row-reverse">
            <div className="relative h-[300px] overflow-hidden rounded-lg md:order-2">
              <Image src="/placeholder.svg?height=600&width=800" alt="ICISN 2023" fill className="object-cover" />
            </div>
            <div className="md:order-1">
              <h2 className="text-2xl font-bold mb-4">ICISN 2023</h2>
              <p className="mb-2">
                <strong>Location:</strong> Singapore
              </p>
              <p className="mb-2">
                <strong>Date:</strong> March 25-26, 2023
              </p>
              <p className="mb-2">
                <strong>Theme:</strong> AI and Networks in Healthcare
              </p>
              <p className="mb-4">
                The third ICISN conference explored the intersection of AI, networks, and healthcare. The conference
                featured 120 papers from 22 countries and had over 250 attendees.
              </p>
              <p>
                <strong>Keynote Speakers:</strong> Prof. Michael Wong (Stanford), Dr. Lisa Park (IBM Research)
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <Image src="/placeholder.svg?height=600&width=800" alt="ICISN 2022" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">ICISN 2022</h2>
              <p className="mb-2">
                <strong>Location:</strong> Seoul, South Korea
              </p>
              <p className="mb-2">
                <strong>Date:</strong> March 19-20, 2022
              </p>
              <p className="mb-2">
                <strong>Theme:</strong> Intelligent Networks for Industry 4.0
              </p>
              <p className="mb-4">
                The second ICISN conference focused on intelligent networks for Industry 4.0. The conference featured
                100 papers from 18 countries and had over 200 attendees.
              </p>
              <p>
                <strong>Keynote Speakers:</strong> Prof. David Lee (Georgia Tech), Dr. Anna Wang (Microsoft Research)
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-center md:flex-row-reverse">
            <div className="relative h-[300px] overflow-hidden rounded-lg md:order-2">
              <Image src="/placeholder.svg?height=600&width=800" alt="ICISN 2021" fill className="object-cover" />
            </div>
            <div className="md:order-1">
              <h2 className="text-2xl font-bold mb-4">ICISN 2021</h2>
              <p className="mb-2">
                <strong>Location:</strong> Virtual Conference
              </p>
              <p className="mb-2">
                <strong>Date:</strong> March 27-28, 2021
              </p>
              <p className="mb-2">
                <strong>Theme:</strong> Emerging Trends in Intelligent Systems
              </p>
              <p className="mb-4">
                The inaugural ICISN conference was held virtually due to the COVID-19 pandemic. Despite the challenges,
                the conference was a success with 80 papers from 15 countries and over 150 virtual attendees.
              </p>
              <p>
                <strong>Keynote Speakers:</strong> Prof. James Wilson (UC Berkeley), Dr. Emily Chen (Google AI)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

