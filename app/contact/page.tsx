import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact S4Start Technologies',

  description:
    'Contact S4Start Technologies for custom CRM, ERP, mobile app, customer portal, dealer portal, business automation, analytics, and software development enquiries.',

  alternates: {
    canonical: '/contact',
  },

  openGraph: {
    title: 'Contact S4Start Technologies',
    description:
      'Discuss your CRM, ERP, mobile application, portal, automation, analytics, or custom software requirements with S4Start Technologies.',
    url: 'https://www.s4starttech.com/contact',
  },
};

const enquiryTypes = [
  {
    title: 'CRM & ERP Development',
    description:
      'Custom systems for sales, projects, HR, finance, inventory, procurement, payments, operations, and management.',
    href: '/custom-crm-erp-development',
  },
  {
    title: 'Mobile App Development',
    description:
      'Business applications for customers, employees, dealers, field teams, contractors, and operational users.',
    href: '/mobile-app-development',
  },
  {
    title: 'Customer & Partner Portals',
    description:
      'Secure customer, dealer, partner, contractor, and self-service portals connected with your business software.',
    href: '/customer-partner-portal-development',
  },
  {
    title: 'Business Automation',
    description:
      'Workflow automation, approvals, reminders, notifications, integrations, and connected operational processes.',
    href: '/business-automation',
  },
  {
    title: 'Analytics & Reporting',
    description:
      'Custom dashboards, KPI systems, operational reports, filters, exports, and management visibility.',
    href: '/analytics-reporting',
  },
  {
    title: 'Custom Software Development',
    description:
      'Have a different business requirement? We can evaluate the workflow and design software around your actual operations.',
    href: 'mailto:s4starttech@gmail.com?subject=Custom%20Software%20Development%20Enquiry',
  },
];

const projectDetails = [
  'What problem or workflow you want to improve',
  'Who will use the software',
  'Main features or modules you need',
  'Whether you already use any existing software',
  'Web, Android, portal, or multi-platform requirement',
  'Approximate timeline, if you have one',
];

export default function ContactPage() {
  return (
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
              className="transition hover:text-white"
              href="/custom-crm-erp-development"
            >
              CRM & ERP
            </a>

            <a
              className="transition hover:text-white"
              href="/mobile-app-development"
            >
              Mobile Apps
            </a>

            <a
              className="transition hover:text-white"
              href="/business-automation"
            >
              Automation
            </a>

            <a
              className="transition hover:text-white"
              href="/projects"
            >
              Projects
            </a>

            <a
              className="transition hover:text-white"
              href="/about"
            >
              About
            </a>

            <a
              className="transition hover:text-white"
              href="/support"
            >
              Support
            </a>

            <a
              href="/contact"
              className="rounded-xl bg-blue-500 px-5 py-2.5 font-semibold text-white"
            >
              Contact
            </a>
          </nav>

          <a
            href="mailto:s4starttech@gmail.com"
            className="rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white lg:hidden"
          >
            Email Us
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Start a conversation
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Tell us what your business
              <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                needs the software to do
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Whether you need a custom CRM, ERP, mobile application,
              customer portal, dealer platform, business automation, or
              reporting system, start by describing the business problem
              you want to solve.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
  href="/book-demo"
  className="rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-400"
>
  Discuss Your Project
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

      {/* ENQUIRY TYPES */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              What can we help with?
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Choose the area closest to your requirement
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              You do not need to prepare a formal technical document before
              contacting us. A clear explanation of the business problem is
              enough to start.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {enquiryTypes.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-3xl border border-white/10 bg-slate-900/60 p-7 transition hover:border-blue-400/30"
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
                  {item.href.startsWith('mailto:')
                    ? 'Discuss Requirement →'
                    : 'Explore Solution →'}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECT CONTACT */}
      <section className="border-b border-white/10 bg-slate-900/45">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Direct contact
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Email us directly
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Send your requirement, questions, or project information
              directly to our business email.
            </p>

            <div className="mt-8 rounded-3xl border border-blue-400/20 bg-blue-500/10 p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">
                Email
              </p>

              <a
                href="mailto:s4starttech@gmail.com"
                className="mt-3 block break-all text-xl font-semibold text-white transition hover:text-blue-300 sm:text-2xl"
              >
                s4starttech@gmail.com
              </a>

              <p className="mt-4 leading-7 text-slate-400">
                For business enquiries, software development discussions,
                existing website enquiries, and general technical support.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">
              Helpful information
            </p>

            <h3 className="mt-4 text-2xl font-semibold">
              What should you include in your email?
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              You can keep it simple. The following information helps us
              understand the requirement faster:
            </p>

            <div className="mt-7 space-y-3">
              {projectDetails.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />

                  <span className="leading-7 text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              What happens next?
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              From requirement to practical software
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                number: '01',
                title: 'Understand',
                description:
                  'We review the problem, current workflow, users, required features, and existing systems.',
              },
              {
                number: '02',
                title: 'Plan',
                description:
                  'The modules, workflow, architecture, priorities, and development scope are defined.',
              },
              {
                number: '03',
                title: 'Build & Improve',
                description:
                  'The software is developed around real usage and can continue evolving as the business grows.',
              },
            ].map((item) => (
              <article
                key={item.number}
                className="rounded-3xl border border-white/10 bg-slate-900/60 p-8"
              >
                <p className="text-sm font-bold text-blue-300">
                  {item.number}
                </p>

                <h3 className="mt-5 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT DISTINCTION */}
      <section className="border-b border-white/10 bg-slate-900/45">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 md:grid-cols-[1fr_auto] md:items-center sm:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">
                Existing application support
              </p>

              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                Already using one of our applications?
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-slate-400">
                For account issues, application support, privacy questions,
                or technical assistance related to an existing product, use
                the dedicated support page.
              </p>
            </div>

            <a
              href="/support"
              className="inline-flex justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              Visit Support
            </a>
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
                  Have a project in mind?
                </p>

                <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl">
                  Start with the business requirement.
                  <span className="block text-blue-300">
                    The technology can follow.
                  </span>
                </h2>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                  Tell us what your team currently does, where the difficulty
                  is, and what you want to improve.
                </p>
              </div>

              <a
                href="/book-demo"
                className="inline-flex justify-center rounded-xl bg-blue-500 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-400"
              >
                Start a Project Discussion
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

            <a href="/support" className="hover:text-white">
              Support
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
  );
}