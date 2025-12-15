export function Card({ title, description, children }: { title: string; description?: string; children?: React.ReactNode }) {
  return (
    <div className="mkt-card-strong p-6">
      <div className="text-lg font-semibold">{title}</div>
      {description ? <p className="mt-2 text-sm text-muted">{description}</p> : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  );
}
