import { Container } from "@/components/marketing/Container";
import { Section } from "@/components/marketing/Section";
import { Badge } from "@/components/marketing/Badge";
import { Card } from "@/components/marketing/Card";
import { Content } from "@/lib/content";

export default function UseCasesPage() {
  return (
    <Section>
      <Container>
        <div className="flex items-center gap-3">
          <Badge variant="brand">Use cases</Badge>
          <span className="mkt-eyebrow">From one project to an org</span>
        </div>

        <h1 className="mkt-h1">Built for teams that have real work to run</h1>
        <p className="mkt-lede">Spork makes AI usable at scale — consistent outputs, controlled execution, shared standards.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {Content.useCases.map((x) => (
            <Card key={x.title} title={x.title} description={x.desc}>
              <ul className="mt-3 list-disc pl-5 text-sm text-muted space-y-1">
                {x.outcomes.map((o) => <li key={o}>{o}</li>)}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
