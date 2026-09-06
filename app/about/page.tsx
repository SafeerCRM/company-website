import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About S4Start Technologies | Business Software Engineering',

  description:
    'Learn about S4Start Technologies, a software engineering company building custom CRM, ERP, mobile applications, business portals, workflow automation, analytics, and connected enterprise software.',

  alternates: {
    canonical: '/about',
  },

  keywords: [
    'S4Start Technologies',
    'Software Development Company India',
    'Custom Software Development',
    'CRM Development Company',
    'ERP Development Company',
    'Business Software Development',
    'Enterprise Software Development',
    'Mobile App Development',
    'Business Automation',
  ],

  openGraph: {
    title: 'About S4Start Technologies',
    description:
      'We engineer practical CRM, ERP, mobile applications, portals, automation, analytics, and connected software around real business operations.',
    url: 'https://www.s4starttech.com/about',
    images: [
      {
        url: '/showcase/crm-dashboard.png',
        alt: 'Enterprise business software developed by S4Start Technologies',
      },
    ],
  },
};

const principles = [
  {
    number: '01',
    title: 'Business-First Thinking',
    description:
      'We begin with the organisation, its people, workflows, responsibilities, bottlenecks, and goals before deciding how the software should work.',
  },
  {
    number: '02',
    title: 'Practical Engineering',
    description:
      'Technology is selected and structured around the problem being solved rather than adding complexity simply for the sake of technology.',
  },
  {
    number: '03',
    title: 'Controlled Development',
    description:
      'Working systems are treated carefully. New capabilities are introduced in manageable stages with review, testing, and deployment checks.',
  },
  {
    number: '04',
    title: 'Long-Term Evolution',
    description:
      'Business requirements change. We build maintainable systems that can continue gaining modules, integrations, workflows, and user capabilities.',
  },
];

const capabilities = [
  {
    title: 'Custom CRM & ERP',
    description:
      'Connected systems for customers, sales, projects, HR, finance, inventory, procurement, operations, and management.',
    href: '/custom-crm-erp-development',
  },
  {
    title: 'Mobile Applications',
    description:
      'Business applications for customers, employees, field teams, dealers, contractors, and operational users.',
    href: '/mobile-app-development',
  },
  {
    title: 'Customer & Partner Portals',
    description:
      'Secure self-service platforms for customers, dealers, partners, contractors, and other business stakeholders.',
    href: '/customer-partner-portal-development',
  },
  {
    title: 'Business Automation',
    description:
      'Approvals, reminders, notifications, workflow controls, integrations, and automated operational processes.',
    href: '/business-automation',
  },
  {
    title: 'Analytics & Reporting',
    description:
      'Management dashboards, performance reports, operational analytics, filters, KPIs, and business data exports.',
    href: '/analytics-reporting',
  },
  {
    title: 'Connected Business Platforms',
    description:
      'Shared backends, APIs, permissions, workflows, and data connecting web platforms, mobile applications, and portals.',
    href: '/projects',
  },
];

const engineeringAreas = [
  'Role-based access control',
  'Workflow and approval systems',
  'Operational dashboards',
  'Inventory and procurement',
  'Project management',
  'HR and attendance',
  'Payment and finance workflows',
  'Field-force operations',
  'Customer service systems',
  'Dealer and partner operations',
  'API integrations',
  'Cloud deployment',
];

