"use client"

import { MoreHorizontal, Check } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const friends = [
  {
    id: 1,
    name: "Roberto Jordan",
    avatar: "/images/avatar-roberto.jpg",
    comment: "What a delightful and magical chapter it is! It indeed transports readers to the wizarding world..",
    chapter: "Chapter Five: Diagon Alley",
    time: "2 min ago",
  },
  {
    id: 2,
    name: "Anna Henry",
    avatar: "/images/avatar-anna.jpg",
    comment: "I finished reading the chapter last night and can't stop thinking about the plot twists!",
    chapter: "Chapter Three: The Letters",
    time: "15 min ago",
  },
]

export function ReaderFriends() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-serif text-lg font-semibold text-foreground">Reader Friends</h2>
        <button className="text-muted-foreground hover:text-foreground" aria-label="More options">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {friends.map((friend) => (
          <div key={friend.id} className="flex gap-3">
            {/* Timeline dot */}
            <div className="flex flex-col items-center">
              <Avatar className="h-10 w-10 flex-shrink-0">
                <AvatarImage src={friend.avatar} alt={friend.name} />
                <AvatarFallback className="bg-secondary text-secondary-foreground">
                  {friend.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="mt-2 w-px flex-1 border-l border-dashed border-border" />
            </div>
            <div className="flex-1 pb-4">
              <p className="text-sm font-semibold text-foreground">{friend.name}</p>
              <p className="mt-1 text-xs italic leading-relaxed text-muted-foreground">
                {friend.comment}
              </p>
              <div className="mt-2 flex items-center gap-2">
                <Check className="h-3 w-3 text-accent" />
                <span className="text-xs font-medium text-accent">{friend.chapter}</span>
              </div>
              <p className="mt-1 text-[10px] text-muted-foreground">{friend.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
