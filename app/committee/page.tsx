import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Committee - ICISN 2025",
  description: "Committee members for the Fifth International Conference on Intelligent Systems and Networks",
}

export default function CommitteePage() {
  return (
    <div className="container mx-auto px-4 py-24 md:px-6 mt-20">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
        Conference Committee
      </h1>

      <div className="grid gap-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Organizing Committee</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold">Prof. John Doe</h3>
                <p className="text-muted-foreground">Chair, Department of Computer Science</p>
                <p className="text-muted-foreground">University of Technology</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Technical Program Committee</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div key={i} className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold">Dr. Jane Smith</h3>
                <p className="text-muted-foreground">Associate Professor</p>
                <p className="text-muted-foreground">Institute of Advanced Research</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

