import { Container } from "@/components/marketing/Container";
import { Section } from "@/components/marketing/Section";
import { Badge } from "@/components/marketing/Badge";
import { CTA } from "@/components/marketing/CTA";
import { FeatureList } from "@/components/marketing/FeatureList";
import { Content } from "@/lib/content";

export default function CompanyPage() {
  return (
    <Section>
      <Container>
        <div className="flex items-center gap-3">
          <Badge variant="brand">Company</Badge>
          <span className="mkt-eyebrow">Built for serious operations</span>
        </div>

        <h1 className="mkt-h1">Spork exists to make AI usable at scale</h1>
        <p className="mkt-lede">
          Businesses don’t need more AI tools. They need systems that run work — governed, repeatable, and connected to the software stack.
        </p>

        <div className="mt-10">
          <FeatureList items={Content.valuePillars} />
        </div>

        <div className="mt-12">
          <CTA
            title="Spork is the OS layer between intelligence and execution"
            desc="AI is the reasoning layer. Integrations are the execution layer. Spaces are the container. Governance is the safety system."
            primaryHref="/product"
            primaryLabel="Product overview"
            secondaryHref="/pricing"
            secondaryLabel="Pricing"
          />
        </div>
      </Container>
    </Section>
  );
}
