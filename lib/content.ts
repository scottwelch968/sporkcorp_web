export const Content = {
  brand: {
    name: "Spork",
    tagline: "AI operating system for business.",
    subtagline:
      "A unified productivity workspace where Assistants and Integrations run real work inside Spaces — governed by default.",
    oneLiner:
      "Spork turns AI from chat into execution: connect your tools, run workflows, and ship consistent outputs.",
  },

  positioning: {
    contrasts: [
      { a: "Chatbots answer questions", b: "Spork runs work" },
      { a: "Prompt libraries", b: "Business-ready Assistants" },
      { a: "Tool sprawl", b: "A single governed system" },
    ],
    hotTakes: [
      "Chatbots answer questions. Operating systems run work.",
      "If your AI lives in chat history, it isn’t a system.",
      "More AI tools won’t fix chaos. Orchestration will.",
      "AI didn’t fail. Workflows did.",
      "Stop buying AI. Start running it.",
    ],
  },

  valuePillars: [
    {
      title: "Spaces",
      desc: "Workspaces for teams, clients, projects, or initiatives — with shared standards and history.",
      bullets: ["Consistent outputs", "Shared context", "Repeatable execution"],
    },
    {
      title: "Assistants",
      desc: "Task- or role-based capabilities that users add to Spaces — reusable, governed, and business-ready.",
      bullets: ["Reusable playbooks", "Guardrails by default", "No prompt mess"],
    },
    {
      title: "Integrations",
      desc: "Connect Spork to the software stack your business already runs on — execution happens where work lives.",
      bullets: ["CRM + inbox + docs", "Automation tools", "Composable workflows"],
    },
    {
      title: "Governance",
      desc: "Controlled inputs/outputs, audit history, and sensible defaults that don’t slow teams down.",
      bullets: ["Auditability", "Controlled execution", "Org-ready controls"],
    },
  ],

  integrationCategories: {
    Automation: ["Zapier", "Make", "n8n"],
    "Docs & Knowledge": ["Google Drive", "Google Docs", "Notion", "Confluence"],
    "Email & Calendar": ["Gmail", "Outlook", "Google Calendar"],
    "CRM & Sales": ["HubSpot", "Salesforce", "Pipedrive"],
    "Project & Ops": ["Jira", "Asana", "Trello", "Monday.com"],
    Support: ["Zendesk", "Intercom", "Freshdesk"],
  } as const,

  useCases: [
    {
      title: "Agencies",
      desc: "Standardize deliverables, keep client context in one Space, and ship faster.",
      outcomes: ["Faster delivery", "Less rework", "Consistent quality"],
    },
    {
      title: "Operations",
      desc: "Turn repeatable processes into governed workflows teams can actually run.",
      outcomes: ["Fewer bottlenecks", "Better handoffs", "Reliable execution"],
    },
    {
      title: "IT & Internal Tools",
      desc: "Reduce shadow automation and keep integrations controlled and auditable.",
      outcomes: ["Less risk", "Clear ownership", "Lower tool sprawl"],
    },
    {
      title: "Government & Civic Teams",
      desc: "Knowledge + workflows for administration teams with controlled access and history.",
      outcomes: ["Policy consistency", "Audit trail", "Safer automation"],
    },
  ],

  testimonials: [
    {
      quote:
        "We didn’t need another AI tool. We needed a system that runs work consistently across teams and clients.",
      who: "Ops lead, services firm",
    },
    {
      quote:
        "Spork feels like an OS for execution — not a chat tab that forgets everything next week.",
      who: "Founder, agency owner",
    },
    {
      quote:
        "Governance without friction is the difference. We can actually let teams use it.",
      who: "IT manager",
    },
  ],

  faqs: [
    {
      q: "Is Spork a prompt library?",
      a: "No. Prompts and personas are not user-facing concepts. Spork ships Assistants as business-ready tools.",
    },
    {
      q: "What is a Space?",
      a: "Spaces are workspace containers for teams, clients, projects, or initiatives — where context and workflows live together.",
    },
    {
      q: "What is an Integration?",
      a: "Integrations connect Spork to common business software and services so work can execute where it belongs.",
    },
    {
      q: "How does pricing work?",
      a: "Pricing is aligned to outcomes: active workspaces and connected integrations — not seat-count games.",
    },
  ],

  pages: {
    resources: [
      {
        title: "Getting started",
        desc: "Set up Spaces, add Assistants, and connect Integrations in under 10 minutes.",
        href: "/resources/getting-started",
      },
      {
        title: "Governance guide",
        desc: "How Spork keeps AI usage controlled without slowing teams down.",
        href: "/resources/governance",
      },
      {
        title: "Workflow patterns",
        desc: "Repeatable workflows for agencies, ops teams, IT, and civic teams.",
        href: "/resources/workflow-patterns",
      },
    ],
  },
} as const;
