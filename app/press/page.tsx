import { Container } from "@/components/marketing/Container";
import { Section } from "@/components/marketing/Section";
import { Badge } from "@/components/marketing/Badge";
import { CTA } from "@/components/marketing/CTA";

export default function PressPage() {
  return (
    <Section>
      <Container>
        <div className="flex items-center gap-3">
          <Badge variant="brand">Press</Badge>
          <span className="mkt-eyebrow">News, media, and brand assets</span>
        </div>

        <h1 className="mkt-h1">Press kit</h1>
        <p className="mkt-lede">Placeholder for boilerplate, logos, screenshots, and product one-sheets.</p>

        <div className="mt-12">
          <CTA title="Need something specific?"
               desc="Request a press kit, founder bio, or product screenshots."
               primaryHref="/contact"
               primaryLabel="Contact"
               secondaryHref="/company"
               secondaryLabel="About Spork" />
        </div>
      </Container>
    </Section>
  );
}
