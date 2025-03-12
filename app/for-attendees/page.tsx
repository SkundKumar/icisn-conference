import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "For Attendees - ICISN 2025",
  description: "Information for attendees of the Fifth International Conference on Intelligent Systems and Networks",
}

export default function ForAttendeesPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:px-6 mt-20">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">For Attendees</h1>

      <Tabs defaultValue="registration" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="registration">Registration</TabsTrigger>
          <TabsTrigger value="venue">Venue</TabsTrigger>
          <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
          <TabsTrigger value="program">Program</TabsTrigger>
        </TabsList>

        <TabsContent value="registration" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Registration Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Registration for ICISN 2025 is now open. Please register early to take advantage of the early bird
                rates.
              </p>

              <h3 className="text-xl font-semibold mt-4">Registration Fees</h3>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3 text-left">Category</th>
                      <th className="p-3 text-left">Early Bird (until Feb 20)</th>
                      <th className="p-3 text-left">Regular</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-3">Academic</td>
                      <td className="p-3">$350</td>
                      <td className="p-3">$450</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3">Student</td>
                      <td className="p-3">$200</td>
                      <td className="p-3">$250</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3">Industry</td>
                      <td className="p-3">$500</td>
                      <td className="p-3">$600</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4">
                Registration includes access to all sessions, conference materials, coffee breaks, lunches, and the
                conference dinner.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="venue" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Conference Venue</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>ICISN 2025 will be held at Hanoi University of Industry, one of Vietnam's leading universities.</p>

              <h3 className="text-xl font-semibold mt-4">Address</h3>
              <p>
                Hanoi University of Industry
                <br />
                298 Cau Dien Street, Bac Tu Liem District
                <br />
                Hanoi, Vietnam
              </p>

              <h3 className="text-xl font-semibold mt-4">How to Get There</h3>
              <p>
                The university is approximately 15 km from Noi Bai International Airport. Transportation options
                include:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Taxi: Approximately 30 minutes (depending on traffic)</li>
                <li>Public Bus: Routes 07, 32, and 54 stop near the university</li>
                <li>Airport Shuttle: Available with advance booking</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="accommodation" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Accommodation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We have arranged special rates at the following hotels for conference attendees:</p>

              <div className="grid gap-4 md:grid-cols-2 mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Grand Plaza Hotel</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">⭐⭐⭐⭐⭐</p>
                    <p className="mb-2">Distance to venue: 2 km</p>
                    <p className="mb-2">Special rate: $120/night</p>
                    <p>Use code: ICISN2025</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>City View Hotel</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">⭐⭐⭐⭐</p>
                    <p className="mb-2">Distance to venue: 1.5 km</p>
                    <p className="mb-2">Special rate: $90/night</p>
                    <p>Use code: ICISN2025</p>
                  </CardContent>
                </Card>
              </div>

              <p className="mt-4">Please book your accommodation early as rooms at these special rates are limited.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="program" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Conference Program</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The detailed program will be available closer to the conference date. Here is a preliminary schedule:
              </p>

              <h3 className="text-xl font-semibold mt-4">Day 1 (March 22, 2025)</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>08:00 - 09:00</span>
                  <span>Registration</span>
                </li>
                <li className="flex justify-between">
                  <span>09:00 - 09:30</span>
                  <span>Opening Ceremony</span>
                </li>
                <li className="flex justify-between">
                  <span>09:30 - 10:30</span>
                  <span>Keynote Speech 1</span>
                </li>
                <li className="flex justify-between">
                  <span>10:30 - 11:00</span>
                  <span>Coffee Break</span>
                </li>
                <li className="flex justify-between">
                  <span>11:00 - 12:30</span>
                  <span>Technical Sessions</span>
                </li>
                <li className="flex justify-between">
                  <span>12:30 - 14:00</span>
                  <span>Lunch</span>
                </li>
                <li className="flex justify-between">
                  <span>14:00 - 15:30</span>
                  <span>Technical Sessions</span>
                </li>
                <li className="flex justify-between">
                  <span>15:30 - 16:00</span>
                  <span>Coffee Break</span>
                </li>
                <li className="flex justify-between">
                  <span>16:00 - 17:30</span>
                  <span>Technical Sessions</span>
                </li>
                <li className="flex justify-between">
                  <span>18:30 - 21:00</span>
                  <span>Welcome Reception</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-4">Day 2 (March 23, 2025)</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>09:00 - 10:00</span>
                  <span>Keynote Speech 2</span>
                </li>
                <li className="flex justify-between">
                  <span>10:00 - 10:30</span>
                  <span>Coffee Break</span>
                </li>
                <li className="flex justify-between">
                  <span>10:30 - 12:00</span>
                  <span>Technical Sessions</span>
                </li>
                <li className="flex justify-between">
                  <span>12:00 - 13:30</span>
                  <span>Lunch</span>
                </li>
                <li className="flex justify-between">
                  <span>13:30 - 15:00</span>
                  <span>Technical Sessions</span>
                </li>
                <li className="flex justify-between">
                  <span>15:00 - 15:30</span>
                  <span>Coffee Break</span>
                </li>
                <li className="flex justify-between">
                  <span>15:30 - 16:30</span>
                  <span>Panel Discussion</span>
                </li>
                <li className="flex justify-between">
                  <span>16:30 - 17:00</span>
                  <span>Closing Ceremony</span>
                </li>
                <li className="flex justify-between">
                  <span>19:00 - 21:30</span>
                  <span>Conference Dinner</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

