import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary: "bg-accent text-ink hover:bg-amber-400 shadow-sm",
  secondary: "bg-brand text-white hover:bg-brand-dark",
  ghost: "border border-line bg-white text-ink hover:border-brand hover:text-brand",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  external = false,
}: {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  const cls = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-semibold transition-colors ${styles[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  id,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  id?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand">{eyebrow}</p>
      <h2 id={id} className="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-lg text-muted">{text}</p>}
    </div>
  );
}
