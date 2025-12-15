import { Container } from "@/components/marketing/Container";
import { Section } from "@/components/marketing/Section";
import { PricingCalculator } from "@/components/marketing/PricingCalculator";
import { CompareTable } from "@/components/marketing/CompareTable";
import { Badge } from "@/components/marketing/Badge";

export default function PricingPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Badge variant="brand">Pricing</Badge>
            <span className="mkt-eyebrow">Priced for productivity: workspaces + integrations</span>
          </div>
          <h1 className="mkt-h1">Simple pricing that scales with real work</h1>
          <p className="mkt-lede">Pay for what drives outcomes: active workspaces and connected integrations — not seat-count games.</p>
          <div className="mt-10"><PricingCalculator /></div>
        </Container>
      </Section>

      <Section className="bg-fog">
        <Container>
          <h2 className="mkt-h2">Compare plans</h2>
          <p className="mkt-lede">Everything is built around Spaces, Assistants, and Integrations — with governance included.</p>

          <div className="mt-10">
            <CompareTable
              columns={[
                { key: "starter", label: "Starter" },
                { key: "team", label: "Team", highlight: true },
                { key: "scale", label: "Scale" }
              ]}
              rows={[
                { label: "Spaces (workspaces)", values: { starter: "1", team: "Up to 10 included", scale: "Unlimited" } },
                { label: "Assistants", values: { starter: "Core", team: "Unlimited", scale: "Unlimited + custom" } },
                { label: "Integrations", values: { starter: "3", team: "25 included", scale: "250+ / custom" } },
                { label: "Workflow execution", values: { starter: "Basic", team: "Advanced", scale: "Enterprise" } },
                { label: "Audit history", values: { starter: "Limited", team: "Included", scale: "Included + export" } },
                { label: "Governance controls", values: { starter: "Baseline", team: "Standard", scale: "Advanced" } },
                { label: "SSO / SCIM", values: { starter: "—", team: "—", scale: "Included" } }
              ]}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
