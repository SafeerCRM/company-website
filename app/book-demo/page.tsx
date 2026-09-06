import type { Metadata } from 'next';

import BookDemoForm from './BookDemoForm';

export const metadata: Metadata = {
  title: 'Book a Demo | Discuss Your Software Project',

  description:
    'Discuss your CRM, ERP, mobile app, customer portal, dealer portal, business automation, analytics, or custom software requirement with S4Start Technologies.',

  alternates: {
    canonical: '/book-demo',
  },

  keywords: [
    'Book CRM Demo',
    'CRM Software Demo India',
    'ERP Software Demo',
    'Custom Software Consultation',
    'Discuss Software Project',
    'CRM Development Consultation',
    'ERP Development Consultation',
    'Business Software Development India',
  ],

  openGraph: {
    title: 'Book a Demo | S4Start Technologies',

    description:
      'Tell S4Start Technologies about your CRM, ERP, mobile app, portal, automation, analytics, or custom software requirement.',

    url: 'https://www.s4starttech.com/book-demo',
  },
};

const discussionAreas = [
  {
    title: 'Custom CRM & ERP',
    description:
      'Sales, projects, HR, inventory, procurement, payments, finance, customer management, operations, and connected business workflows.',
  },
  {
    title: 'Mobile Applications',
    description:
      'Android applications for customers, employees, field teams, dealers, contractors, and operational users.',
  },
  {
    title: 'Customer & Partner Portals',
    description:
      'Customer dashboards, dealer portals, partner platforms, document access, service workflows, payments, and self-service tools.',
  },
  {
    title: 'Business Automation',
    description:
      'Approvals, notifications, reminders, workflow controls, integrations, status automation, and connected business processes.',
  },
  {
    title: 'Analytics & Reporting',
    description:
      'Management dashboards, KPIs, operational reports, filters, performance analytics, and downloadable business data.',
  },
  {
    title: 'Custom Business Software',
    description:
      'A unique workflow or operational requirement that does not fit into a standard software category.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Tell us about the requirement',
    description:
      'Select the type of software and briefly explain what your organisation needs.',
  },
  {
    number: '02',
    title: 'We review the workflow',
    description:
      'The objective is to understand the users, processes, problems, and expected outcomes before discussing technology.',
  },
  {
    number: '03',
    title: 'Discuss the solution',
    description:
      'We can then discuss suitable modules, architecture, platforms, implementation stages, and next steps.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Book a Demo with S4Start Technologies',
  url: 'https://www.s4starttech.com/book-demo',
  description:
    'Discuss custom CRM, ERP, mobile applications, portals, automation, analytics, and business software requirements with S4Start Technologies.',
  mainEntity: {
    '@type': 'Organization',
    '@id': 'https://www.s4starttech.com/#organization',
    name: 'S4Start Technologies',
    url: 'https://www.s4starttech.com',
    email: 's4starttech@gmail.com',
  },
};

export default function BookDemoPage() {
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
                className="transition hover:text-white"
              >
                About
              </a>

              <a
                href="/contact"
                className="transition hover:text-white"
              >
                Contact
              </a>

              <a
                href="/book-demo"
                className="rounded-xl bg-blue-500 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-400"
              >
                Book a Demo
              </a>
            </nav>

            <a
              href="#project-form"
              className="rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white lg:hidden"
            >
              Start
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute left-0 top-0 h-[650px] w-[650px] rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
            <div className="max-w-5xl">
              <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                Discuss Your Software Requirement
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Start with the business problem.
                <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  We&apos;ll discuss the software around it.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Tell us what your organisation currently does, where the
                difficulty is, and what you want to improve. You do not need
                to prepare a technical specification before getting in touch.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  'CRM',
                  'ERP',
                  'Mobile Apps',
                  'Portals',
                  'Automation',
                  'Analytics',
                  'Custom Software',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#project-form"
                  className="rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-400"
                >
                  Describe Your Requirement
                </a>

                <a
                  href="/projects"
                  className="rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/10"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* DISCUSSION AREAS */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                What can we discuss?
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Software for different parts of your operation
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                Your requirement may involve one focused application or
                several connected platforms.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {discussionAreas.map((area) => (
                <article
                  key={area.title}
                  className="rounded-3xl border border-white/10 bg-slate-900/60 p-7"
                >
                  <div className="h-1 w-10 rounded-full bg-blue-400" />

                  <h3 className="mt-6 text-xl font-semibold">
                    {area.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {area.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FORM */}
        <section
          id="project-form"
          className="scroll-mt-24 border-b border-white/10 bg-slate-900/45"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Start your enquiry
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Tell us enough to understand the starting point
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Fill in the details and we&apos;ll prepare an email containing
                your requirement.
              </p>

              <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                <p className="font-semibold text-white">
                  No account required
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  The information is not submitted to a server from this
                  page. Your email application opens with the details
                  prepared for you to review before sending.
                </p>
              </div>

              <div className="mt-5 rounded-3xl border border-blue-400/20 bg-blue-500/10 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">
                  Direct email
                </p>

                <a
                  href="mailto:s4starttech@gmail.com"
                  className="mt-3 block break-all font-semibold text-white hover:text-blue-300"
                >
                  s4starttech@gmail.com
                </a>
              </div>
            </div>

            <BookDemoForm />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                What happens next?
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                A practical starting process
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-3xl border border-white/10 bg-slate-900/60 p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-sm font-bold text-blue-300">
                    {step.number}
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section>
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="rounded-[2rem] border border-blue-400/20 bg-gradient-to-r from-blue-500/15 via-slate-900 to-cyan-500/10 p-8 sm:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                    Not sure what software you need?
                  </p>

                  <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl">
                    Describe the operation instead of choosing the technology.
                  </h2>

                  <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                    Explain what your team does today, where the difficulty
                    occurs, and what outcome you want. That is enough to start
                    a useful discussion.
                  </p>
                </div>

                <a
                  href="#project-form"
                  className="inline-flex justify-center rounded-xl bg-blue-500 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-400"
                >
                  Start Your Enquiry
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

              <a href="/contact" className="hover:text-white">
                Contact
              </a>

              <a href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </a>

              <a href="/terms" className="hover:text-white">
                Terms
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}