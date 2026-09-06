import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Mobile App Development Company in India',

  description:
    'S4Start Technologies develops Android and business mobile applications for customers, employees, dealers, field teams, contractors, and enterprise workflows.',

  alternates: {
    canonical: '/mobile-app-development',
  },

  keywords: [
    'Mobile App Development Company India',
    'Android App Development India',
    'Business Mobile App Development',
    'Enterprise Mobile Application Development',
    'Customer App Development',
    'Dealer App Development',
    'Employee App Development',
    'Field Staff App Development',
    'Custom Android Application',
    'Business Application Development',
  ],

  openGraph: {
    title:
      'Mobile App Development Company | S4Start Technologies',

    description:
      'Custom Android and enterprise mobile applications for customers, employees, dealers, partners, and field operations.',

    url: 'https://www.s4starttech.com/mobile-app-development',

    images: [
      {
        url: '/showcase/customer-dashboard.png',
        alt: 'Customer mobile platform developed by S4Start Technologies',
      },
    ],
  },
};

const appTypes = [
  {
    title: 'Customer Applications',
    description:
      'Give customers secure access to projects, payments, documents, notifications, complaints, services, and account information.',
  },
  {
    title: 'Employee & Field Apps',
    description:
      'Support attendance, location, tasks, meetings, reporting, field activity, approvals, and operational workflows from mobile devices.',
  },
  {
    title: 'Dealer & Partner Apps',
    description:
      'Connect dealers, distributors, franchises, contractors, and business partners to orders, stock, documents, payments, and operational information.',
  },
  {
    title: 'Management Applications',
    description:
      'Provide decision-makers with mobile access to dashboards, approvals, alerts, reports, and important business information.',
  },
];

const capabilities = [
  'Secure authentication',
  'Role-based access',
  'Real-time business data',
  'Push notifications',
  'Document access',
  'Camera and file upload',
  'GPS and location workflows',
  'Project tracking',
  'Payment information',
  'Complaints and requests',
  'Dealer ordering',
  'Dashboard analytics',
];

const benefits = [
  {
    title: 'Connected to Your CRM / ERP',
    description:
      'Mobile applications can use the same backend, permissions, workflows, customers, projects, and business data as the main platform.',
  },
  {
    title: 'Different App for Different Users',
    description:
      'Customers, staff, dealers, management, and field teams do not need the same interface. Each experience can be designed around its audience.',
  },
  {
    title: 'Business Workflows on Mobile',
    description:
      'Mobile apps can handle more than viewing information. Users can submit records, upload proof, approve actions, track progress, and complete operational work.',
  },
  {
    title: 'Expandable Over Time',
    description:
      'New features, integrations, notifications, reports, and workflows can be introduced as the organisation grows.',
  },
];

const developmentSteps = [
  {
    step: '01',
    title: 'Define the Users',
    description:
      'We identify who will use the app, what information they need, what actions they can perform, and which business workflows must be available.',
  },
  {
    step: '02',
    title: 'Connect the Backend',
    description:
      'APIs, authentication, permissions, database access, notifications, and integrations are planned around the existing or new business platform.',
  },
  {
    step: '03',
    title: 'Build the Mobile Experience',
    description:
      'The interface is designed for smaller screens, field usage, touch interaction, and the specific responsibilities of each user group.',
  },
  {
    step: '04',
    title: 'Test & Deploy',
    description:
      'The application is tested across real workflows and devices before production deployment and future improvements.',
  },
];

