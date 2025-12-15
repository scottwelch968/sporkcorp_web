import Link from "next/link";
import { Container } from "@/components/marketing/Container";
import { Section } from "@/components/marketing/Section";
import { Badge } from "@/components/marketing/Badge";
import { Card } from "@/components/marketing/Card";
import { CTA } from "@/components/marketing/CTA";
import { Content } from "@/lib/content";

export default function IntegrationsPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Badge variant="brand">Integrations</Badge>
            <span className="mkt-eyebrow">First-class value</span>
          </div>
          <h1 className="mkt-h1">Connect the tools you already run on</h1>
          <p className="mkt-lede">{Content.valuePillars.find((x) => x.title === "Integrations")?.desc}</p>

          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {Object.entries(Content.integrationCategories).map(([cat, items]) => (
              <Card key={cat} title={cat} description={[...items].join(" • ")} />
            ))}
          </div>

          <div className="mt-12">
            <CTA
              title="Work doesn’t happen in chat. It happens in your stack."
              desc="Integrations live inside Spaces alongside Assistants, so execution is repeatable and governed."
              primaryHref="/pricing"
              primaryLabel="Price it out"
              secondaryHref="/contact"
              secondaryLabel="Request an integration"
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
