import { Container } from "@/components/marketing/Container";
import { Section } from "@/components/marketing/Section";
import { Badge } from "@/components/marketing/Badge";

export default function StatusPage() {
  return (
    <Section>
      <Container>
        <div className="flex items-center gap-3">
          <Badge variant="brand">Status</Badge>
          <span className="mkt-eyebrow">Service health</span>
        </div>

        <h1 className="mkt-h1">Status</h1>
        <p className="mkt-lede">Placeholder status page. Replace with your status system or embed.</p>

        <div className="mt-10 mkt-card p-6">
          <div className="text-sm font-medium text-ink">All systems operational</div>
          <div className="mt-1 text-sm text-muted">No incidents reported.</div>
        </div>
      </Container>
    </Section>
  );
}
