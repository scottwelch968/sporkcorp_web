import Link from "next/link";
import { Container } from "@/components/marketing/Container";
import { Section } from "@/components/marketing/Section";
import { Badge } from "@/components/marketing/Badge";
import { FeatureList } from "@/components/marketing/FeatureList";
import { CTA } from "@/components/marketing/CTA";
import { TestimonialRow } from "@/components/marketing/TestimonialRow";
import { FAQ } from "@/components/marketing/FAQ";
import { Content } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Section>
        <Container>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Badge variant="brand">AI OS</Badge>
              <span className="mkt-eyebrow">Spaces • Assistants • Integrations</span>
            </div>

            <h1 className="mkt-h1">{Content.brand.tagline}</h1>
            <p className="mkt-lede">{Content.brand.subtagline}</p>

            <div className="mt-2 flex flex-col sm:flex-row gap-3">
              <Link className="mkt-btn-primary" href="/signup">Start free</Link>
              <Link className="mkt-btn-secondary" href="/pricing">See pricing</Link>
            </div>

            <div className="mt-8">
              <FeatureList items={Content.valuePillars} />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-fog">
        <Container>
          <div className="mkt-card-strong p-8 md:p-10">
            <div className="text-sm text-muted">Positioning</div>
            <div className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
              {Content.positioning.hotTakes[0]}
            </div>
            <ul className="mt-6 grid gap-2 text-sm text-muted">
              {Content.positioning.hotTakes.slice(1).map((t) => <li key={t}>{t}</li>)}
            </ul>

            <div className="mt-8 grid md:grid-cols-3 gap-3">
              {Content.positioning.contrasts.map((c) => (
                <div key={c.a} className="mkt-card p-5">
                  <div className="text-xs uppercase tracking-wide text-muted">{c.a}</div>
                  <div className="mt-1 text-sm font-medium text-ink">{c.b}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="mkt-h2">Built for productivity tools and integrations</h2>
          <p className="mkt-lede">
            Spork’s value is execution. Integrations live inside Spaces, alongside Assistants, so work is repeatable and governed.
          </p>

          <div className="mt-10">
            <TestimonialRow items={Content.testimonials} />
          </div>

          <div className="mt-12">
            <CTA
              title="Stop buying AI. Start running it."
              desc="If your AI can’t execute inside your software stack, it’s not productivity — it’s entertainment."
              primaryHref="/pricing"
              primaryLabel="Price it out"
              secondaryHref="/integrations"
              secondaryLabel="Explore integrations"
            />
          </div>
        </Container>
      </Section>

      <Section className="bg-fog">
        <Container>
          <h2 className="mkt-h2">Questions, answered</h2>
          <div className="mt-10">
            <FAQ items={Content.faqs} />
          </div>
        </Container>
      </Section>
    </>
  );
}
