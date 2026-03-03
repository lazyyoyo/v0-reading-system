"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, BookOpen, Clock, Bookmark, Settings, Menu } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { icon: Home, href: "/", label: "Home" },
  { icon: BookOpen, href: "/book/1", label: "Library" },
  { icon: Clock, href: "#", label: "History" },
  { icon: Bookmark, href: "#", label: "Bookmarks" },
  { icon: Settings, href: "#", label: "Settings" },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-16 flex-col items-center border-r border-border bg-background py-6 lg:w-20">
      {/* Logo */}
      <Link href="/" className="mb-10" aria-label="Reading System Home">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-foreground">
          <path d="M16 4C14 4 12 6 10 8C8 10 6 14 6 16C6 22 10 28 16 28C22 28 26 22 26 16C26 14 24 10 22 8C20 6 18 4 16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M13 12C13 12 14 14 16 14C18 14 19 12 19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 18C12 18 14 21 16 21C18 21 20 18 20 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </Link>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col items-center gap-2" aria-label="Main navigation">
        {navItems.map(({ icon: Icon, href, label }) => {
          const isActive = pathname === href
          return (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-200",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
            </Link>
          )
        })}
      </nav>

      {/* Bottom menu */}
      <button
        className="flex h-11 w-11 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        aria-label="More options"
      >
        <Menu className="h-5 w-5" />
      </button>
    </aside>
  )
}
