import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Automation & Workflow Software Development',

  description:
    'S4Start Technologies develops custom workflow automation, approval systems, notifications, API integrations, reminders, dashboards, and connected business software.',

  alternates: {
    canonical: '/business-automation',
  },

  keywords: [
    'Business Automation Software India',
    'Workflow Automation Software',
    'Custom Workflow Development',
    'Business Process Automation',
    'Approval Workflow Software',
    'Enterprise Automation',
    'API Integration Services',
    'Business Software Integration',
    'Automated Reminder System',
    'Operational Workflow Software',
  ],

  openGraph: {
    title:
      'Business Automation & Workflow Software | S4Start Technologies',

    description:
      'Custom workflow automation, approvals, notifications, integrations, reminders, and connected operational software.',

    url: 'https://www.s4starttech.com/business-automation',

    images: [
      {
        url: '/showcase/crm-dashboard.png',
        alt: 'Business workflow automation software developed by S4Start Technologies',
      },
    ],
  },
};

const automationAreas = [
  {
    number: '01',
    title: 'Workflow Automation',
    description:
      'Move work automatically between users, departments, statuses, and operational stages based on defined business rules.',
    items: [
      'Department workflows',
      'Status transitions',
      'Task routing',
      'Process triggers',
    ],
  },
  {
    number: '02',
    title: 'Approvals & Controls',
    description:
      'Replace informal approvals with structured digital processes that maintain responsibility, status, and operational visibility.',
    items: [
      'Manager approvals',
      'Role-based actions',
      'Approval history',
      'Controlled changes',
    ],
  },
  {
    number: '03',
    title: 'Notifications & Reminders',
    description:
      'Surface important work at the right time through reminders, alerts, pending-work queues, and operational notifications.',
    items: [
      'Due-date reminders',
      'Pending action alerts',
      'Status notifications',
      'Operational follow-ups',
    ],
  },
  {
    number: '04',
    title: 'Integrations & Data Flow',
    description:
      'Connect applications and services so important information can move between systems without unnecessary duplicate entry.',
    items: [
      'API integrations',
      'Data synchronisation',
      'Connected applications',
      'Shared business records',
    ],
  },
];

const examples = [
  'Automatically create the next operational task when a stage is completed',
  'Route an approval to the correct manager based on role or department',
  'Show overdue work when a target date or process deadline is missed',
  'Notify relevant users when important business statuses change',
  'Connect customer, project, payment, stock, and operational information',
  'Create management dashboards from live operational data',
  'Reduce repeated entry by synchronising connected systems',
  'Maintain a digital history of important actions and workflow changes',
];

const benefits = [
  {
    title: 'Less Repetitive Work',
    description:
      'Routine actions, status checks, reminders, routing, and information movement can be handled systematically instead of repeatedly by employees.',
  },
  {
    title: 'Clear Responsibility',
    description:
      'Users can see what requires attention, who owns the next action, what is pending, and where a process currently stands.',
  },
  {
    title: 'Fewer Disconnected Records',
    description:
      'Connected workflows reduce dependence on separate spreadsheets, chat messages, notebooks, and duplicate manual records.',
  },
  {
    title: 'Better Management Visibility',
    description:
      'Operational dashboards and reporting make delays, workloads, pending actions, and process performance easier to understand.',
  },
];

const integrationTypes = [
  {
    title: 'CRM & ERP',
    description:
      'Connect sales, projects, staff, finance, inventory, procurement, customers, and operational workflows.',
    href: '/custom-crm-erp-development',
  },
  {
    title: 'Mobile Applications',
    description:
      'Allow customers, employees, dealers, and field teams to participate in automated workflows from mobile devices.',
    href: '/mobile-app-development',
  },
  {
    title: 'Customer & Dealer Portals',
    description:
      'Automatically surface relevant project, payment, document, service, and order information to external users.',
    href: '/projects',
  },
  {
    title: 'External Services & APIs',
    description:
      'Connect suitable third-party services and business systems through secure integration workflows.',
    href: '/contact',
  },
];

const process = [
  {
    step: '01',
    title: 'Map the Current Process',
    description:
      'We identify how work currently moves between people, departments, spreadsheets, software, messages, approvals, and reports.',
  },
  {
    step: '02',
    title: 'Identify Automation Opportunities',
    description:
      'Repeated actions, manual handoffs, delays, duplicate entry, reminders, approvals, and disconnected data are analysed.',
  },
  {
    step: '03',
    title: 'Define Rules & Responsibilities',
    description:
      'We define triggers, permissions, conditions, statuses, exceptions, notifications, and ownership for the new workflow.',
  },
  {
    step: '04',
    title: 'Build & Improve',
    description:
      'The workflow is implemented, tested against real operations, and expanded as additional automation opportunities become useful.',
  },
];

