import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Custom CRM & ERP Development Company in India',

  description:
    'S4Start Technologies develops custom CRM and ERP software for sales, projects, HR, inventory, finance, customers, dealers, field teams, analytics, and business automation.',

  alternates: {
    canonical: '/custom-crm-erp-development',
  },

  keywords: [
    'Custom CRM Development India',
    'Custom ERP Development India',
    'CRM Software Development Company',
    'ERP Software Development Company',
    'Custom Business Software India',
    'Enterprise CRM Development',
    'ERP Software for Business',
    'Business Management Software Development',
    'Custom Workflow Software',
    'CRM and ERP Integration',
  ],

  openGraph: {
    title:
      'Custom CRM & ERP Development Company | S4Start Technologies',

    description:
      'Custom CRM and ERP platforms engineered around real business workflows, departments, permissions, customers, projects, inventory, finance, and reporting.',

    url: 'https://www.s4starttech.com/custom-crm-erp-development',

    images: [
      {
        url: '/showcase/crm-dashboard.png',
        alt: 'Custom CRM and ERP platform developed by S4Start Technologies',
      },
    ],
  },
};

const crmFeatures = [
  'Lead and enquiry management',
  'Telecalling and follow-ups',
  'Meeting management',
  'Customer management',
  'Sales performance tracking',
  'Role-based access',
  'Notifications and reminders',
  'Dashboards and analytics',
];

const erpFeatures = [
  'Project lifecycle management',
  'Procurement workflows',
  'Inventory and stock',
  'Vendor management',
  'Payments and invoicing',
  'HR and attendance',
  'Payroll workflows',
  'Documents and approvals',
];

const platformUsers = [
  'Business Owners',
  'Management Teams',
  'Sales Teams',
  'Project Teams',
  'HR & Accounts',
  'Field Employees',
  'Customers',
  'Dealers & Partners',
];

const benefits = [
  {
    title: 'Designed Around Your Workflow',
    description:
      'Your departments, approvals, responsibilities, reports, and working processes define the software instead of forcing the business into generic software.',
  },
  {
    title: 'One Connected System',
    description:
      'CRM, projects, inventory, staff, finance, customers, dealers, and reporting can share information through one connected platform.',
  },
  {
    title: 'Role-Based Control',
    description:
      'Different users can receive different visibility, permissions, actions, approvals, and reporting based on their actual responsibilities.',
  },
  {
    title: 'Expandable Architecture',
    description:
      'Start with the modules you need now and introduce additional departments, mobile apps, integrations, analytics, and automation later.',
  },
];

const developmentSteps = [
  {
    step: '01',
    title: 'Understand Your Business',
    description:
      'We study users, departments, current systems, workflows, approvals, reports, bottlenecks, and operational requirements.',
  },
  {
    step: '02',
    title: 'Design the Platform',
    description:
      'Modules, permissions, database relationships, workflows, integrations, and implementation priorities are structured around those requirements.',
  },
  {
    step: '03',
    title: 'Develop in Stages',
    description:
      'Features are developed and tested incrementally so working functionality can be reviewed without introducing unnecessary operational risk.',
  },
  {
    step: '04',
    title: 'Deploy & Expand',
    description:
      'The platform moves into production and can continue evolving through maintenance, optimisation, new modules, and integrations.',
  },
];

