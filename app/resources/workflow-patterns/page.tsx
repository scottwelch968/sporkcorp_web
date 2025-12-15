import { Container } from "@/components/marketing/Container";
import { Section } from "@/components/marketing/Section";
import { Badge } from "@/components/marketing/Badge";
import { Card } from "@/components/marketing/Card";
import { Content } from "@/lib/content";

export default function WorkflowPatterns() {
  return (
    <Section>
      <Container>
        <div className="flex items-center gap-3">
          <Badge variant="brand">Resources</Badge>
          <span className="mkt-eyebrow">Workflow patterns</span>
        </div>

        <h1 className="mkt-h1">Workflow patterns</h1>
        <p className="mkt-lede">A few standard patterns you can repeat inside Spaces.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {Content.useCases.map((u) => (
            <Card key={u.title} title={u.title} description={u.desc}>
              <ul className="mt-3 list-disc pl-5 text-sm text-muted space-y-1">
                {u.outcomes.map((o) => <li key={o}>{o}</li>)}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
