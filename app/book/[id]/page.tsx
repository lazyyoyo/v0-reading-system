import { AppSidebar } from "@/components/app-sidebar"
import { AppHeader } from "@/components/app-header"
import { BookHero } from "@/components/book/book-hero"
import { BookDescription } from "@/components/book/book-description"
import { BookMetadata } from "@/components/book/book-metadata"
import { BookReview } from "@/components/book/book-review"

const bookData = {
  id: 1,
  title: "Harry Potter: Half Blood Prince",
  author: "JK Rowling",
  tagline: "Get ready to uncover the dark secrets and betrayals in the book. A thrilling adventure awaits you.",
  cover: "/images/book-hp.jpg",
  description: [
    "The story takes place during Harry's sixth year at Hogwarts School of Witchcraft and Wizardry, where he discovers more about Lord Voldemort's past and the prophecy that foretells his defeat.",
    'With action-packed sequences, shocking twists, and moments of heart-wrenching tragedy, "Half-Blood Prince" is a must-read for any fan of the Harry Potter series.',
  ],
  editors: "J.K. Rowling (author), Christopher Reath, Alena Gestabon, Steve Korg",
  language: "Standard English (USA & UK)",
  format: "Paperback",
  formatDetails: "paper textured, full colour, 345 pages",
  isbn: "987 3 32564 455 B",
  review: {
    name: "Roberto Jordan",
    avatar: "/images/avatar-roberto.jpg",
    text: "What a delightful and magical book it is! It indeed transports readers to the wizarding world.",
  },
}

export default async function BookDetailPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      <main className="flex-1 pl-16 lg:pl-20">
        <AppHeader />
        <div className="px-6 pb-8 lg:px-8">
          <BookHero
            title={bookData.title}
            author={bookData.author}
            tagline={bookData.tagline}
            cover={bookData.cover}
          />
          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:gap-16">
            <div className="flex-1 min-w-0">
              <BookDescription paragraphs={bookData.description} />
              <BookReview
                name={bookData.review.name}
                avatar={bookData.review.avatar}
                text={bookData.review.text}
              />
            </div>
            <div className="w-full flex-shrink-0 lg:w-72">
              <BookMetadata
                editors={bookData.editors}
                language={bookData.language}
                format={bookData.format}
                formatDetails={bookData.formatDetails}
                isbn={bookData.isbn}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