const process = [
  {
    step: 'Understand',
    description:
      'Study the current workflow, users, responsibilities, existing systems, pain points, and expected outcomes.',
  },
  {
    step: 'Structure',
    description:
      'Translate the business into modules, permissions, data relationships, workflows, reports, and system architecture.',
  },
  {
    step: 'Build',
    description:
      'Develop the software progressively with practical interfaces, controlled business rules, and connected workflows.',
  },
  {
    step: 'Improve',
    description:
      'Use real operational feedback to refine workflows and introduce new capabilities as requirements evolve.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About S4Start Technologies',
  url: 'https://www.s4starttech.com/about',
  description:
    'About S4Start Technologies and its approach to custom business software engineering.',
  mainEntity: {
    '@type': 'Organization',
    '@id': 'https://www.s4starttech.com/#organization',
    name: 'S4Start Technologies',
    url: 'https://www.s4starttech.com',
    description:
      'Software engineering company developing custom CRM, ERP, mobile applications, portals, workflow automation, analytics, and connected business systems.',
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
        {/* NAVBAR */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <a href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10">
                <span className="font-bold text-blue-300">
                  S4
                </span>
              </div>

              <div>
                <p className="font-bold text-white sm:text-lg">
                  S4Start Technologies
                </p>

                <p className="text-xs text-slate-500">
                  Software built for real businesses
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
              <a
                href="/custom-crm-erp-development"
                className="transition hover:text-white"
              >
                CRM & ERP
              </a>

              <a
                href="/mobile-app-development"
                className="transition hover:text-white"
              >
                Mobile Apps
              </a>

              <a
                href="/business-automation"
                className="transition hover:text-white"
              >
                Automation
              </a>

              <a
                href="/projects"
                className="transition hover:text-white"
              >
                Projects
              </a>

              <a
                href="/about"
                className="font-medium text-white"
              >
                About
              </a>

              <a
                href="/support"
                className="transition hover:text-white"
              >
                Support
              </a>

              <a
                href="/contact"
                className="rounded-xl bg-blue-500 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-400"
              >
                Contact
              </a>
            </nav>

            <a
              href="/contact"
              className="rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white lg:hidden"
            >
              Contact
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute right-0 top-0 h-[650px] w-[650px] rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-32">
            <div>
              <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                About S4Start Technologies
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                We build software around
                <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  how businesses actually operate
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                S4Start Technologies engineers custom business software for
                organisations that need better control over customers,
                teams, projects, operations, workflows, and information.
              </p>

              <p className="mt-4 max-w-2xl leading-8 text-slate-400">
                Our work spans CRM, ERP, mobile applications, customer and
                partner portals, business automation, analytics, and
                connected operational platforms.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/projects"
                  className="rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-400"
                >
                  See Our Work
                </a>

                <a
  href="/book-demo"
  className="rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/10"
>
  Discuss Your Project
</a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl shadow-black/30">
              <Image
                src="/showcase/crm-dashboard.png"
                alt="Custom CRM and ERP software developed by S4Start Technologies"
                width={1536}
                height={794}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* PURPOSE */}
        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Why we build
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Complex operations should not depend on disconnected tools
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                As organisations grow, important processes often become
                distributed across spreadsheets, messaging applications,
                paper records, isolated software, and knowledge held by
                individual employees.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                That fragmentation makes work harder to control. Information
                gets repeated, approvals become difficult to follow, teams
                lose visibility, and management spends more time collecting
                information instead of using it.
              </p>
            </div>

            <div className="rounded-[2rem] border border-blue-400/20 bg-blue-500/10 p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Our purpose
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                Bring the operation into one organised system
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                We design software that connects users, departments,
                workflows, records, approvals, communication, and reporting
                around a shared operational structure.
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                The objective is not simply to replace paper with screens.
                It is to make the business easier to operate, understand,
                control, and improve.
              </p>
            </div>
          </div>
        </section>

        {/* REAL SYSTEM EXPERIENCE */}
        <section className="border-b border-white/10 bg-slate-900/45">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Built around real operations
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Experience beyond isolated features
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Business software becomes substantially more complex when
                  customers, employees, managers, field teams, dealers,
                  payments, inventory, projects, and reporting all interact.
                </p>

                <p className="mt-4 leading-8 text-slate-400">
                  Our development experience includes connected systems where
                  different user groups operate through dedicated interfaces
                  while sharing common business data and backend workflows.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                    <p className="text-2xl font-bold text-blue-300">
                      25+
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      role-based user types
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                    <p className="text-2xl font-bold text-blue-300">
                      3
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      connected platform experiences
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                    <p className="text-2xl font-bold text-blue-300">
                      Web + Android
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      multi-platform delivery
                    </p>
                  </div>
                </div>

                <a
                  href="/projects"
                  className="mt-8 inline-flex font-semibold text-blue-300 transition hover:text-blue-200"
                >
                  Explore the enterprise case study →
                </a>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white">
                  <Image
                    src="/showcase/customer-project-tracker.png"
                    alt="Connected customer project tracking platform"
                    width={900}
                    height={1200}
                    className="h-full w-full object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 28vw"
                  />
                </div>

                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white sm:mt-12">
                  <Image
                    src="/showcase/dealer-dashboard.png"
                    alt="Connected dealer business platform"
                    width={900}
                    height={1200}
                    className="h-full w-full object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 28vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                What we engineer
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Connected software for different parts of the business
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                A solution can be a focused application or a larger platform
                connecting multiple departments and user groups.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => (
                <article
                  key={capability.title}
                  className="flex flex-col rounded-3xl border border-white/10 bg-slate-900/60 p-7 transition hover:border-blue-400/30"
                >
                  <div className="h-1 w-10 rounded-full bg-blue-400" />

                  <h3 className="mt-6 text-xl font-semibold">
                    {capability.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-slate-400">
                    {capability.description}
                  </p>

                  <a
                    href={capability.href}
                    className="mt-6 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
                  >
                    Explore →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ENGINEERING SCOPE */}
        <section className="border-b border-white/10 bg-slate-900/45">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Engineering scope
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Business software reaches far beyond a dashboard
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                Reliable operational software requires permissions, data
                relationships, workflow rules, reporting, interfaces, and
                integrations to work together.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {engineeringAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 p-5"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-blue-400" />

                  <span className="text-sm font-medium leading-6 text-slate-300">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                How we think
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Principles behind our development work
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className="rounded-3xl border border-white/10 bg-slate-900/60 p-7"
                >
                  <p className="text-sm font-bold text-blue-300">
                    {principle.number}
                  </p>

                  <h3 className="mt-5 text-xl font-semibold">
                    {principle.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="border-b border-white/10 bg-slate-900/45">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Our approach
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Understand first. Build carefully. Improve continuously.
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                Custom software works best when development follows the
                business rather than forcing the business into a generic
                template.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {process.map((item, index) => (
                <article
                  key={item.step}
                  className="rounded-3xl border border-white/10 bg-slate-950/70 p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-sm font-bold text-blue-300">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {item.step}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGY */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Technology
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Modern technology with practical architecture
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Our systems use modern web, backend, mobile, database, and
                  cloud technologies selected to support maintainability,
                  security, performance, and future expansion.
                </p>

                <p className="mt-4 leading-8 text-slate-400">
                  Architecture matters most when the software grows. We focus
                  on clear separation of responsibilities, reusable business
                  logic, controlled access, connected data, and deployment
                  workflows that support continued development.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  'Next.js',
                  'React',
                  'TypeScript',
                  'NestJS',
                  'PostgreSQL',
                  'Android',
                  'REST APIs',
                  'Cloud',
                  'Role-Based Security',
                ].map((technology) => (
                  <div
                    key={technology}
                    className="flex min-h-24 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-center font-semibold text-slate-300"
                  >
                    {technology}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="rounded-[2rem] border border-blue-400/20 bg-gradient-to-r from-blue-500/15 via-slate-900 to-cyan-500/10 p-8 sm:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                    Work with S4Start Technologies
                  </p>

                  <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl">
                    Have an operation that has become difficult to manage?
                    <span className="block text-blue-300">
                      Let&apos;s understand what software can simplify.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                    Start with the workflow, users, problems, and outcomes.
                    We can help translate them into a practical software
                    system.
                  </p>
                </div>

                <a
  href="/book-demo"
  className="inline-flex justify-center rounded-xl bg-blue-500 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-400"
>
  Discuss Your Project
</a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
            <p>
              © {new Date().getFullYear()} S4Start Technologies. All rights
              reserved.
            </p>

            <div className="flex flex-wrap gap-5">
              <a href="/" className="hover:text-white">
                Home
              </a>

              <a
                href="/custom-crm-erp-development"
                className="hover:text-white"
              >
                CRM & ERP
              </a>

              <a
                href="/mobile-app-development"
                className="hover:text-white"
              >
                Mobile Apps
              </a>

              <a href="/projects" className="hover:text-white">
                Projects
              </a>

              <a href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </a>

              <a href="/terms" className="hover:text-white">
                Terms
              </a>

              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}