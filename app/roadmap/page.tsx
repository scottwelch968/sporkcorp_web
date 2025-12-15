import { Container } from "@/components/marketing/Container";
import { Section } from "@/components/marketing/Section";
import { Badge } from "@/components/marketing/Badge";
import { Card } from "@/components/marketing/Card";

const ITEMS = [
  { t: "Integration catalog", d: "First-class integrations across CRM, docs, email, automation, and ops." },
  { t: "Workflow templates", d: "Repeatable workflows packaged by role and use case." },
  { t: "Governance controls", d: "Org controls, audit exports, and safer execution defaults." },
  { t: "Partner program", d: "Agency-first distribution with incentives tied to outcomes." },
];

export default function RoadmapPage() {
  return (
    <Section>
      <Container>
        <div className="flex items-center gap-3">
          <Badge variant="brand">Roadmap</Badge>
          <span className="mkt-eyebrow">Where we’re going</span>
        </div>

        <h1 className="mkt-h1">Roadmap</h1>
        <p className="mkt-lede">High-level direction. No dates. No fluff. Execution wins.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {ITEMS.map((x) => <Card key={x.t} title={x.t} description={x.d} />)}
        </div>
      </Container>
    </Section>
  );
}
