"use client";
import { useMemo, useState } from "react";
import { Badge } from "./Badge";
import { Toggle } from "./Toggle";
import { Range } from "./Range";
import { Billing, Plan, calc, formatUSD } from "@/lib/pricing";

export function PricingCalculator() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const [plan, setPlan] = useState<Plan>("team");
  const [workspaces, setWorkspaces] = useState(5);
  const [integrations, setIntegrations] = useState(12);
  const price = useMemo(() => calc({ billing, workspaces, integrations, plan }), [billing, workspaces, integrations, plan]);

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="mkt-card-strong p-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-sm text-muted">Billing</div>
              <div className="mt-2 flex items-center gap-3">
                <Toggle left="Monthly" right="Yearly" value={billing === "yearly" ? "right" : "left"} onChange={(v) => setBilling(v === "right" ? "yearly" : "monthly")} />
                {billing === "yearly" ? <Badge variant="brand">Save 20%</Badge> : null}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted">Estimated</div>
              <div className="mt-1 text-3xl font-semibold tracking-tight">
                {formatUSD(price.total)}<span className="text-base font-medium text-muted">/{billing === "yearly" ? "yr" : "mo"}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm text-muted">Plan</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {(["starter","team","scale"] as Plan[]).map((p) => (
                <button key={p} type="button" className={`rounded-pill px-4 py-2 text-sm border ${plan === p ? "bg-ink text-paper border-ink" : "bg-paper text-ink border-line hover:bg-fog"}`} onClick={() => setPlan(p)}>
                  {p === "starter" ? "Starter" : p === "team" ? "Team" : "Scale"}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between"><div className="text-sm font-medium">Active workspaces</div><div className="text-sm text-muted">{workspaces}</div></div>
            <div className="mt-3"><Range min={1} max={50} step={1} value={workspaces} onChange={setWorkspaces} /></div>
            <div className="mt-1 text-xs text-muted">Workspaces map to teams, clients, projects, or initiatives.</div>
          </div>

          <div>
            <div className="flex items-center justify-between"><div className="text-sm font-medium">Connected integrations</div><div className="text-sm text-muted">{integrations}</div></div>
            <div className="mt-3"><Range min={0} max={80} step={1} value={integrations} onChange={setIntegrations} /></div>
            <div className="mt-1 text-xs text-muted">Integrations are first-class value: CRM, docs, storage, automation.</div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 text-sm text-muted">
            <div>Governance included</div><div>Audit history</div><div>Unlimited Assistants</div><div>Spaces drive standards</div>
          </div>
        </div>
      </div>

      <div className="mkt-card p-8">
        <div className="flex items-center justify-between"><div className="text-sm text-muted">Included</div>{plan === "team" ? <Badge>Recommended</Badge> : null}</div>
        <div className="mt-4 text-xl font-semibold tracking-tight">{plan === "starter" ? "Starter" : plan === "team" ? "Team" : "Scale"}</div>
        <p className="mt-2 text-sm text-muted">
          {plan === "starter" ? "Try Spork with a single Space and a few core integrations." : plan === "team" ? "Run real workflows across teams and clients with controlled execution." : "Enterprise-grade governance, custom integrations, and org controls."}
        </p>

        <ul className="mt-6 space-y-3 text-sm">
          <li><span className="font-medium">Included workspaces:</span> {price.includedWorkspaces === 9999 ? "Unlimited" : price.includedWorkspaces}</li>
          <li><span className="font-medium">Included integrations:</span> {price.includedIntegrations}</li>
          <li><span className="font-medium">Assistants:</span> Unlimited</li>
          <li><span className="font-medium">Files & context:</span> Included</li>
          <li><span className="font-medium">Governance:</span> Included</li>
        </ul>

        <div className="mt-8 flex gap-3">
          <a className="mkt-btn-primary flex-1" href="/signup">Start free</a>
          <a className="mkt-btn-secondary flex-1" href="/contact">Talk to sales</a>
        </div>
        <div className="mt-6 text-xs text-muted">Pricing aligns to workflows: workspaces + integrations, not seats.</div>
      </div>
    </div>
  );
}
