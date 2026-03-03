import Image from "next/image"

interface BookReviewProps {
  name: string
  avatar: string
  text: string
}

export function BookReview({ name, avatar, text }: BookReviewProps) {
  return (
    <div className="flex gap-3">
      <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-secondary">
        <Image
          src={avatar}
          alt={name}
          fill
          className="object-cover"
          sizes="40px"
        />
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">{name}</p>
        <p className="mt-1 text-sm italic leading-relaxed text-muted-foreground">{text}</p>
      </div>
    </div>
  )
}
