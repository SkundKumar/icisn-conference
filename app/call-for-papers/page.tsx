import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Call for Papers - ICISN 2025",
  description: "Call for papers for the Fifth International Conference on Intelligent Systems and Networks",
}

export default function CallForPapersPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:px-6 mt-20">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Call for Papers</h1>

      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-8">
          We invite original and unpublished research papers for the Fifth International Conference on Intelligent
          Systems and Networks (ICISN 2025). The conference will focus on the latest advancements in intelligent systems
          and networks.
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Important Dates</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Paper Submission Deadline:</span>
                <span className="font-semibold">December 15, 2024</span>
              </li>
              <li className="flex justify-between">
                <span>Notification of Acceptance:</span>
                <span className="font-semibold">January 20, 2025</span>
              </li>
              <li className="flex justify-between">
                <span>Camera-Ready Submission:</span>
                <span className="font-semibold">February 10, 2025</span>
              </li>
              <li className="flex justify-between">
                <span>Early Registration Deadline:</span>
                <span className="font-semibold">February 20, 2025</span>
              </li>
              <li className="flex justify-between">
                <span>Conference Dates:</span>
                <span className="font-semibold">March 22-23, 2025</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mb-4">Topics of Interest</h2>
        <p className="mb-4">Topics of interest include, but are not limited to:</p>

        <div className="grid gap-4 md:grid-cols-2 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Intelligent Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>Artificial Intelligence</li>
                <li>Machine Learning</li>
                <li>Deep Learning</li>
                <li>Natural Language Processing</li>
                <li>Computer Vision</li>
                <li>Expert Systems</li>
                <li>Fuzzy Logic</li>
                <li>Evolutionary Computing</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Networks</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>5G/6G Networks</li>
                <li>Internet of Things (IoT)</li>
                <li>Network Security</li>
                <li>Cloud Computing</li>
                <li>Edge Computing</li>
                <li>Software-Defined Networks</li>
                <li>Wireless Sensor Networks</li>
                <li>Network Protocols</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-4">Submission Guidelines</h2>
        <p className="mb-4">
          All papers must be original and not simultaneously submitted to another journal or conference. The following
          paper categories are welcome:
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>Full research papers (8-10 pages)</li>
          <li>Short papers (4-6 pages)</li>
          <li>Poster presentations (2-4 pages)</li>
        </ul>

        <p>
          Please submit your papers through the conference submission system. All submissions will be peer-reviewed by
          at least three members of the program committee.
        </p>
      </div>
    </div>
  )
}

