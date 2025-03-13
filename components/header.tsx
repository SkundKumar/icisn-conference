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
  { name: "KEYNOTE SPEAKERS", path: "/keynote-speakers" },
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
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <span className={cn("text-2xl font-bold tracking-tighter font-playfair",
              scrolled ? "text-primary" :pathname === "/" ?  "text-white" : "text-primary/70"
            )}>ICISN</span>
          </Link>
          <nav className="hidden md:flex  space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  
                  "text-sm font-medium tracking-wider transition-colors",
                  
                  
                  pathname === item.path ? "text-primary border-b-2 border-primary pb-1" : pathname === "/" ?  "text-white" : "text-muted-foreground",
                )}
              >
                {item.name}
              </Link>
              
            ))}
            
          </nav>
          <div className="cursor-pointer border-2 border-black bg-gray-500 pb-[7px] transition ease-in-out duration-100 select-none active:pb-0 active:mb-[10px] active:translate-y-[10px]">
      <button className="bg-gray-300 border-2 font-mono border-white px-2 py-1">
        <span className="text-sm text-black tracking-wider">Submit Paper</span>
      </button>
    </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className={cn("h-6 w-6", isOpen ? "hidden" : "block")} />
            <X className={cn("h-6 w-6", isOpen ? "block" : "hidden")} />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-20 bg-background z-40 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex flex-col p-6 space-y-6 bg-white">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-lg font-medium tracking-wider transition-colors hover:text-primary",
                pathname === item.path ? "text-primary border-b border-primary pb-1" : "text-muted-foreground",
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

