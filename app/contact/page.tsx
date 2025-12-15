import Link from "next/link";
import { Container } from "@/components/marketing/Container";
import { Section } from "@/components/marketing/Section";

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <h1 className="mkt-h1">Contact</h1>
        <p className="mkt-lede">Placeholder contact page. Replace with a form, CRM embed, or scheduling link.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="mkt-btn-secondary" href="mailto:hello@spork.ai">Email hello@spork.ai</a>
          <Link className="mkt-btn-primary" href="/pricing">See pricing</Link>
        </div>
      </Container>
    </Section>
  );
}
