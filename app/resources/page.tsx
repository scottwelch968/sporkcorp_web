import Link from "next/link";
import { Container } from "@/components/marketing/Container";
import { Section } from "@/components/marketing/Section";
import { Badge } from "@/components/marketing/Badge";
import { Content } from "@/lib/content";

export default function ResourcesPage() {
  return (
    <Section>
      <Container>
        <div className="flex items-center gap-3">
          <Badge variant="brand">Resources</Badge>
          <span className="mkt-eyebrow">Docs, patterns, and playbooks</span>
        </div>

        <h1 className="mkt-h1">Resources</h1>
        <p className="mkt-lede">Practical guidance for running work in Spork.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {Content.pages.resources.map((x) => (
            <Link key={x.href} href={x.href} className="mkt-card-strong p-6 hover:shadow-2 transition">
              <div className="text-lg font-semibold">{x.title}</div>
              <p className="mt-2 text-sm text-muted">{x.desc}</p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
