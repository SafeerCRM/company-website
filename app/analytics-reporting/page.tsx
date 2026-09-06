import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Analytics & Reporting Software Development',

  description:
    'S4Start Technologies develops custom dashboards, management reports, KPI systems, operational analytics, filtered reports, and downloadable business data for CRM, ERP, and enterprise platforms.',

  alternates: {
    canonical: '/analytics-reporting',
  },

  keywords: [
    'Analytics Software Development',
    'Reporting Software Development',
    'Business Dashboard Development',
    'Management Dashboard Software',
    'Custom Reporting System',
    'CRM Analytics',
    'ERP Reporting',
    'Business Intelligence Dashboard',
    'Operational Analytics',
    'KPI Dashboard Development',
    'Custom Reports India',
  ],

  openGraph: {
    title:
      'Analytics & Reporting Software Development | S4Start Technologies',

    description:
      'Custom dashboards, management reports, KPI systems, operational analytics, exports, and connected business reporting.',

    url: 'https://www.s4starttech.com/analytics-reporting',

    images: [
      {
        url: '/showcase/crm-dashboard.png',
        alt: 'Business analytics dashboard developed by S4Start Technologies',
      },
    ],
  },
};

const reportingAreas = [
  {
    number: '01',
    title: 'Management Dashboards',
    description:
      'Give decision-makers a clear view of important business activity, pending work, performance, targets, and operational status.',
    capabilities: [
      'Executive summaries',
      'Department dashboards',
      'Operational KPIs',
      'Pending-work visibility',
    ],
  },
  {
    number: '02',
    title: 'Performance Reporting',
    description:
      'Measure users, teams, departments, projects, sales activity, workflows, and other business performance through structured reports.',
    capabilities: [
      'Team performance',
      'Target tracking',
      'Conversion analysis',
      'Activity reporting',
    ],
  },
  {
    number: '03',
    title: 'Operational Analytics',
    description:
      'Analyse real business processes such as projects, inventory, procurement, payments, field work, customer service, and task completion.',
    capabilities: [
      'Project analytics',
      'Inventory reporting',
      'Payment reporting',
      'Workflow analysis',
    ],
  },
  {
    number: '04',
    title: 'Filtered Reports & Exports',
    description:
      'Allow users to search, filter, segment, and export the exact records required for operations, reviews, or further analysis.',
    capabilities: [
      'Advanced filters',
      'Date ranges',
      'Role-specific reports',
      'CSV & spreadsheet exports',
    ],
  },
];

const dataAreas = [
  'Leads',
  'Meetings',
  'Projects',
  'Customers',
  'Payments',
  'Inventory',
  'Procurement',
  'Staff',
  'Attendance',
  'Dealers',
  'Complaints',
  'Operations',
];

const benefits = [
  {
    title: 'Faster Decision Making',
    description:
      'Important business information can be surfaced directly instead of being manually collected from multiple teams or spreadsheets.',
  },
  {
    title: 'Better Operational Visibility',
    description:
      'Management can understand what is completed, delayed, pending, overdue, or performing below expectations.',
  },
  {
    title: 'Consistent Reporting',
    description:
      'Defined report logic reduces dependence on manually prepared reports that may vary between users or departments.',
  },
  {
    title: 'Actionable Information',
    description:
      'Reports can be designed around decisions and operational actions instead of simply displaying large volumes of raw data.',
  },
];

const connectedSystems = [
  {
    title: 'CRM & ERP',
    description:
      'Use shared sales, project, finance, HR, inventory, customer, and operational data for connected reporting.',
    href: '/custom-crm-erp-development',
  },
  {
    title: 'Mobile Applications',
    description:
      'Field and mobile activity can contribute to central reporting when applications use the same connected backend.',
    href: '/mobile-app-development',
  },
  {
    title: 'Business Automation',
    description:
      'Analytics can help identify overdue actions, bottlenecks, workload, process delays, and automation opportunities.',
    href: '/business-automation',
  },
  {
    title: 'Customer & Partner Portals',
    description:
      'Portal activity, service requests, dealer operations, and customer interactions can become part of management reporting.',
    href: '/customer-partner-portal-development',
  },
];

const process = [
  {
    step: '01',
    title: 'Identify the Decisions',
    description:
      'We first identify what management or operational users actually need to understand, compare, monitor, or act upon.',
  },
  {
    step: '02',
    title: 'Map the Data',
    description:
      'The required customers, projects, transactions, activities, statuses, dates, users, and other records are mapped to the report logic.',
  },
  {
    step: '03',
    title: 'Define Metrics & Filters',
    description:
      'KPIs, calculations, time periods, user scopes, branch filters, statuses, segments, and export requirements are defined clearly.',
  },
  {
    step: '04',
    title: 'Build Dashboards & Reports',
    description:
      'The reporting experience is implemented around practical usage, with appropriate dashboards, tables, filters, and downloadable records.',
  },
];

