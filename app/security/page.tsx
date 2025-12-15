import { Container } from "@/components/marketing/Container";
import { Section } from "@/components/marketing/Section";
import { Badge } from "@/components/marketing/Badge";
import { Card } from "@/components/marketing/Card";

export default function SecurityPage() {
  return (
    <Section>
      <Container>
        <div className="flex items-center gap-3">
          <Badge variant="brand">Security</Badge>
          <span className="mkt-eyebrow">Governance by default</span>
        </div>

        <h1 className="mkt-h1">Governance without friction</h1>
        <p className="mkt-lede">Controlled execution, auditable history, and business-safe defaults.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          <Card title="Controlled execution" description="Integrations run with defined scopes and controlled inputs/outputs." />
          <Card title="Auditability" description="Trace what ran, what changed, and what was produced inside each Space." />
          <Card title="Business-safe defaults" description="Guardrails are built-in so teams can move fast without chaos." />
        </div>
      </Container>
    </Section>
  );
}
