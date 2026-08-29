import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Customer & Partner Portal Development Company',

  description:
    'S4Start Technologies develops secure customer portals, dealer portals, partner platforms, contractor portals, and self-service business applications connected to CRM and ERP systems.',

  alternates: {
    canonical: '/customer-partner-portal-development',
  },

  keywords: [
    'Customer Portal Development',
    'Dealer Portal Development',
    'Partner Portal Development',
    'Self Service Portal Development',
    'Customer Dashboard Development',
    'Dealer Management Portal',
    'Business Portal Development India',
    'Contractor Portal Development',
    'Vendor Portal Development',
    'CRM Customer Portal',
    'ERP Partner Portal',
  ],

  openGraph: {
    title:
      'Customer & Partner Portal Development | S4Start Technologies',

    description:
      'Secure customer, dealer, partner, contractor, and self-service portals connected to your business software.',

    url:
      'https://www.s4starttech.com/customer-partner-portal-development',

    images: [
      {
        url: '/showcase/customer-dashboard.png',
        alt: 'Customer portal developed by S4Start Technologies',
      },
    ],
  },
};

const portalTypes = [
  {
    number: '01',
    title: 'Customer Portals',
    description:
      'Give customers secure access to relevant projects, payments, documents, complaints, service requests, updates, and account information.',
    capabilities: [
      'Project tracking',
      'Payment visibility',
      'Document access',
      'Complaints & support',
    ],
  },
  {
    number: '02',
    title: 'Dealer Portals',
    description:
      'Connect dealers with stock, orders, documents, payments, account information, and operational updates through a dedicated business interface.',
    capabilities: [
      'Stock visibility',
      'Order workflows',
      'Payment information',
      'Dealer documents',
    ],
  },
  {
    number: '03',
    title: 'Partner Portals',
    description:
      'Provide contractors, franchises, vendors, agents, or business partners with access only to the workflows and information relevant to them.',
    capabilities: [
      'Role-based access',
      'Task visibility',
      'Document sharing',
      'Partner workflows',
    ],
  },
  {
    number: '04',
    title: 'Internal Self-Service',
    description:
      'Give employees and operational teams controlled access to requests, approvals, documents, activity, and internal business information.',
    capabilities: [
      'Employee requests',
      'Approvals',
      'Operational records',
      'Secure dashboards',
    ],
  },
];

const commonFeatures = [
  'Secure login',
  'Role-based permissions',
  'Dashboard summaries',
  'Project visibility',
  'Order visibility',
  'Document access',
  'Payment information',
  'Complaint tracking',
  'Notifications',
  'Search & filters',
  'File uploads',
  'Mobile-friendly interface',
];

const benefits = [
  {
    title: 'Reduce Repeated Enquiries',
    description:
      'Customers and partners can access relevant information directly instead of repeatedly contacting staff for routine status updates.',
  },
  {
    title: 'Controlled Information Access',
    description:
      'Each user only sees the projects, orders, documents, payments, or workflows allowed by their account and business role.',
  },
  {
    title: 'Connected Business Data',
    description:
      'Portal information can come directly from the CRM, ERP, project system, inventory, payment, or operational platform.',
  },
  {
    title: 'Better Service Experience',
    description:
      'A dedicated portal gives users a structured place for updates, documents, requests, complaints, and ongoing business interaction.',
  },
];

const connectedSystems = [
  {
    title: 'CRM & ERP',
    description:
      'Customer, project, inventory, payment, document, and operational data can come from the central business platform.',
    href: '/custom-crm-erp-development',
  },
  {
    title: 'Mobile Applications',
    description:
      'The same business workflows can also be made available through dedicated Android applications where appropriate.',
    href: '/mobile-app-development',
  },
  {
    title: 'Business Automation',
    description:
      'Portal actions can trigger notifications, approvals, reminders, status changes, and connected operational workflows.',
    href: '/business-automation',
  },
];

const process = [
  {
    step: '01',
    title: 'Define the Portal Users',
    description:
      'We identify whether the users are customers, dealers, vendors, contractors, employees, franchises, or another partner group.',
  },
  {
    step: '02',
    title: 'Define What They Can See',
    description:
      'Projects, documents, payments, stock, orders, requests, complaints, and other information are mapped to the correct permissions.',
  },
  {
    step: '03',
    title: 'Connect Business Workflows',
    description:
      'The portal is connected to the CRM, ERP, backend APIs, or other suitable systems that provide the required business data.',
  },
  {
    step: '04',
    title: 'Build the Self-Service Experience',
    description:
      'The interface is designed around the exact actions and information each external or internal user group needs.',
  },
];

