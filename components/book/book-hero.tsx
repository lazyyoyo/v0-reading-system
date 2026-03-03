"use client"

import Image from "next/image"
import { ArrowUpRight, Bookmark, Share2, Download, ChevronUp, ChevronDown } from "lucide-react"
import { useState } from "react"

interface BookHeroProps {
  title: string
  author: string
  tagline: string
  cover: string
}

export function BookHero({ title, author, tagline, cover }: BookHeroProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)

  return (
    <section className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
      {/* Cover section with navigation */}
      <div className="flex items-center gap-4">
        {/* Vertical scroll buttons */}
        <div className="hidden flex-col gap-3 lg:flex">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Previous book"
          >
            <ChevronUp className="h-4 w-4" />
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Next book"
          >
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>

        {/* Book cover */}
        <div className="relative aspect-[2/3] w-48 overflow-hidden rounded-xl bg-secondary shadow-xl sm:w-56 lg:w-64">
          <Image
            src={cover}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
            priority
          />
          {/* Series badge */}
          <div className="absolute bottom-3 left-3 flex h-7 w-7 items-center justify-center rounded-full bg-primary/80 text-xs font-bold text-primary-foreground backdrop-blur-sm">
            6
          </div>
        </div>
      </div>

      {/* Book info */}
      <div className="flex-1">
        <h1 className="font-serif text-3xl font-bold leading-tight text-foreground lg:text-4xl xl:text-5xl text-balance">
          {title}
        </h1>
        <p className="mt-3 text-sm font-semibold text-foreground">{author}</p>
        <p className="mt-3 max-w-md text-sm italic leading-relaxed text-muted-foreground">
          {tagline}
        </p>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105">
            Start reading
            <ArrowUpRight className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                isBookmarked
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
              aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
            >
              <Bookmark className="h-4 w-4" fill={isBookmarked ? "currentColor" : "none"} />
            </button>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Share book"
            >
              <Share2 className="h-4 w-4" />
            </button>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Download book"
            >
              <Download className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Separator */}
        <div className="mt-6 h-px w-full bg-border" />
      </div>
    </section>
  )
}
