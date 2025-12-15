import Link from "next/link";
import { Container } from "@/components/marketing/Container";
import { Section } from "@/components/marketing/Section";
import { Badge } from "@/components/marketing/Badge";

export default function GettingStarted() {
  return (
    <Section>
      <Container>
        <div className="flex items-center gap-3">
          <Badge variant="brand">Resources</Badge>
          <span className="mkt-eyebrow">Getting started</span>
        </div>

        <h1 className="mkt-h1">Getting started</h1>
        <p className="mkt-lede">A simple loop: create a Space → add Assistants → connect Integrations → run the workflow.</p>

        <ol className="mt-10 space-y-4 text-sm text-muted list-decimal pl-5">
          <li>Create a Space for a team, client, or project.</li>
          <li>Add Assistants that match the work (sales, ops, support, reporting).</li>
          <li>Connect the integrations that matter (CRM, docs, inbox, automation).</li>
          <li>Run workflows consistently and keep outputs auditable.</li>
        </ol>

        <div className="mt-12">
          <Link className="mkt-btn-primary" href="/pricing">See pricing</Link>
        </div>
      </Container>
    </Section>
  );
}
