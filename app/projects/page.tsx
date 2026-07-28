import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore selected software projects and enterprise systems developed by S4Start Technologies.',
};

const projectCapabilities = [
  'Lead, meeting, and follow-up management',
  'Project lifecycle and department workflows',
  'Customer and dealer portals',
  'Android applications',
  'Staff attendance and HR tools',
  'Live field-force location tracking',
  'Inventory and stock management',
  'Procurement and purchase workflows',
  'Payment collection and invoicing',
  'Customer complaint management',
  'Analytics, reports, and exports',
  'Role-based access for 25+ user types',
];

const outcomes = [
  {
    title: 'Connected departments',
    description:
      'Multiple teams work inside one shared platform instead of depending on disconnected tools and manual records.',
  },
  {
    title: 'Better visibility',
    description:
      'Management dashboards, status tracking, filters, reports, and exports make operational performance easier to monitor.',
  },
  {
    title: 'Controlled access',
    description:
      'Role-based permissions ensure users only see the information, actions, and workflows relevant to their responsibilities.',
  },
  {
    title: 'Expandable architecture',
    description:
      'New modules, integrations, reports, mobile applications, and workflows can be introduced as requirements grow.',
  },
];

export default function ProjectsPage() {
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

            <a className="transition hover:text-white" href="/about">
              About
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
            Projects and case studies
          </p>

          <h1 className="mt-6 max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Software designed around real operational complexity
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Our work focuses on practical business systems that connect
            departments, users, data, approvals, customers, projects, and
            reporting inside one reliable platform.
          </p>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-400">
            The case study below presents the scope and capabilities of a
            production enterprise platform while protecting confidential
            client and business information.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Featured enterprise case study
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  End-to-end CRM and ERP platform
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                  A production business management system developed to connect
                  sales, meetings, projects, customers, staff, finance,
                  procurement, stock, field operations, complaints, documents,
                  reporting, and mobile applications.
                </p>

                <p className="mt-4 leading-8 text-slate-400">
                  The platform supports multiple departments and user roles
                  while maintaining controlled access, shared data, connected
                  workflows, and operational visibility.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {projectCapabilities.map((capability) => (
                    <div
                      key={capability}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/70 p-4"
                    >
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-400" />

                      <p className="text-sm leading-6 text-slate-300">
                        {capability}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 bg-slate-950 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Project profile
                </p>

                <div className="mt-8 space-y-6">
                  {[
                    {
                      label: 'Platform type',
                      value: 'Custom CRM and ERP',
                    },
                    {
                      label: 'Access',
                      value: 'Web and Android',
                    },
                    {
                      label: 'Users',
                      value: 'Management, staff, customers, dealers, and partners',
                    },
                    {
                      label: 'Architecture',
                      value: 'Role-based and modular',
                    },
                    {
                      label: 'Deployment',
                      value: 'Cloud-based production environment',
                    },
                    {
                      label: 'Support',
                      value: 'Ongoing maintenance and expansion',
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="border-b border-white/10 pb-6 last:border-b-0 last:pb-0"
                    >
                      <p className="text-sm uppercase tracking-[0.16em] text-slate-500">
                        {item.label}
                      </p>

                      <p className="mt-2 text-lg font-semibold text-slate-200">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              Business impact
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              More than a collection of features
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              The value of an enterprise system comes from connecting people,
              responsibilities, information, and decisions across the entire
              organisation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((outcome) => (
              <article
                key={outcome.title}
                className="rounded-2xl border border-white/10 bg-slate-950 p-7"
              >
                <h3 className="text-xl font-semibold">
                  {outcome.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {outcome.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                value: '25+',
                label: 'User roles and permission levels',
              },
              {
                value: 'Web + Android',
                label: 'Connected user experiences',
              },
              {
                value: 'End-to-end',
                label: 'Operational workflow coverage',
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-blue-400/20 bg-blue-500/10 p-8"
              >
                <p className="text-3xl font-bold tracking-tight">
                  {stat.value}
                </p>

                <p className="mt-3 leading-7 text-slate-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-slate-900/60 p-8 sm:p-12">
            <h2 className="max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl">
              Your software can be designed around your organisation
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
              We can study your teams, departments, approvals, customer
              journey, reporting requirements, current software, and
              operational challenges before designing a suitable platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
              >
                Discuss your project
              </a>

              <a
                href="/about"
                className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
              >
                Learn about our approach
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

            <a className="transition hover:text-white" href="/about">
              About
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