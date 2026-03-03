import { AppSidebar } from "@/components/app-sidebar"
import { AppHeader } from "@/components/app-header"
import { HeroSection } from "@/components/dashboard/hero-section"
import { PopularBooks } from "@/components/dashboard/popular-books"
import { SeriesCollection } from "@/components/dashboard/series-collection"
import { ReadingProgress } from "@/components/dashboard/reading-progress"
import { ScheduleReading } from "@/components/dashboard/schedule-reading"
import { ReaderFriends } from "@/components/dashboard/reader-friends"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      <main className="flex-1 pl-16 lg:pl-20">
        <AppHeader />
        <div className="flex flex-col gap-6 px-6 pb-8 lg:flex-row lg:gap-8 lg:px-8">
          {/* Left: Main content */}
          <div className="flex-1 min-w-0">
            <HeroSection />
            <PopularBooks />
            <SeriesCollection />
          </div>
          {/* Right: Sidebar widgets */}
          <div className="w-full flex-shrink-0 lg:w-80 xl:w-96">
            <ReadingProgress />
            <ScheduleReading />
            <ReaderFriends />
          </div>
        </div>
      </main>
    </div>
  )
}
