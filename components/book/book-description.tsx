interface BookDescriptionProps {
  paragraphs: string[]
}

export function BookDescription({ paragraphs }: BookDescriptionProps) {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-sm font-bold text-foreground">Description</h2>
      <div className="flex flex-col gap-4">
        {paragraphs.map((text, i) => (
          <p key={i} className="text-sm leading-relaxed text-muted-foreground">
            {text}
          </p>
        ))}
      </div>
    </div>
  )
}
