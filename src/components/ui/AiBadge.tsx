// Visible disclosure for AI-generated images of people. Rendered as page content
// (not burned into the image) so it stays legible, can't be cropped off and is read
// by screen readers.
export function AiBadge({ label = "AI-generated · Sample" }: { label?: string }) {
  return (
    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink/75 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
      <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor" aria-hidden="true">
        <path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" />
      </svg>
      {label}
    </span>
  );
}
