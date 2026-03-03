"use client"

import Image from "next/image"
import { MoreHorizontal } from "lucide-react"

const series = [
  {
    id: 1,
    title: "A Legend of Ice and Fire: The Ice Horse",
    volumes: 2,
    chapters: "8 chapters each vol",
    cover: "/images/book-series-1.jpg",
  },
]

export function SeriesCollection() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-serif text-xl font-semibold text-foreground">New Series Collection</h2>
        <button className="text-muted-foreground hover:text-foreground" aria-label="More options">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {series.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 rounded-xl bg-card p-3 shadow-sm"
          >
            <div className="relative h-16 w-12 flex-shrink-0 overflow-hidden rounded-md bg-secondary">
              <Image
                src={item.cover}
                alt={item.title}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-medium text-foreground">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.chapters}</p>
            </div>
            <span className="flex-shrink-0 text-sm font-medium text-muted-foreground">
              {item.volumes} vol
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
