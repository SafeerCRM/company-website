import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support | S4Start Technologies',
  description:
    'Get product support, report technical issues, request features, or contact S4Start Technologies for assistance.',
};

const supportOptions = [
  {
    title: 'Technical Support',
    description:
      'Get assistance with application errors, performance issues, unexpected behaviour, or other technical problems.',
    subject: 'Technical Support Request',
  },
  {
    title: 'Account and Login Assistance',
    description:
      'Contact us if you are unable to sign in, access your account, reset credentials, or use an assigned feature.',
    subject: 'Account and Login Assistance',
  },
  {
    title: 'Report a Bug',
    description:
      'Tell us about an application issue and include the affected page, device, screenshot, and steps that caused it.',
    subject: 'Bug Report',
  },
  {
    title: 'Feature Request',
    description:
      'Share a feature, workflow improvement, integration, report, or automation that would improve your operations.',
    subject: 'Feature Request',
  },
  {
    title: 'Privacy and Data Requests',
    description:
      'Contact us regarding personal information, account data, data correction, deletion, or privacy-related questions.',
    subject: 'Privacy and Data Request',
  },
  {
    title: 'Business and Project Enquiries',
    description:
      'Discuss custom CRM, ERP, mobile application, portal, automation, integration, or software maintenance requirements.',
    subject: 'Business and Project Enquiry',
  },
];

const issueChecklist = [
  'Your name and organisation',
  'Application or service name',
  'Affected page or feature',
  'A clear description of the issue',
  'Steps that caused the issue',
  'Device, browser, or operating system',
  'Screenshots or error messages, when available',
];

export default function SupportPage() {
  const supportEmail = 'crmapp1208@gmail.com';

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

  <a className="transition hover:text-white" href="/projects">
    Projects
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

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <p className="inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
            Product and technical assistance
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            How can we help?
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Contact S4Start Technologies for technical support, account
            assistance, bug reports, feature requests, privacy enquiries, or
            information about a software project.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${supportEmail}?subject=${encodeURIComponent(
                'Support Request',
              )}`}
              className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
            >
              Email support
            </a>

            <a
              href="/contact"
              className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
            >
              Contact details
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              Support categories
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Select the assistance you need
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              Choose the most relevant category so your request can be
              understood and handled efficiently.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {supportOptions.map((option) => (
              <article
                key={option.title}
                className="flex flex-col rounded-2xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-blue-400/30 hover:bg-slate-900"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-lg font-bold text-blue-300">
                  {option.title.charAt(0)}
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  {option.title}
                </h3>

                <p className="mt-3 flex-1 leading-7 text-slate-400">
                  {option.description}
                </p>

                <a
                  href={`mailto:${supportEmail}?subject=${encodeURIComponent(
                    option.subject,
                  )}`}
                  className="mt-6 inline-flex font-semibold text-blue-300 transition hover:text-blue-200"
                >
                  Contact support →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              Reporting an issue
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Help us understand the problem
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-slate-300">
              Providing complete information reduces unnecessary follow-up and
              helps us investigate the issue more effectively.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950 p-7 sm:p-8">
            <p className="font-semibold text-white">
              Include these details in your support request:
            </p>

            <div className="mt-6 space-y-4">
              {issueChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-400" />
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-blue-400/20 bg-blue-500/10 p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
                Support email
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                Contact our support team
              </h2>

              <p className="mt-4 leading-8 text-slate-300">
                Send your request to the email address below. Please use a
                clear subject line and include the relevant application or
                service name.
              </p>

              <a
                href={`mailto:${supportEmail}?subject=${encodeURIComponent(
                  'Support Request',
                )}`}
                className="mt-6 inline-flex text-lg font-semibold text-blue-300 transition hover:text-blue-200"
              >
                {supportEmail}
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
                Response expectations
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                Requests are reviewed carefully
              </h2>

              <p className="mt-4 leading-8 text-slate-300">
                We aim to acknowledge genuine support and business enquiries
                as soon as reasonably possible. Resolution time can vary based
                on the issue, required investigation, system access, and the
                complexity of the requested change.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                Please avoid sharing passwords, verification codes, payment
                credentials, or other highly sensitive information by email.
              </p>
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