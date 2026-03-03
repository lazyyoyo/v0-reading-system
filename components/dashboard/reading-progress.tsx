"use client"

import Image from "next/image"

export function ReadingProgress() {
  const currentPage = 154
  const totalPages = 300
  const progressPercent = Math.round((currentPage / totalPages) * 100)

  return (
    <section className="mb-6 rounded-2xl bg-card p-5 shadow-sm">
      <div className="flex gap-4">
        <div className="relative h-40 w-28 flex-shrink-0 overflow-hidden rounded-lg bg-secondary">
          <Image
            src="/images/book-current.jpg"
            alt="The Cambers of Secrets"
            fill
            className="object-cover"
            sizes="112px"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <h3 className="font-serif text-lg font-semibold text-foreground">
            The Cambers of Secrets
          </h3>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-lg font-bold text-accent">{currentPage}</span>
            <span className="text-sm text-muted-foreground">/ {totalPages} pages</span>
          </div>
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
            Harry as he returns to Hogwarts school of witchcraft and wizardry for his 2nd year, only to discover that...
          </p>
          <p className="mt-auto text-xs italic text-muted-foreground">{"~ JK Rowlings"}</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
          <span>Progress</span>
          <span>{progressPercent}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-secondary" role="progressbar" aria-valuenow={progressPercent} aria-valuemin={0} aria-valuemax={100}>
          <div
            className="h-full rounded-full bg-accent transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </section>
  )
}
