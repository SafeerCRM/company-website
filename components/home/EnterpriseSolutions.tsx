const solutions = [
  {
    number: '01',
    title: 'Custom CRM Platforms',
    description:
      'Manage enquiries, leads, meetings, follow-ups, customers, teams, conversion workflows, and sales performance from one connected system.',
    capabilities: [
      'Lead and enquiry management',
      'Follow-up and meeting workflows',
      'Role-based team access',
      'Performance analytics',
    ],
    href: '/custom-crm-erp-development',
  },
  {
    number: '02',
    title: 'ERP & Operations',
    description:
      'Connect departments, projects, approvals, procurement, payments, documents, inventory, and operational workflows.',
    capabilities: [
      'Project lifecycle management',
      'Department workflows',
      'Approval systems',
      'Operational dashboards',
    ],
    href: '/custom-crm-erp-development',
  },
  {
    number: '03',
    title: 'Mobile Applications',
    description:
      'Dedicated Android applications for customers, employees, field staff, dealers, contractors, and partner networks.',
    capabilities: [
      'Customer applications',
      'Staff and field-force apps',
      'Dealer and partner access',
      'Secure mobile workflows',
    ],
    href: '/mobile-app-development',
  },
  {
  number: '04',
  title: 'Customer & Partner Portals',
  description:
    'Give customers, dealers, vendors, franchises, and contractors secure self-service access to relevant information.',
  capabilities: [
    'Self-service dashboards',
    'Document access',
    'Complaint tracking',
    'Payment and project updates',
  ],
  href: '/customer-partner-portal-development',
},
  {
    number: '05',
    title: 'Analytics & Reporting',
    description:
      'Transform operational data into useful dashboards, management reports, performance metrics, and downloadable records.',
    capabilities: [
      'Role-specific dashboards',
      'Performance reports',
      'Advanced filters',
      'CSV and spreadsheet exports',
    ],
    href: '/contact',
  },
  {
    number: '06',
    title: 'Automation & Integrations',
    description:
      'Reduce repetitive work through workflow automation, connected services, notifications, and synchronised business information.',
    capabilities: [
      'Workflow automation',
      'API integrations',
      'Notifications and alerts',
      'Data synchronisation',
    ],
    href: '/business-automation',
  },
];

const operatingAreas = [
  'Sales',
  'Customers',
  'Projects',
  'Staff',
  'Finance',
  'Inventory',
  'Procurement',
  'Reporting',
];

export default function EnterpriseSolutions() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            Enterprise solutions
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            One digital platform can connect
            <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              your complete organisation
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            We build connected software ecosystems where departments,
            customers, staff, projects, finance, inventory, and management
            can operate through shared workflows and centralised information.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {operatingAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-300"
            >
              {area}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="group flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/55 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-slate-900/90"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-sm font-bold text-blue-300">
                  {solution.number}
                </div>

                <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400/40" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">
                {solution.title}
              </h3>

              <p className="mt-4 flex-1 leading-7 text-slate-400">
                {solution.description}
              </p>

              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Key capabilities
                </p>

                <div className="space-y-3">
                  {solution.capabilities.map((capability) => (
                    <div
                      key={capability}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      </div>

                      <p className="text-sm leading-6 text-slate-300">
                        {capability}
                      </p>
                    </div>
                  ))}
                </div>

                <a
  href={solution.href}
  className="mt-7 inline-flex text-sm font-semibold text-blue-300 transition hover:text-blue-200"
>
  {solution.href === '/custom-crm-erp-development'
  ? 'Explore CRM & ERP Development →'
  : solution.href === '/mobile-app-development'
    ? 'Explore Mobile App Development →'
    : solution.href === '/business-automation'
      ? 'Explore Business Automation →'
      : solution.href === '/customer-partner-portal-development'
        ? 'Explore Customer & Partner Portals →'
        : 'Discuss This Solution →'}
</a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-slate-900/80 to-cyan-500/5">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Connected architecture
              </p>

              <h3 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Start with one module.
                <span className="block text-slate-300">
                  Expand into a complete ERP.
                </span>
              </h3>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Your business does not need to implement everything at once.
                Individual modules can be developed first and later connected
                through shared users, permissions, workflows, reporting, and
                centralised business data.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  'Shared database',
                  'Unified permissions',
                  'Connected workflows',
                  'Central reporting',
                  'Expandable modules',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-950/50 px-4 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 bg-slate-950/45 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Typical expansion
              </p>

              <div className="mt-7 space-y-4">
                {[
                  {
                    step: '01',
                    label: 'CRM / Core Workflow',
                  },
                  {
                    step: '02',
                    label: 'Operations & Projects',
                  },
                  {
                    step: '03',
                    label: 'Inventory & Finance',
                  },
                  {
                    step: '04',
                    label: 'Mobile & Portals',
                  },
                  {
                    step: '05',
                    label: 'Analytics & Automation',
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-sm font-bold text-blue-300">
                      {item.step}
                    </div>

                    <p className="font-medium text-slate-200">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-slate-900/60 p-7 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-blue-300">
                Need something specific?
              </p>

              <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                We can design the platform around your organisation.
              </h3>

              <p className="mt-4 max-w-3xl leading-7 text-slate-400">
                Tell us how your departments work, where manual processes
                create problems, and what information management needs.
                We can translate those requirements into a connected system.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex justify-center rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Discuss Your Requirements
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}