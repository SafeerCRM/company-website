import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about S4Start Technologies, our software engineering approach, values, capabilities, and commitment to building practical business systems.',
};

const values = [
  {
    title: 'Business-First Thinking',
    description:
      'We begin by understanding how the organisation actually works before deciding how the software should be structured.',
  },
  {
    title: 'Practical Engineering',
    description:
      'Features are designed to solve real operational problems, reduce repetitive work, and improve visibility across teams.',
  },
  {
    title: 'Controlled Development',
    description:
      'Working systems are treated carefully. New capabilities are introduced in manageable stages with review and testing.',
  },
  {
    title: 'Long-Term Reliability',
    description:
      'We focus on maintainable architecture, secure access, expandable modules, and software that remains useful as the business grows.',
  },
];

const capabilities = [
  'Custom CRM and ERP development',
  'Business workflow automation',
  'Android application development',
  'Customer and dealer portals',
  'Role-based access systems',
  'Dashboards and management analytics',
  'Inventory and procurement systems',
  'Project and field-force management',
  'API integrations and connected workflows',
  'Cloud deployment and ongoing maintenance',
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="/" className="group">
            <p className="text-xl font-bold tracking-tight transition group-hover:text-blue-300">
              S4Start Technologies
            </p>

            <p className="text-sm text-slate-400">
              Software built for real businesses
            </p>
          </a>

          <nav className="flex items-center gap-5 text-sm text-slate-300">
            <a className="transition hover:text-white" href="/">
              Home
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

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.22),_transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <p className="inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
            About S4Start Technologies
          </p>

          <h1 className="mt-6 max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Engineering intelligent business solutions
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            S4Start Technologies builds practical software for organisations
            that need better control over customers, teams, projects,
            operations, reporting, communication, and growth.
          </p>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-400">
            Our work includes custom CRM platforms, ERP systems, mobile
            applications, customer portals, dealer portals, dashboards,
            workflow automation, and connected business systems designed
            around real operational requirements.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              Our purpose
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Make complex business operations easier to manage
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Many organisations depend on spreadsheets, disconnected
              applications, messages, manual approvals, and repetitive data
              entry. These systems become difficult to manage as teams,
              customers, and operations grow.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              We design connected software that brings important workflows
              into one organised platform. The goal is not simply to
              digitise existing work, but to make that work clearer, faster,
              more secure, and easier to monitor.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-400/20 bg-blue-500/10 p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              Our approach
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Understand first. Build carefully. Improve continuously.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              We study departments, user roles, approvals, reports,
              responsibilities, and existing challenges before planning the
              software structure.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Development is then handled in controlled stages so working
              processes can be preserved while new features are introduced,
              tested, deployed, and improved.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              Our values
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Principles that guide our development work
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-white/10 bg-slate-950 p-7"
              >
                <h3 className="text-xl font-semibold">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              What we build
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Software for connected business operations
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Our capabilities cover complete business platforms as well as
              individual modules that can be introduced into an existing
              organisation.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <div
                key={capability}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-5"
              >
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-400" />

                <p className="leading-7 text-slate-300">
                  {capability}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-3xl border border-blue-400/20 bg-blue-500/10 p-8 sm:p-12">
            <h2 className="max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl">
              Building systems businesses can depend on
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
              We aim to create software that supports daily work, provides
              management visibility, protects business data, and remains
              adaptable as requirements change.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
              >
                Discuss your project
              </a>

              <a
                href="/support"
                className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
              >
                Visit support
              </a>
            </div>
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
            <a className="transition hover:text-white" href="/">
              Home
            </a>

            <a
              className="transition hover:text-white"
              href="/privacy-policy"
            >
              Privacy Policy
            </a>

            <a className="transition hover:text-white" href="/terms">
              Terms
            </a>

            <a className="transition hover:text-white" href="/contact">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}