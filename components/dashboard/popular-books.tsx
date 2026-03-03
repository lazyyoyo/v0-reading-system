"use client"

import Image from "next/image"
import Link from "next/link"
import { MoreHorizontal } from "lucide-react"

const books = [
  { id: 1, title: "The World of Ice and Fire", cover: "/images/book-1.jpg" },
  { id: 2, title: "Fantastic Beasts Volume II", cover: "/images/book-2.jpg" },
  { id: 3, title: "Game of Thrones Volume III", cover: "/images/book-3.jpg" },
  { id: 4, title: "The Wise Man's Fear", cover: "/images/book-4.jpg" },
]

export function PopularBooks() {
  return (
    <section className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-serif text-xl font-semibold text-foreground">Popular Now</h2>
        <button className="text-muted-foreground hover:text-foreground" aria-label="More options">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {books.map((book) => (
          <Link key={book.id} href={`/book/${book.id}`} className="group">
            <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-secondary">
              <Image
                src={book.cover}
                alt={book.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </div>
            <p className="mt-2 text-xs font-medium leading-snug text-foreground">{book.title}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
