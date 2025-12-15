import Link from "next/link";
import { Container } from "./Container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">Spork</Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          <Link href="/product" className="hover:text-ink">Product</Link>
          <Link href="/integrations" className="hover:text-ink">Integrations</Link>
          <Link href="/use-cases" className="hover:text-ink">Use cases</Link>
          <Link href="/pricing" className="hover:text-ink">Pricing</Link>
          <Link href="/security" className="hover:text-ink">Security</Link>
          <Link href="/resources" className="hover:text-ink">Resources</Link>
          <Link href="/partners" className="hover:text-ink">Partners</Link>
          <Link href="/company" className="hover:text-ink">Company</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link className="mkt-btn-ghost hidden sm:inline-flex" href="/login">Log in</Link>
          <Link className="mkt-btn-primary" href="/signup">Start free</Link>
        </div>
      </Container>
    </header>
  );
}
