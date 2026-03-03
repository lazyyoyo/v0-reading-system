interface BookMetadataProps {
  editors: string
  language: string
  format: string
  formatDetails: string
  isbn: string
}

export function BookMetadata({ editors, language, format, formatDetails, isbn }: BookMetadataProps) {
  const items = [
    { label: "Editors", value: editors },
    { label: "Language", value: language },
    { label: format, value: `${formatDetails}\nISBN: ${isbn}` },
  ]

  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => (
        <div key={item.label}>
          <h3 className="mb-1 text-sm font-bold text-foreground">{item.label}</h3>
          <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  )
}
