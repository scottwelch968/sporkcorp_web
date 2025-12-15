import { Container } from "@/components/marketing/Container";
import { Section } from "@/components/marketing/Section";
import { Badge } from "@/components/marketing/Badge";
import { Card } from "@/components/marketing/Card";

export default function Governance() {
  return (
    <Section>
      <Container>
        <div className="flex items-center gap-3">
          <Badge variant="brand">Resources</Badge>
          <span className="mkt-eyebrow">Governance</span>
        </div>

        <h1 className="mkt-h1">Governance by default</h1>
        <p className="mkt-lede">AI adoption fails when it’s unmanaged. Governance is what makes AI usable at scale.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          <Card title="Controlled execution" description="Integrations run with defined scopes and controlled inputs/outputs." />
          <Card title="Audit history" description="Know what ran, what changed, and what shipped inside each Space." />
          <Card title="Sensible defaults" description="Guardrails don’t need a policy committee to be effective." />
        </div>
      </Container>
    </Section>
  );
}
