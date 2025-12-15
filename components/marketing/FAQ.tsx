export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((x) => (
        <details key={x.q} className="mkt-card p-5">
          <summary className="cursor-pointer font-medium text-ink">{x.q}</summary>
          <p className="mt-3 text-sm text-muted">{x.a}</p>
        </details>
      ))}
    </div>
  );
}
