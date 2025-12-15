import Link from "next/link";

export function CTA({
  title,
  desc,
  primaryHref = "/signup",
  primaryLabel = "Start free",
  secondaryHref = "/contact",
  secondaryLabel = "Talk to sales",
}: {
  title: string;
  desc: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <div className="mkt-card-strong p-8 md:p-10">
      <div className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</div>
      <p className="mt-3 text-sm md:text-base text-muted max-w-2xl">{desc}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link className="mkt-btn-primary" href={primaryHref}>{primaryLabel}</Link>
        <Link className="mkt-btn-secondary" href={secondaryHref}>{secondaryLabel}</Link>
      </div>
    </div>
  );
}
