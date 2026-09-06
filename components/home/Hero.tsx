const buildItems = [
  {
    title: 'CRM & ERP',
    description:
      'Centralise teams, customers, projects, operations, and reporting.',
  },
  {
    title: 'Mobile Applications',
    description:
      'Dedicated apps for customers, staff, dealers, and field teams.',
  },
  {
    title: 'Business Automation',
    description:
      'Reduce repetitive work with connected workflows and integrations.',
  },
];

const platformFeatures = [
  'Lead Management',
  'Project Management',
  'Inventory',
  'HR & Payroll',
  'Dealer Portal',
  'Customer Portal',
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 -z-20 bg-slate-950" />

      <div className="absolute left-1/2 top-0 -z-10 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute -right-48 top-16 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute -left-48 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200">
            <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.9)]" />

            CRM, ERP, Mobile Apps & Business Automation
          </div>

          <h1 className="mt-7 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Software built to
            <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              run your business better
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            We design powerful CRM, ERP, mobile, and business management
            platforms that connect teams, automate workflows, improve
            visibility, and support real-world operations.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
  href="/book-demo"
  className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white shadow-xl shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-400"
>
  Book a Demo
</a>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-slate-200 backdrop-blur transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              Explore Our Solutions
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {[
              {
                value: 'Custom',
                label: 'Built around your workflow',
              },
              {
                value: 'Scalable',
                label: 'Designed for future growth',
              },
              {
                value: 'Secure',
                label: 'Role-based business access',
              },
            ].map((item) => (
              <div
                key={item.value}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur"
              >
                <p className="font-semibold text-white">
                  {item.value}
                </p>

                <p className="mt-1 text-sm leading-5 text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:pl-4">
          <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-blue-500/10 blur-3xl" />

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-sm font-semibold text-white">
                  Business Operations Platform
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Connected CRM & ERP workspace
                </p>
              </div>

              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-blue-400/70" />
              </div>
            </div>

            <div className="grid gap-4 p-5 sm:grid-cols-2">
              {buildItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-slate-950/75 p-5 transition hover:border-blue-400/30"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10">
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                  </div>

                  <h2 className="mt-4 text-lg font-semibold text-white">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </article>
              ))}

              <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5 sm:col-span-2">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                      Enterprise Platform
                    </p>

                    <p className="mt-2 text-xl font-semibold text-white">
                      One connected system across departments
                    </p>
                  </div>

                  <div className="hidden rounded-xl border border-blue-400/20 bg-blue-500/10 px-3 py-2 text-sm font-semibold text-blue-200 sm:block">
                    Live
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {platformFeatures.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-2 text-xs font-medium text-slate-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl backdrop-blur xl:block">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
              Built for
            </p>

            <p className="mt-1 font-semibold text-white">
              Real business operations
            </p>
          </div>

          <div className="absolute -right-5 -top-6 hidden rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4 shadow-2xl backdrop-blur xl:block">
            <p className="text-xs uppercase tracking-[0.18em] text-blue-300">
              Platform
            </p>

            <p className="mt-1 font-semibold text-white">
              Web + Mobile
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}