const features = [
  {
    number: '01',
    title: 'Business Management Software',
    description:
      'Custom CRM and ERP platforms built around your actual teams, customers, projects, approvals, finance, inventory, and operations.',
    highlights: [
      'CRM & ERP',
      'Project workflows',
      'Department management',
      'Business dashboards',
    ],
    href: '/custom-crm-erp-development',
  },
  {
    number: '02',
    title: 'Mobile Applications',
    description:
      'Secure mobile applications for customers, employees, dealers, contractors, field teams, and business partners.',
    highlights: [
      'Customer apps',
      'Staff applications',
      'Dealer portals',
      'Field operations',
    ],
    href: '/mobile-app-development',
  },
  {
    number: '03',
    title: 'Automation & Integrations',
    description:
      'Connected systems that reduce repetitive work, improve communication, synchronise information, and automate business processes.',
    highlights: [
      'Workflow automation',
      'API integrations',
      'Notifications',
      'Data synchronisation',
    ],
    href: '/business-automation',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-white/10 bg-slate-900/40"
    >
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
              What we do
            </div>

            <h2 className="mt-6 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Technology designed around
              <span className="block text-blue-300">
                how your business actually works
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Instead of forcing your organisation into generic software,
              we study your processes, users, approvals, departments, and
              reporting requirements to build systems that fit your business.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/75 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-slate-950"
            >
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/5 blur-3xl transition group-hover:bg-blue-500/10" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-sm font-bold text-blue-300">
                    {feature.number}
                  </div>

                  <span className="text-sm font-medium text-slate-600 transition group-hover:text-blue-300">
                    S4Start
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-semibold tracking-tight text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 min-h-[112px] leading-7 text-slate-400">
                  {feature.description}
                </p>

                <div className="mt-7 border-t border-white/10 pt-6">
                  <div className="flex flex-wrap gap-2">
                    {feature.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-medium text-slate-300"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <a
  href={feature.href}
  className="mt-7 inline-flex items-center text-sm font-semibold text-blue-300 transition hover:text-blue-200"
>
  {feature.href === '/custom-crm-erp-development'
    ? 'Explore CRM & ERP Development →'
    : feature.href === '/mobile-app-development'
      ? 'Explore Mobile App Development →'
      : feature.href === '/business-automation'
        ? 'Explore Business Automation →'
        : 'Discuss This Solution →'}
</a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:grid-cols-3 sm:p-8">
          {[
            {
              title: 'Built Around Your Workflow',
              description:
                'Software structure follows the way your organisation operates.',
            },
            {
              title: 'Connected Departments',
              description:
                'Teams work with shared information instead of disconnected systems.',
            },
            {
              title: 'Ready to Scale',
              description:
                'New users, modules, workflows, and integrations can be added later.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-slate-950/60 p-5"
            >
              <div className="h-1 w-10 rounded-full bg-blue-400" />

              <h3 className="mt-5 font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}