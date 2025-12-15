export type Testimonial = { quote: string; who: string };

export function TestimonialRow({ items }: { items: readonly Testimonial[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {items.map((t) => (
        <div key={t.quote} className="mkt-card p-6">
          <div className="text-sm text-muted">“{t.quote}”</div>
          <div className="mt-4 text-xs font-medium text-ink">{t.who}</div>
        </div>
      ))}
    </div>
  );
}
