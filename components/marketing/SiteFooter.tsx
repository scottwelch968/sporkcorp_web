import Link from "next/link";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <Container className="py-12">
        <div className="flex flex-col md:flex-row gap-10 md:items-start md:justify-between">
          <div>
            <div className="font-semibold">Spork</div>
            <p className="mt-2 max-w-sm text-sm text-muted">
              AI operating system for business — where teams run work, not just ask questions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <div className="space-y-2">
              <div className="font-medium text-ink">Product</div>
              <Link className="block text-muted hover:text-ink" href="/product">Overview</Link>
              <Link className="block text-muted hover:text-ink" href="/integrations">Integrations</Link>
              <Link className="block text-muted hover:text-ink" href="/pricing">Pricing</Link>
              <Link className="block text-muted hover:text-ink" href="/security">Security</Link>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-ink">Company</div>
              <Link className="block text-muted hover:text-ink" href="/company">About</Link>
              <Link className="block text-muted hover:text-ink" href="/partners">Partners</Link>
              <Link className="block text-muted hover:text-ink" href="/careers">Careers</Link>
              <Link className="block text-muted hover:text-ink" href="/press">Press</Link>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-ink">Resources</div>
              <Link className="block text-muted hover:text-ink" href="/resources">Library</Link>
              <Link className="block text-muted hover:text-ink" href="/roadmap">Roadmap</Link>
              <Link className="block text-muted hover:text-ink" href="/status">Status</Link>
              <Link className="block text-muted hover:text-ink" href="/contact">Contact</Link>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-ink">Legal</div>
              <Link className="block text-muted hover:text-ink" href="/legal/privacy">Privacy</Link>
              <Link className="block text-muted hover:text-ink" href="/legal/terms">Terms</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-muted">© {new Date().getFullYear()} Spork. All rights reserved.</div>
      </Container>
    </footer>
  );
}
