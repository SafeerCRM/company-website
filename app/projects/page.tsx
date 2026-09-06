import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Software Projects & Enterprise Case Studies',

  description:
    'Explore enterprise CRM, ERP, customer platform, dealer platform, mobile application, workflow automation, and business software projects developed by S4Start Technologies.',

  alternates: {
    canonical: '/projects',
  },

  openGraph: {
    title:
      'Software Projects & Enterprise Case Studies | S4Start Technologies',

    description:
      'Explore connected CRM, ERP, customer, dealer, mobile, and business automation platforms developed for real operational requirements.',

    url: 'https://www.s4starttech.com/projects',

    images: [
      {
        url: '/showcase/crm-dashboard.png',
        alt: 'Enterprise CRM and ERP platform developed by S4Start Technologies',
      },
    ],
  },
};

const coreCapabilities = [
  'Lead, meeting and follow-up management',
  'Project lifecycle and department workflows',
  'Staff attendance, leave and payroll',
  'Live field-force location tracking',
  'Inventory and stock management',
  'Procurement and purchase workflows',
  'Payment collection and invoicing',
  'Customer complaint management',
  'Documents and operational records',
  'Analytics, dashboards and exports',
  'Role-based permissions',
  'Web and Android access',
];

const platforms = [
  {
    number: '01',
    title: 'CRM & ERP Core',
    audience: 'Management & Operations',
    description:
      'The central operational system connects departments, employees, projects, customers, finance, stock, procurement and management reporting.',
  },
  {
    number: '02',
    title: 'Customer Platform',
    audience: 'Customer Experience',
    description:
      'A dedicated customer environment provides project visibility, payments, documents, service requests, complaints, updates and after-sales workflows.',
  },
  {
    number: '03',
    title: 'Dealer Platform',
    audience: 'Dealer Network',
    description:
      'Dealers receive their own operational environment for stock visibility, orders, payments, documents and business information while remaining connected to central operations.',
  },
];

