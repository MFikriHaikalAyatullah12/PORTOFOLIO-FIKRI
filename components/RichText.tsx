// Renders **teks** as <strong>, used for profile.about.
export default function RichText({ text, className }: { text: string; className?: string }) {
  const parts = text.split("**");
  return (
    <p className={className}>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-foreground">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  );
}
