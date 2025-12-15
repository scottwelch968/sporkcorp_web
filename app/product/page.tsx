import Link from "next/link";
import { Container } from "@/components/marketing/Container";
import { Section } from "@/components/marketing/Section";
import { Badge } from "@/components/marketing/Badge";
import { FeatureList } from "@/components/marketing/FeatureList";
import { CTA } from "@/components/marketing/CTA";
import { Content } from "@/lib/content";

export default function ProductPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Badge variant="brand">Product</Badge>
            <span className="mkt-eyebrow">Operating system, not chat history</span>
          </div>

          <h1 className="mkt-h1">{Content.brand.tagline}</h1>
          <p className="mkt-lede">{Content.brand.oneLiner}</p>

          <div className="mt-10">
            <FeatureList items={Content.valuePillars} />
          </div>

          <div className="mt-12">
            <CTA
              title="AI is the reasoning layer. Spork is the execution layer."
              desc="Connect your stack, run workflows, and keep outputs consistent across teams and clients."
              primaryHref="/integrations"
              primaryLabel="View integrations"
              secondaryHref="/pricing"
              secondaryLabel="Pricing"
            />
          </div>
        </Container>
      </Section>

      <Section className="bg-fog">
        <Container>
          <h2 className="mkt-h2">What Spork replaces</h2>
          <p className="mkt-lede">Fragmented AI usage, subscription chaos, inconsistent outputs, and workflows trapped in chat history.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            <div className="mkt-card-strong p-6">
              <div className="text-lg font-semibold">Tool sprawl</div>
              <p className="mt-2 text-sm text-muted">Reduce AI tool sprawl and subscription chaos.</p>
            </div>
            <div className="mkt-card-strong p-6">
              <div className="text-lg font-semibold">Inconsistent outputs</div>
              <p className="mt-2 text-sm text-muted">Create consistent outputs across teams and clients.</p>
            </div>
            <div className="mkt-card-strong p-6">
              <div className="text-lg font-semibold">Power-user bottlenecks</div>
              <p className="mt-2 text-sm text-muted">Make AI usable at scale, not just by power users.</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