const faqs = [
  {
    question: 'What is a customer portal?',
    answer:
      'A customer portal is a secure digital interface where customers can access information and actions relevant to their account, such as projects, payments, documents, service requests, complaints, or updates.',
  },
  {
    question: 'Can a portal connect to our existing CRM or ERP?',
    answer:
      'Yes. Where suitable APIs and access are available, the portal can use shared business data from CRM, ERP, project, payment, inventory, document, or other internal systems.',
  },
  {
    question: 'Can dealers and customers have different portals?',
    answer:
      'Yes. Different user groups can have completely different dashboards, permissions, information, and workflows while remaining connected to the same backend business platform.',
  },
  {
    question: 'Can users upload documents through the portal?',
    answer:
      'Yes. Portals can support document and image uploads where the workflow requires users to submit proof, forms, files, or other business records.',
  },
  {
    question: 'Can the portal show live project or order status?',
    answer:
      'Yes. If the backend system maintains current project or order information, the portal can display the relevant status and other permitted details.',
  },
  {
    question: 'Can the portal also work well on mobile devices?',
    answer:
      'Yes. Portals can be designed responsively so they remain practical on desktops, tablets, and mobile browsers.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id':
        'https://www.s4starttech.com/customer-partner-portal-development/#service',
      name: 'Customer and Partner Portal Development',
      provider: {
        '@type': 'Organization',
        name: 'S4Start Technologies',
        url: 'https://www.s4starttech.com',
      },
      url:
        'https://www.s4starttech.com/customer-partner-portal-development',
      description:
        'Custom customer portals, dealer portals, partner portals, contractor portals, and secure self-service business platforms.',
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
      serviceType: [
        'Customer Portal Development',
        'Dealer Portal Development',
        'Partner Portal Development',
        'Self-Service Portal Development',
        'Business Portal Development',
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

export default function CustomerPartnerPortalDevelopmentPage() {
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
                  Customer & partner platforms
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
                href="/contact"
                className="rounded-xl bg-blue-500 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-400"
              >
                Discuss Your Portal
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
                Customer & Partner Portal Development
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Give customers and partners
                <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  secure self-service access
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                We build customer, dealer, partner, contractor, and
                self-service portals connected to the information and
                workflows already running inside your business.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-400"
                >
                  Discuss Your Portal
                </a>

                <a
                  href="/projects"
                  className="rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/10"
                >
                  View Our Platforms
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-2">
                {[
                  'Customers',
                  'Dealers',
                  'Partners',
                  'Contractors',
                  'Vendors',
                  'Employees',
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

            <div className="grid gap-5">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl shadow-black/30">
                <Image
                  src="/showcase/customer-dashboard.png"
                  alt="Customer portal dashboard developed by S4Start Technologies"
                  width={1536}
                  height={794}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  priority
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white">
                  <Image
                    src="/showcase/customer-project-tracker.png"
                    alt="Customer project tracking portal"
                    width={1536}
                    height={794}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white">
                  <Image
                    src="/showcase/dealer-dashboard.png"
                    alt="Dealer business portal dashboard"
                    width={1536}
                    height={794}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PORTAL TYPES */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Portal solutions
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                One backend can serve
                <span className="block text-blue-300">
                  many different user experiences
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Each group can receive a purpose-built portal instead of
                exposing the complexity of the internal business system.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {portalTypes.map((portal) => (
                <article
                  key={portal.number}
                  className="rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 transition hover:border-blue-400/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-sm font-bold text-blue-300">
                    {portal.number}
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold">
                    {portal.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {portal.description}
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {portal.capabilities.map((item) => (
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

        {/* FEATURES */}
        <section className="border-b border-white/10 bg-slate-900/45">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Common portal capabilities
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Give users access without giving them access to everything
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                Portal permissions can be designed around each user group,
                account, project, dealer, organisation, or business role.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {commonFeatures.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 p-5"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-blue-400" />

                  <p className="font-medium text-slate-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONNECTIONS */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Connected ecosystem
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  The portal does not need to become another data silo
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Customer and partner platforms can use the same business
                  information already maintained by your central software.
                </p>

                <p className="mt-4 leading-8 text-slate-400">
                  That means a project update recorded internally can become
                  visible to the right customer, while dealer orders,
                  payments, documents, requests, and other workflows remain
                  connected to operations.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
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
                Better access for users.
                <span className="block text-blue-300">
                  Less routine coordination for staff.
                </span>
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
                Development process
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Start from the user&apos;s real responsibilities
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
                Portal development FAQ
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
                    Build your portal
                  </p>

                  <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl">
                    Decide what your customers or partners should be able to do.
                    <span className="block text-blue-300">
                      We can design the platform around that workflow.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
                    Tell us who will use the portal, which information they
                    need, and what existing systems it should connect with.
                  </p>
                </div>

                <a
                  href="/contact"
                  className="inline-flex justify-center rounded-xl bg-blue-500 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-400"
                >
                  Discuss Your Portal
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