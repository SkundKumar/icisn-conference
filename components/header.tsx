"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "HOME", path: "/" },
  { name: "COMMITTEE", path: "/committee" },
  { name: "KEYNOTE SPEAKERS", path: "#" },
  { name: "CALL FOR PAPERS", path: "/call-for-papers" },
  { name: "FOR ATTENDEES", path: "/for-attendees" },
  { name: "HISTORY", path: "/history" },
  { name: "CONTACT US", path: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled || pathname !== "/" ? "bg-white/80 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-around">
          <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <span className={cn(
              "text-2xl font-bold tracking-tighter font-playfair",
              scrolled || pathname !== "/" ? "text-black" : "text-white"
            )}>ICISN</span>
          </Link>

          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-sm font-medium tracking-wider transition-colors",
                  pathname === item.path
      ? scrolled || pathname !== "/"
        ? "text-black border-b-2 border-black pb-1" // Black when scrolled
        : "text-white border-b-2 border-white pb-1" // White when not scrolled
      : scrolled || pathname !== "/"
        ? "text-gray-900"
        : "text-white"

                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
  className={cn(
    "relative px-6 py-2 font-medium border rounded-full overflow-hidden transition-all duration-300 ease-in-out",
    "before:absolute before:inset-0 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 focus:outline-none focus:ring-2 focus:ring-primary/50",
    scrolled || pathname !== "/"
      ? "text-primary border-primary before:bg-primary hover:text-white hover:bg-black hover:scale-105 hover:shadow-lg"
      : "text-black border-black hover:text-white hover:bg-black hover:scale-105 hover:shadow-lg"
  )}
>
  Submit Papers
</button>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className={cn("h-6 w-6", isOpen ? "hidden" : "block", scrolled || pathname !== "/" ? "text-black" : "text-white")} />
            <X className={cn("h-6 w-6", isOpen ? "block" : "hidden", scrolled || pathname !== "/" ? "text-black" : "text-white")} />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-20 bg-background z-40 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col p-6 space-y-6 bg-white">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-lg font-medium tracking-wider transition-colors hover:text-primary",
                pathname === item.path ? "text-primary border-b border-primary pb-1" : "text-gray-900",
                
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