const faqs = [
  {
    question: 'Do you develop Android business applications?',
    answer:
      'Yes. We develop Android applications for customers, staff, dealers, field teams, contractors, and other business users.',
  },
  {
    question: 'Can a mobile app connect to an existing CRM or ERP?',
    answer:
      'Yes. A mobile application can connect to an existing platform through secure APIs so users can work with shared customers, projects, inventory, payments, documents, and operational data.',
  },
  {
    question: 'Can customers and dealers have different apps?',
    answer:
      'Yes. Different user groups can have completely different interfaces and workflows while remaining connected to the same backend business platform.',
  },
  {
    question: 'Can mobile applications use GPS and camera features?',
    answer:
      'Yes. Depending on the requirement, applications can use device capabilities such as GPS, camera access, file uploads, photos, and other supported integrations.',
  },
  {
    question: 'Can the app send notifications?',
    answer:
      'Yes. Notifications can be used for project updates, reminders, approvals, customer communication, dealer activity, operational alerts, and other workflows.',
  },
  {
    question: 'Can the application continue evolving after launch?',
    answer:
      'Yes. New features, workflows, integrations, reports, and user experiences can be introduced as requirements change.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id':
        'https://www.s4starttech.com/mobile-app-development/#service',
      name: 'Mobile App Development',
      provider: {
        '@type': 'Organization',
        name: 'S4Start Technologies',
        url: 'https://www.s4starttech.com',
      },
      url:
        'https://www.s4starttech.com/mobile-app-development',
      description:
        'Custom Android and business mobile application development for customers, employees, dealers, field teams, and enterprise workflows.',
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
      serviceType: [
        'Mobile App Development',
        'Android App Development',
        'Enterprise Mobile Applications',
        'Customer Portal Applications',
        'Dealer Applications',
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

export default function MobileAppDevelopmentPage() {
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
                  Business mobile applications
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
          <div className="absolute right-0 top-0 h-[650px] w-[650px] rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-32">
            <div>
              <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                Mobile App Development
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Business applications that put
                <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  your workflows on mobile
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                We build Android and enterprise mobile applications for
                customers, employees, dealers, partners, management teams,
                and field operations.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
  href="/book-demo"
  className="rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-400"
>
  Discuss Your Mobile App
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
                  'Android',
                  'Customers',
                  'Employees',
                  'Dealers',
                  'Field Teams',
                  'Enterprise',
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
                  src="/showcase/customer-project-tracker.png"
                  alt="Customer business mobile application developed by S4Start Technologies"
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
                    src="/showcase/customer-dashboard.png"
                    alt="Customer application dashboard"
                    width={1536}
                    height={794}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white">
                  <Image
                    src="/showcase/dealer-dashboard.png"
                    alt="Dealer application dashboard"
                    width={1536}
                    height={794}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APP TYPES */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Mobile solutions
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Different users need
                <span className="block text-blue-300">
                  different mobile experiences
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                A customer, field employee, dealer, and business owner should
                not be forced into the same interface. Each application can
                be designed around its real purpose.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {appTypes.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-slate-900/60 p-7 transition hover:-translate-y-1 hover:border-blue-400/30"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-sm font-bold text-blue-300">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
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

        {/* CONNECTED PLATFORM */}
        <section className="border-b border-white/10 bg-slate-900/45">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Connected applications
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Your mobile app can be part of your CRM & ERP
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Mobile applications become much more useful when they share
                  data and workflows with the wider business platform.
                </p>

                <p className="mt-4 leading-8 text-slate-400">
                  Customers, employees, dealers, and management can each work
                  through purpose-built interfaces while the backend keeps
                  the important business information connected.
                </p>

                <a
                  href="/custom-crm-erp-development"
                  className="mt-7 inline-flex font-semibold text-blue-300 transition hover:text-blue-200"
                >
                  Explore CRM & ERP Development →
                </a>
              </div>

              <div className="rounded-[2rem] border border-blue-400/20 bg-blue-500/10 p-8 sm:p-10">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: 'CRM / ERP Core',
                      description:
                        'Business data, workflows, permissions and management operations.',
                    },
                    {
                      title: 'Customer App',
                      description:
                        'Projects, payments, documents, service and communication.',
                    },
                    {
                      title: 'Employee App',
                      description:
                        'Attendance, location, field work and operational activity.',
                    },
                    {
                      title: 'Dealer App',
                      description:
                        'Orders, inventory, payments, documents and dealer operations.',
                    },
                  ].map((item) => (
                    <article
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-slate-950/55 p-6"
                    >
                      <div className="h-1 w-10 rounded-full bg-blue-400" />

                      <h3 className="mt-5 text-lg font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/55 p-5 text-center">
                  <p className="font-semibold text-slate-200">
                    Shared APIs • Business Data • Authentication • Permissions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Application capabilities
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                More than a mobile dashboard
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                Business applications can support real operational actions,
                not just display information.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-5"
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

        {/* BENEFITS */}
        <section className="border-b border-white/10 bg-slate-900/45">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Business-first mobile development
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                The application should fit the workflow
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-slate-950/70 p-7"
                >
                  <div className="h-1 w-10 rounded-full bg-blue-400" />

                  <h3 className="mt-6 text-xl font-semibold">
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

        {/* PROCESS */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Development process
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                From business workflow to production application
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
                Mobile development FAQ
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
                    Your mobile application
                  </p>

                  <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl">
                    Build the mobile experience around
                    <span className="block text-blue-300">
                      the people who will actually use it.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
                    Tell us who your users are, what they need to accomplish,
                    and which systems the application needs to connect with.
                  </p>
                </div>

                <a
  href="/book-demo"
  className="inline-flex justify-center rounded-xl bg-blue-500 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-400"
>
  Discuss Your Mobile App
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

              <a href="/projects" className="hover:text-white">
                Projects
              </a>

              <a href="/about" className="hover:text-white">
                About
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