const faqs = [
  {
    question: 'Can you build custom dashboards for our business?',
    answer:
      'Yes. Dashboards can be designed around the specific metrics, workflows, departments, targets, projects, users, and operational information your organisation needs.',
  },
  {
    question: 'Can reports use data from our CRM or ERP?',
    answer:
      'Yes. When the required data exists in the CRM, ERP, or connected backend, reports can use that information for management dashboards, operational analysis, and exports.',
  },
  {
    question: 'Can different roles see different reports?',
    answer:
      'Yes. Reporting access can be controlled so users, managers, departments, branches, and owners see only the information appropriate to their permissions and responsibilities.',
  },
  {
    question: 'Can users filter reports before exporting?',
    answer:
      'Yes. Reports can support search, date ranges, statuses, users, branches, projects, categories, and other filters before generating downloadable data.',
  },
  {
    question: 'Can reports be exported to CSV or spreadsheets?',
    answer:
      'Yes. Where required, filtered records and reporting data can be made available as CSV or spreadsheet-compatible exports.',
  },
  {
    question: 'Can reporting logic be changed later?',
    answer:
      'Yes. KPIs, calculations, filters, dashboards, and reporting requirements can be expanded as business processes and management needs evolve.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id':
        'https://www.s4starttech.com/analytics-reporting/#service',
      name: 'Analytics and Reporting Software Development',
      provider: {
        '@type': 'Organization',
        name: 'S4Start Technologies',
        url: 'https://www.s4starttech.com',
      },
      url: 'https://www.s4starttech.com/analytics-reporting',
      description:
        'Custom business dashboards, management reporting, operational analytics, KPI systems, filters, and business data exports.',
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
      serviceType: [
        'Business Analytics Development',
        'Dashboard Development',
        'Reporting Software Development',
        'KPI Dashboard Development',
        'Operational Analytics',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function AnalyticsReportingPage() {
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
                  Analytics & business reporting
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
              <a href="/" className="transition hover:text-white">
                Home
              </a>

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
  href="/book-demo"
  className="rounded-xl bg-blue-500 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-400"
>
  Book a Demo
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
          <div className="absolute left-0 top-0 h-[650px] w-[650px] rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-32">
            <div>
              <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                Analytics & Reporting Software
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Turn operational data into
                <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  useful business visibility
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                We develop dashboards, management reports, performance
                analytics, advanced filters, and downloadable business data
                around the workflows your organisation actually uses.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
  href="/book-demo"
  className="rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-400"
>
  Discuss Your Reporting
</a>

                <a
                  href="/projects"
                  className="rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/10"
                >
                  View Enterprise Case Study
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-2">
                {[
                  'Dashboards',
                  'KPIs',
                  'Reports',
                  'Filters',
                  'Analytics',
                  'Exports',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl shadow-black/30">
              <Image
                src="/showcase/crm-dashboard.png"
                alt="Custom business analytics and reporting dashboard"
                width={1536}
                height={794}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* REPORT TYPES */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Reporting capabilities
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Reporting designed around
                <span className="block text-blue-300">
                  how the business is managed
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Good reporting starts with the decision a user needs to make,
                not with adding as many charts as possible.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {reportingAreas.map((area) => (
                <article
                  key={area.number}
                  className="rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 transition hover:border-blue-400/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-sm font-bold text-blue-300">
                    {area.number}
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold">
                    {area.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {area.description}
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {area.capabilities.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/50 p-4"
                      >
                        <span className="h-2 w-2 shrink-0 rounded-full bg-blue-400" />

                        <span className="text-sm text-slate-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DATA COVERAGE */}
        <section className="border-b border-white/10 bg-slate-900/45">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Connected reporting
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Analyse information across departments
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-300">
                  When a business platform keeps operational data connected,
                  reporting can go beyond isolated department spreadsheets.
                </p>

                <p className="mt-4 leading-8 text-slate-400">
                  Management can view different parts of the organisation
                  through a shared reporting layer while permissions continue
                  to control what each user can access.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {dataAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 p-5"
                  >
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    <span className="font-medium text-slate-300">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONNECTED SYSTEMS */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                One reporting layer
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Reporting can span your complete software ecosystem
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                Dashboards and reports become more useful when CRM, ERP,
                portals, mobile applications, and operational workflows share
                connected business data.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {connectedSystems.map((system) => (
                <article
                  key={system.title}
                  className="flex flex-col rounded-3xl border border-white/10 bg-slate-900/60 p-7"
                >
                  <div className="h-1 w-10 rounded-full bg-blue-400" />

                  <h3 className="mt-6 text-xl font-semibold">
                    {system.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-slate-400">
                    {system.description}
                  </p>

                  <a
                    href={system.href}
                    className="mt-6 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
                  >
                    Explore →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="border-b border-white/10 bg-slate-900/45">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Business value
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Information that supports action
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-3xl border border-white/10 bg-slate-950/70 p-7"
                >
                  <div className="h-1 w-10 rounded-full bg-blue-400" />

                  <h3 className="mt-6 text-xl font-semibold">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Reporting design process
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Define the question before building the dashboard
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => (
                <article
                  key={item.step}
                  className="rounded-3xl border border-white/10 bg-slate-900/60 p-7"
                >
                  <p className="text-sm font-bold text-blue-300">
                    {item.step}
                  </p>

                  <h3 className="mt-5 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-white/10 bg-slate-900/45">
          <div className="mx-auto max-w-5xl px-6 py-24 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Analytics FAQ
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Frequently asked questions
              </h2>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-white/10 bg-slate-950/70"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 font-semibold">
                    <span>{faq.question}</span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-blue-300 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <div className="border-t border-white/10 px-6 py-5">
                    <p className="leading-7 text-slate-400">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
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
                    Build useful reporting
                  </p>

                  <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl">
                    Tell us what your management team needs to understand.
                    <span className="block text-blue-300">
                      We can design the reporting around those decisions.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
                    Start with the metrics, departments, users, filters,
                    calculations, and business questions that matter.
                  </p>
                </div>

                <a
  href="/book-demo"
  className="inline-flex justify-center rounded-xl bg-blue-500 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-400"
>
  Discuss Your Reporting
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

              <a
                href="/business-automation"
                className="hover:text-white"
              >
                Automation
              </a>

              <a
                href="/customer-partner-portal-development"
                className="hover:text-white"
              >
                Portals
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