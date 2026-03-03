"use client"

import { Search, Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AppHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-4 lg:px-8">
      {/* Search bar */}
      <div className="relative max-w-md flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search book name, author, edition ..."
          className="h-10 w-full rounded-lg border border-border bg-card pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          aria-label="Search books"
        />
      </div>

      {/* User section */}
      <div className="flex items-center gap-4">
        <span className="hidden text-sm font-medium text-foreground md:block">Alexander Mark</span>
        <Avatar className="h-9 w-9">
          <AvatarImage src="/images/avatar-user.jpg" alt="Alexander Mark" />
          <AvatarFallback className="bg-secondary text-secondary-foreground">AM</AvatarFallback>
        </Avatar>
        <button
          className="relative flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