const outcomes = [
  {
    title: 'Connected Operations',
    description:
      'Departments and external users work through connected workflows instead of relying on disconnected spreadsheets, messages and manual records.',
  },
  {
    title: 'Operational Visibility',
    description:
      'Dashboards, status tracking, filters, reports and analytics give management clearer visibility across different areas of the organisation.',
  },
  {
    title: 'Controlled Access',
    description:
      'Role-based permissions determine which records, pages, actions and reports are available to each type of user.',
  },
  {
    title: 'Expandable Architecture',
    description:
      'New departments, workflows, reports, integrations and applications can be introduced as requirements continue to grow.',
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* NAVIGATION */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <a href="/" className="group">
            <p className="text-xl font-bold tracking-tight transition group-hover:text-blue-300">
              S4Start Technologies
            </p>

            <p className="text-sm text-slate-400">
              Software built for real businesses
            </p>
          </a>

          <nav className="flex flex-wrap items-center gap-5 text-sm text-slate-300">
            <a className="transition hover:text-white" href="/">
              Home
            </a>

            <a className="transition hover:text-white" href="/about">
              About
            </a>

            <a className="font-medium text-blue-300" href="/projects">
              Projects
            </a>

            <a className="transition hover:text-white" href="/support">
              Support
            </a>

            <a className="transition hover:text-white" href="/contact">
              Contact
            </a>

            <a
  href="/book-demo"
  className="rounded-xl bg-blue-500 px-4 py-2 font-semibold text-white transition hover:bg-blue-400"
>
  Discuss a Project
</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.20),_transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-5xl">
            <div className="inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
              Projects & case studies
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Software built for
              <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                real operational complexity
              </span>
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
              Our work focuses on connected business systems that bring
              departments, employees, customers, partners, workflows, data,
              approvals and reporting into reliable digital platforms.
            </p>

            <p className="mt-4 max-w-4xl leading-8 text-slate-400">
              The case study below demonstrates the architecture and scope of
              a production enterprise ecosystem while protecting confidential
              client and business information.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDY INTRODUCTION */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Featured enterprise case study
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                A connected business ecosystem across three platforms
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                What began as business management software evolved into a
                broader digital ecosystem connecting internal operations,
                customers and dealer networks.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                Each platform serves a different user group while remaining
                connected through shared business data, APIs, permissions and
                operational workflows.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  'CRM',
                  'ERP',
                  'Customer Platform',
                  'Dealer Platform',
                  'Android',
                  'Cloud',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-4 sm:p-6">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl shadow-black/30">
                <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />

                  <span className="ml-3 text-xs font-medium text-slate-500">
                    Enterprise CRM / ERP Platform
                  </span>
                </div>

                <Image
                  src="/showcase/crm-dashboard.png"
                  alt="Enterprise CRM and ERP dashboard developed by S4Start Technologies"
                  width={1536}
                  height={794}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PLATFORMS */}
      <section className="border-b border-white/10 bg-slate-900/45">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              Platform architecture
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Three experiences built around different users
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Instead of forcing every user into the same interface, each
              audience receives a purpose-built experience connected to the
              wider business platform.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {platforms.map((platform) => (
              <article
                key={platform.number}
                className="rounded-3xl border border-white/10 bg-slate-950/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-sm font-bold text-blue-300">
                  {platform.number}
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {platform.audience}
                </p>

                <h3 className="mt-2 text-2xl font-semibold">
                  {platform.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {platform.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CRM DEEP DIVE */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Platform 01
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                CRM & ERP Core
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                The core system handles the operational complexity behind the
                business and provides different departments with controlled
                access to shared information and workflows.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {coreCapabilities.map((capability) => (
                  <div
                    key={capability}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-900/50 p-4"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />

                    <p className="text-sm leading-6 text-slate-300">
                      {capability}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white">
                <Image
                  src="/showcase/crm-live-location.png"
                  alt="Live field staff operations software"
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
                    alt="HR and payroll management software"
                    width={1536}
                    height={794}
                    className="h-full w-full object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>

                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white">
                  <Image
                    src="/showcase/crm-stock-management.png"
                    alt="Inventory and stock management software"
                    width={1536}
                    height={794}
                    className="h-full w-full object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER PLATFORM */}
      <section className="border-b border-white/10 bg-slate-900/45">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Platform 02
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Customer Platform
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                Customers receive their own experience instead of being
                exposed to internal business software.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                The platform provides visibility into project progress,
                payments, documents, updates, complaints, service requests
                and after-sales activities.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  'Project journey tracking',
                  'Payment information',
                  'Document access',
                  'Customer notifications',
                  'Complaint management',
                  'After-sales workflows',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-slate-300"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white shadow-xl shadow-black/20">
                <Image
                  src="/showcase/customer-project-tracker.png"
                  alt="Customer project tracking application"
                  width={1536}
                  height={794}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 65vw"
                />
              </div>

              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white">
                <Image
                  src="/showcase/customer-dashboard.png"
                  alt="Customer portal dashboard"
                  width={1536}
                  height={794}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 65vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEALER PLATFORM */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white shadow-xl shadow-black/20">
              <Image
                src="/showcase/dealer-dashboard.png"
                alt="Dealer management and ordering platform"
                width={1536}
                height={794}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Platform 03
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Dealer Platform
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                Dealers interact with the business through a dedicated
                platform connected to central inventory and trading
                operations.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  'Stock visibility',
                  'Material and kit ordering',
                  'Order lifecycle tracking',
                  'Payment records',
                  'Dealer documents',
                  'Business analytics',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-slate-300"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECTED ARCHITECTURE */}
      <section className="border-b border-white/10 bg-slate-900/45">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Connected architecture
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Separate applications without creating separate data silos
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Different interfaces can serve different users while the
              underlying architecture keeps important business information
              and workflows connected.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-5xl">
            <div className="grid gap-4 md:grid-cols-3">
              {platforms.map((platform) => (
                <div
                  key={platform.number}
                  className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-6 text-center"
                >
                  <p className="text-sm font-bold text-blue-300">
                    {platform.number}
                  </p>

                  <p className="mt-3 text-lg font-semibold">
                    {platform.title}
                  </p>

                  <p className="mt-2 text-sm text-slate-400">
                    {platform.audience}
                  </p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-4 rounded-2xl border border-white/10 bg-slate-950 p-6 text-center">
              <p className="font-semibold text-slate-200">
                Shared Backend • APIs • Business Data • Permissions •
                Operational Workflows
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS IMPACT */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              Business impact
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              The value comes from connecting the operation
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Enterprise software becomes valuable when it improves how
              information, responsibilities and decisions move through the
              organisation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((outcome) => (
              <article
                key={outcome.title}
                className="rounded-3xl border border-white/10 bg-slate-900/60 p-7"
              >
                <div className="h-1 w-10 rounded-full bg-blue-400" />

                <h3 className="mt-6 text-xl font-semibold">
                  {outcome.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {outcome.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                value: '25+',
                label: 'Role-based user types',
              },
              {
                value: '3',
                label: 'Connected platform experiences',
              },
              {
                value: 'Web + Android',
                label: 'Multi-platform access',
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-blue-400/20 bg-blue-500/10 p-8"
              >
                <p className="text-3xl font-bold tracking-tight">
                  {stat.value}
                </p>

                <p className="mt-3 text-slate-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVACY NOTE */}
      <section className="border-b border-white/10 bg-slate-900/45">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Client confidentiality
          </p>

          <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-400">
            Public case studies focus on architecture, capabilities and
            product design. Confidential business information, sensitive
            operational data and private client details are intentionally
            excluded.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="rounded-[2rem] border border-blue-400/20 bg-gradient-to-r from-blue-500/10 via-slate-900 to-cyan-500/5 p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Your project
                </p>

                <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl">
                  Your software can be designed around your organisation
                </h2>

                <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
                  We can study your teams, departments, approvals, customer
                  journeys, reporting requirements, current systems and
                  operational challenges before defining the right platform.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
  href="/book-demo"
  className="inline-flex justify-center rounded-xl bg-blue-500 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-400"
>
  Discuss Your Project
</a>

                <a
                  href="/about"
                  className="inline-flex justify-center rounded-xl border border-white/15 px-7 py-3.5 font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
                >
                  Our Approach
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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

            <a className="transition hover:text-white" href="/support">
              Support
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