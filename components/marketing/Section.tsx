export function Section({ className = '', children }: { className?: string; children: React.ReactNode }) { return <section className={`mkt-section ${className}`}>{children}</section>; }
