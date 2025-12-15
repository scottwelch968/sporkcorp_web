export type FeatureItem = {
  title: string;
  desc: string;
  bullets?: readonly string[];
};

export function FeatureList({ items }: { items: readonly FeatureItem[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {items.map((x) => (
        <div key={x.title} className="mkt-card-strong p-6">
          <div className="text-lg font-semibold">{x.title}</div>
          <p className="mt-2 text-sm text-muted">{x.desc}</p>
          {x.bullets?.length ? (
            <ul className="mt-4 space-y-2 text-sm text-muted list-disc pl-5">
              {x.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
}