const faqs = [
  {
    question: 'What is custom CRM development?',
    answer:
      'Custom CRM development means building customer, lead, sales, follow-up, meeting, communication, reporting, and team workflows specifically around the processes of your organisation rather than relying entirely on generic CRM software.',
  },
  {
    question: 'What is custom ERP development?',
    answer:
      'Custom ERP development connects operational areas such as projects, inventory, procurement, staff, finance, documents, approvals, customers, and reporting through a system designed around the organisation.',
  },
  {
    question: 'Can CRM and ERP be part of the same system?',
    answer:
      'Yes. CRM and ERP workflows can share users, customers, projects, permissions, business data, reporting, and integrations within one connected architecture.',
  },
  {
    question: 'Can we start with only a few modules?',
    answer:
      'Yes. A platform can begin with the highest-priority modules and expand later as the business grows or additional requirements become important.',
  },
  {
    question: 'Can existing software be extended?',
    answer:
      'Often yes. The existing architecture can first be reviewed to determine whether new modules, integrations, mobile applications, performance improvements, or workflow changes can be introduced safely.',
  },
  {
    question: 'Do you develop mobile applications with ERP systems?',
    answer:
      'Yes. Mobile applications can be developed for employees, field teams, customers, dealers, contractors, partners, and other user groups that need dedicated mobile access.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id':
        'https://www.s4starttech.com/custom-crm-erp-development/#service',
      name: 'Custom CRM and ERP Development',
      provider: {
        '@type': 'Organization',
        name: 'S4Start Technologies',
        url: 'https://www.s4starttech.com',
      },
      url:
        'https://www.s4starttech.com/custom-crm-erp-development',
      description:
        'Custom CRM and ERP software development for sales, projects, inventory, procurement, HR, finance, customers, dealers, analytics, and business automation.',
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
      serviceType: [
        'Custom CRM Development',
        'Custom ERP Development',
        'Enterprise Software Development',
        'Business Automation',
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

export default function CustomCrmErpDevelopmentPage() {
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
                  Enterprise software development
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
              <a href="/" className="transition hover:text-white">
                Home
              </a>

              <a
                href="/projects"
                className="transition hover:text-white"
              >
                Projects
              </a>

              <a
                href="/about"
                className="transition hover:text-white"
              >
                About
              </a>

              <a
                href="/contact"
                className="rounded-xl bg-blue-500 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-400"
              >
                Discuss Your Project
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
          <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-32">
            <div>
              <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                Custom CRM & ERP Development
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                CRM & ERP software built around
                <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  your business operations
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                We develop custom business platforms that connect sales,
                customers, projects, employees, inventory, procurement,
                finance, reporting, mobile users, and operational workflows.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-400"
                >
                  Discuss Your Requirements
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
                  'Custom CRM',
                  'Custom ERP',
                  'Mobile Apps',
                  'Portals',
                  'Automation',
                  'Analytics',
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

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-black/30 sm:p-6">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white">
                <Image
                  src="/showcase/crm-dashboard.png"
                  alt="Custom CRM ERP development platform dashboard"
                  width={1536}
                  height={794}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* CRM + ERP */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Connected business platform
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                CRM manages the relationship.
                <span className="block text-blue-300">
                  ERP manages the operation.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                When both systems are designed together, sales information
                can flow naturally into projects, operations, payments,
                customer service, reporting, and other departments.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-blue-400/20 bg-blue-500/10 p-8 sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                  Custom CRM
                </p>

                <h3 className="mt-4 text-3xl font-bold">
                  Manage customers and sales workflows
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  CRM functionality can be designed around the way enquiries,
                  leads, teams, meetings, follow-ups, customers, and sales
                  decisions actually move through your organisation.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {crmFeatures.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-950/40 p-4"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />

                      <span className="text-sm text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Custom ERP
                </p>

                <h3 className="mt-4 text-3xl font-bold">
                  Connect departments and operations
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  ERP modules can connect operational departments and give
                  management shared information instead of maintaining
                  independent records across disconnected tools.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {erpFeatures.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-950/60 p-4"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />

                      <span className="text-sm text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REAL PLATFORM */}
        <section className="border-b border-white/10 bg-slate-900/45">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Production experience
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Built beyond simple sales CRM
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Our enterprise work includes systems where CRM functionality
                  expands into project management, workforce operations,
                  inventory, procurement, finance, customer platforms, dealer
                  platforms, and mobile access.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    'Complex role and permission structures',
                    'Multiple operational departments',
                    'Large connected datasets',
                    'Field and mobile workflows',
                    'Customer-facing applications',
                    'Dealer and partner platforms',
                    'Continuous production expansion',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />

                      <p className="text-slate-300">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5">
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white">
                  <Image
                    src="/showcase/crm-live-location.png"
                    alt="Custom ERP live staff management software"
                    width={1536}
                    height={794}
                    className="h-auto w-full"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="overflow-hidden rounded-3xl border border-white/10 bg-white">
                    <Image
                      src="/showcase/crm-hr-portal.png"
                      alt="Custom HR payroll ERP module"
                      width={1536}
                      height={794}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>

                  <div className="overflow-hidden rounded-3xl border border-white/10 bg-white">
                    <Image
                      src="/showcase/crm-stock-management.png"
                      alt="Custom inventory ERP software"
                      width={1536}
                      height={794}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* USERS */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Different users
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  One platform does not mean one interface
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Different user groups can have dedicated dashboards,
                  permissions, workflows, portals, or mobile applications
                  while remaining connected to the same business ecosystem.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {platformUsers.map((user) => (
                  <div
                    key={user}
                    className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
                  >
                    <div className="h-1 w-10 rounded-full bg-blue-400" />

                    <p className="mt-4 font-semibold">
                      {user}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="border-b border-white/10 bg-slate-900/45">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Why custom software
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                When generic software stops fitting the business
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

        {/* DEVELOPMENT */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Development process
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Custom software starts with understanding the operation
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {developmentSteps.map((item) => (
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
                CRM & ERP FAQ
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
                    <span>
                      {faq.question}
                    </span>

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
                    Custom CRM & ERP
                  </p>

                  <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl">
                    Tell us how your business works.
                    <span className="block text-blue-300">
                      We can design the software around it.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
                    Start with your departments, workflows, current problems,
                    users, reporting needs, and business goals. The technical
                    solution can be structured from there.
                  </p>
                </div>

                <a
                  href="/contact"
                  className="inline-flex justify-center rounded-xl bg-blue-500 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-400"
                >
                  Discuss Your CRM / ERP
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

              <a href="/projects" className="hover:text-white">
                Projects
              </a>

              <a href="/about" className="hover:text-white">
                About
              </a>

              <a href="/privacy-policy" className="hover:text-white">
                Privacy
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