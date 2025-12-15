import { Container } from "@/components/marketing/Container";
import { Section } from "@/components/marketing/Section";
import { Badge } from "@/components/marketing/Badge";
import { Card } from "@/components/marketing/Card";

const ROLES = [
  { t: "Founding engineer", d: "Own core workflows, integrations, and governance primitives." },
  { t: "Product designer", d: "Make complexity feel simple. Build interfaces teams love." },
  { t: "Developer relations", d: "Grow the integration ecosystem and partners." },
];

export default function CareersPage() {
  return (
    <Section>
      <Container>
        <div className="flex items-center gap-3">
          <Badge variant="brand">Careers</Badge>
          <span className="mkt-eyebrow">Build the OS for work</span>
        </div>

        <h1 className="mkt-h1">Careers</h1>
        <p className="mkt-lede">Early team. High leverage. Real software. Real outcomes.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {ROLES.map((r) => <Card key={r.t} title={r.t} description={r.d} />)}
        </div>

        <div className="mt-12 text-sm text-muted">
          Send a short intro and what you’d build first: <a className="underline" href="mailto:hello@spork.ai">hello@spork.ai</a>
        </div>
      </Container>
    </Section>
  );
}
