"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

function getWeekDates(baseDate: Date) {
  const startOfWeek = new Date(baseDate)
  const day = startOfWeek.getDay()
  startOfWeek.setDate(startOfWeek.getDate() - day)
  
  return daysOfWeek.map((name, i) => {
    const d = new Date(startOfWeek)
    d.setDate(d.getDate() + i)
    return { name, date: d.getDate(), full: d }
  })
}

export function ScheduleReading() {
  const [baseDate, setBaseDate] = useState(() => new Date())
  const today = new Date()
  const weekDates = getWeekDates(baseDate)

  const prevWeek = () => {
    setBaseDate((prev) => {
      const d = new Date(prev)
      d.setDate(d.getDate() - 7)
      return d
    })
  }

  const nextWeek = () => {
    setBaseDate((prev) => {
      const d = new Date(prev)
      d.setDate(d.getDate() + 7)
      return d
    })
  }

  return (
    <section className="mb-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-serif text-lg font-semibold text-foreground">Schedule Reading</h2>
        <div className="flex gap-1">
          <button
            onClick={prevWeek}
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Previous week"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={nextWeek}
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Next week"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {weekDates.map(({ name, date, full }) => {
          const isToday =
            full.getDate() === today.getDate() &&
            full.getMonth() === today.getMonth() &&
            full.getFullYear() === today.getFullYear()
          const isSunday = full.getDay() === 0
          return (
            <button
              key={name}
              className={`flex flex-col items-center gap-1 rounded-xl py-2 text-xs transition-colors ${
                isToday
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <span className={`font-medium ${isSunday && !isToday ? "text-accent" : ""}`}>{name}</span>
              <span className={`text-sm font-semibold ${isSunday && !isToday ? "text-accent" : ""}`}>{date}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
