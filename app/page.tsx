const features = [
  {
    title: 'Business Management Software',
    description:
      'Custom CRM and ERP platforms designed around real business workflows, teams, customers, projects, and operations.',
  },
  {
    title: 'Mobile Applications',
    description:
      'Android applications for customers, employees, dealers, contractors, franchises, and field teams.',
  },
  {
    title: 'Automation and Integrations',
    description:
      'Connected systems that reduce manual work, improve visibility, and keep business data organised.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div>
            <p className="text-xl font-bold tracking-tight">
              S4Start Technologies
            </p>
            <p className="text-sm text-slate-400">
              Software built for real businesses
            </p>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#services">
              Services
            </a>
            <a
              className="transition hover:text-white"
              href="/privacy-policy"
            >
              Privacy
            </a>
            <a className="transition hover:text-white" href="/support">
              Support
            </a>
            <a className="transition hover:text-white" href="/contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.22),_transparent_42%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
              CRM, ERP and mobile application development
            </p>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Practical software that helps businesses operate better
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We design and maintain business software, customer portals,
              operational dashboards, workflow systems, and mobile applications
              tailored to the needs of growing organisations.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
              >
                Contact us
              </a>

              <a
                href="#services"
                className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
              >
                View services
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-blue-950/30 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              What we build
            </p>

            <div className="mt-6 space-y-5">
              {[
                'Custom CRM and ERP systems',
                'Customer and dealer portals',
                'Staff and field-force applications',
                'Project and workflow management',
                'Reporting and business analytics',
                'Secure cloud-based business platforms',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4"
                >
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-400" />
                  <p className="text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="border-y border-white/10 bg-slate-900/60"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              Services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Technology aligned with your workflow
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              Our systems are designed around the actual processes, roles, and
              reporting needs of each organisation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-3xl border border-blue-400/20 bg-blue-500/10 p-8 sm:p-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Built for long-term business use
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              We focus on maintainable architecture, secure access, practical
              interfaces, and dependable workflows so businesses can keep using
              and expanding their software as they grow.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} S4Start Technologies. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <a className="hover:text-white" href="/privacy-policy">
              Privacy Policy
            </a>
            <a className="hover:text-white" href="/terms">
              Terms
            </a>
            <a className="hover:text-white" href="/support">
              Support
            </a>
            <a className="hover:text-white" href="/contact">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}