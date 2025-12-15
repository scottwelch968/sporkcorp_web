export function Container({ className = '', children }: { className?: string; children: React.ReactNode }) { return <div className={`max-w-container mx-auto px-6 ${className}`}>{children}</div>; }