const faqs = [
  {
    question: 'What is business process automation?',
    answer:
      'Business process automation uses software to reduce repetitive manual work and coordinate actions, information, approvals, notifications, and responsibilities across defined operational workflows.',
  },
  {
    question: 'Can existing manual workflows be automated?',
    answer:
      'Often yes. The current workflow can first be mapped to identify repeated steps, manual handoffs, duplicate data entry, approval delays, reminders, and other areas suitable for software automation.',
  },
  {
    question: 'Can automation work with a custom CRM or ERP?',
    answer:
      'Yes. Workflow automation can be built directly into CRM and ERP systems so sales, projects, inventory, finance, HR, customers, dealers, and other processes remain connected.',
  },
  {
    question: 'Can the system automatically send reminders?',
    answer:
      'Yes. Reminders and alerts can be triggered by dates, pending actions, workflow statuses, deadlines, approvals, or other defined business conditions.',
  },
  {
    question: 'Can different departments have different approval workflows?',
    answer:
      'Yes. Permissions, approval levels, responsibilities, conditions, and workflow stages can be configured differently for different departments and user roles.',
  },
  {
    question: 'Can you integrate our existing applications?',
    answer:
      'Integration depends on the capabilities and APIs available in the existing applications. Where suitable integration methods exist, systems can often exchange information and participate in connected workflows.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id':
        'https://www.s4starttech.com/business-automation/#service',
      name: 'Business Automation and Workflow Software Development',
      provider: {
        '@type': 'Organization',
        name: 'S4Start Technologies',
        url: 'https://www.s4starttech.com',
      },
      url: 'https://www.s4starttech.com/business-automation',
      description:
        'Custom business process automation, workflow software, approval systems, notifications, API integrations, reminders, and operational automation.',
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
      serviceType: [
        'Business Process Automation',
        'Workflow Automation',
        'API Integration',
        'Approval Workflow Development',
        'Enterprise Automation',
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

export default function BusinessAutomationPage() {
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
                  Business automation & integrations
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
                href="/projects"
                className="transition hover:text-white"
              >
                Projects
              </a>

              <a
                href="/contact"
                className="rounded-xl bg-blue-500 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-400"
              >
                Discuss Automation
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
          <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-5xl text-center">
              <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                Business Automation & Integrations
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Turn repetitive business processes into
                <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  connected digital workflows
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                We develop workflow automation, approval systems, reminders,
                notifications, integrations, dashboards, and operational
                software that help information and responsibilities move
                through your organisation more efficiently.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="rounded-xl bg-blue-500 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-400"
                >
                  Discuss Your Workflow
                </a>

                <a
                  href="/projects"
                  className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/10"
                >
                  View Enterprise Case Study
                </a>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-2">
                {[
                  'Workflows',
                  'Approvals',
                  'Reminders',
                  'Notifications',
                  'APIs',
                  'Data Sync',
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
          </div>
        </section>

        {/* AUTOMATION AREAS */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Automation capabilities
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Automate the movement of
                <span className="block text-blue-300">
                  work, information and decisions
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Automation is most useful when it supports a clearly defined
                business process instead of adding another disconnected tool.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {automationAreas.map((area) => (
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
                    {area.items.map((item) => (
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

        {/* EXAMPLES */}
        <section className="border-b border-white/10 bg-slate-900/45">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Practical automation
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                What can actually be automated?
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                The answer depends on your workflow, but many repetitive
                operational decisions and handoffs can be converted into
                structured software processes.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                The goal is not automation for its own sake. It is to reduce
                unnecessary manual coordination while keeping important
                exceptions and human decisions under control.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {examples.map((example, index) => (
                <div
                  key={example}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 p-5"
                >
                  <p className="text-xs font-bold text-blue-300">
                    {String(index + 1).padStart(2, '0')}
                  </p>

                  <p className="mt-3 leading-7 text-slate-300">
                    {example}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONNECTED SYSTEMS */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Connected architecture
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Automation becomes stronger when your systems communicate
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                Business automation can connect internal software, mobile
                applications, customer experiences, partner platforms, and
                suitable external services.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {integrationTypes.map((item) => (
                <article
                  key={item.title}
                  className="flex flex-col rounded-3xl border border-white/10 bg-slate-900/60 p-7"
                >
                  <div className="h-1 w-10 rounded-full bg-blue-400" />

                  <h3 className="mt-6 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-slate-400">
                    {item.description}
                  </p>

                  <a
                    href={item.href}
                    className="mt-6 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
                  >
                    {item.href === '/contact'
                      ? 'Discuss Integration →'
                      : 'Explore →'}
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
                Operational impact
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Better processes, not simply more software
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
                Our approach
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Understand the process before automating it
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                Good automation begins by understanding where work currently
                slows down and which decisions should remain under human
                control.
              </p>
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
                Automation FAQ
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
                    Automate your workflow
                  </p>

                  <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl">
                    Show us the process that consumes your team&apos;s time.
                    <span className="block text-blue-300">
                      We can study how software could improve it.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
                    Start with the current process, users, approvals,
                    repetitive work, delays, and systems involved.
                  </p>
                </div>

                <a
                  href="/contact"
                  className="inline-flex justify-center rounded-xl bg-blue-500 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-400"
                >
                  Discuss Your Workflow
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