"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="mb-8">
      <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground lg:text-5xl text-balance">
        Happy reading,<br />Harvey
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
        {"Wow! you've delved deep into the wizarding world's secrets. Have Harry's parents died yet? Oops, looks like you're not there yet. Get reading now!"}
      </p>
      <Link
        href="/book/1"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
      >
        Start reading
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </section>
  )
}
