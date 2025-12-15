import { Container } from "@/components/marketing/Container";
import { Section } from "@/components/marketing/Section";
import { Badge } from "@/components/marketing/Badge";
import { Card } from "@/components/marketing/Card";
import { CTA } from "@/components/marketing/CTA";

const PARTNERS = [
  { t: "Agencies", d: "Offer Spork as your execution layer: standardized outputs, client Spaces, repeatable workflows." },
  { t: "IT services & MSPs", d: "Deploy governed AI workflows across SMB clients with controlled integrations." },
  { t: "Software vendors", d: "Create an integration that turns your product into an execution endpoint." },
];

export default function PartnersPage() {
  return (
    <Section>
      <Container>
        <div className="flex items-center gap-3">
          <Badge variant="brand">Partners</Badge>
          <span className="mkt-eyebrow">Services-first distribution</span>
        </div>

        <h1 className="mkt-h1">Partner with Spork</h1>
        <p className="mkt-lede">Partners turn workflows into a repeatable product. Incentives can be tied to activation and retention.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {PARTNERS.map((p) => <Card key={p.t} title={p.t} description={p.d} />)}
        </div>

        <div className="mt-12">
          <CTA title="Want commissions or residuals?"
               desc="If you manage SMB clients, we can structure a partner program around outcomes."
               primaryHref="/contact"
               primaryLabel="Talk to us"
               secondaryHref="/pricing"
               secondaryLabel="See pricing" />
        </div>
      </Container>
    </Section>
  );
}
