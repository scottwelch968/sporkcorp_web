export type Billing = "monthly" | "yearly";
export type Plan = "starter" | "team" | "scale";

export function formatUSD(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

export function calc({ billing, workspaces, integrations, plan }: { billing: Billing; workspaces: number; integrations: number; plan: Plan; }) {
  if (plan === "starter") return { total: 0, includedIntegrations: 3, includedWorkspaces: 1 };
  const workspaceRate = 29;
  const integrationRate = 1.25;
  const monthly = (workspaces * workspaceRate) + (integrations * integrationRate);
  const total = billing === "yearly" ? Math.round(monthly * 12 * 0.8) : Math.round(monthly);
  return { total, includedIntegrations: plan === "team" ? 25 : 250, includedWorkspaces: plan === "team" ? 10 : 9999 };
}
