import Image from 'next/image';

const crmCapabilities = [
  'Sales and lead management',
  'Project lifecycle management',
  'Staff attendance and payroll',
  'Live staff location tracking',
  'Inventory and procurement',
  'Payments and invoicing',
  'Inspection management',
  'Analytics and reporting',
];

const crmSupportingScreens = [
  {
    src: '/showcase/crm-live-location.png',
    title: 'Live Staff Operations',
    description:
      'Location tracking and field workforce visibility.',
  },
  {
    src: '/showcase/crm-hr-portal.png',
    title: 'HR & Payroll',
    description:
      'Attendance, payroll, leave, policies and performance.',
  },
  {
    src: '/showcase/crm-stock-management.png',
    title: 'Inventory & Stock',
    description:
      'Central inventory, reservations and material movement.',
  },
];

export default function FeaturedProject() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute left-1/2 top-40 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            Featured enterprise ecosystem
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            One business.
            <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Three connected platforms.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A production business ecosystem connecting internal operations,
            customers and dealer networks through purpose-built web and mobile
            platforms backed by shared business workflows.
          </p>
        </div>

        {/* CRM / ERP */}
        <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60">
          <div className="grid gap-0 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Platform 01
              </p>

              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">
                CRM & ERP Core
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                The central operational platform connects departments,
                employees, projects, customers, finance, inventory and
                management reporting within one role-based system.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {crmCapabilities.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  25+ user roles
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  Role-based access
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  Real-time operations
                </span>
              </div>
            </div>

            <div className="flex items-center border-t border-white/10 bg-slate-950/70 p-4 sm:p-6 lg:border-l lg:border-t-0">
  <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl shadow-black/30">
    <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-4 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
      <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
      <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />

      <span className="ml-3 text-xs font-medium text-slate-500">
        CRM / ERP Management Platform
      </span>
    </div>

    <div className="relative aspect-[16/9] overflow-hidden bg-white">
      <Image
        src="/showcase/crm-dashboard.png"
        alt="CRM and ERP management dashboard developed by S4Start Technologies"
        fill
        className="object-cover object-top"
        sizes="(max-width: 1024px) 100vw, 65vw"
        priority
      />
    </div>
  </div>
</div>
          </div>

          {/* Supporting CRM screens */}
          <div className="grid gap-4 border-t border-white/10 p-4 sm:p-6 md:grid-cols-3">
            {crmSupportingScreens.map((screen) => (
              <article
                key={screen.src}
                className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-white">
                  <Image
                    src={screen.src}
                    alt={`${screen.title} business software interface`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-5">
                  <h4 className="font-semibold text-white">
                    {screen.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {screen.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Customer platform */}
        <div className="mt-10 grid overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Platform 02
            </p>

            <h3 className="mt-4 text-3xl font-bold tracking-tight">
              Customer Platform
            </h3>

            <p className="mt-5 leading-8 text-slate-300">
              A dedicated customer experience gives users direct visibility
              into their projects, progress, payments, documents, service
              requests, complaints and after-sales support.
            </p>

            <div className="mt-7 space-y-3">
              {[
                'Live project journey and progress',
                'Payments and document access',
                'Customer updates and notifications',
                'Complaints and support requests',
                'After-sales services',
                'Cleaning and maintenance workflows',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-300"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 border-t border-white/10 bg-slate-950/70 p-4 sm:p-6 lg:border-l lg:border-t-0">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-xl shadow-black/20">
              <Image
                src="/showcase/customer-project-tracker.png"
                alt="Customer project tracking platform developed by S4Start Technologies"
                width={1536}
                height={794}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white">
              <Image
                src="/showcase/customer-dashboard.png"
                alt="Customer portal dashboard developed by S4Start Technologies"
                width={1536}
                height={794}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>
        </div>

        {/* Dealer platform */}
        <div className="mt-10 grid overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="order-2 flex items-center border-t border-white/10 bg-slate-950/70 p-4 sm:p-6 lg:order-1 lg:border-r lg:border-t-0">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-xl shadow-black/20">
              <Image
                src="/showcase/dealer-dashboard.png"
                alt="Dealer management platform developed by S4Start Technologies"
                width={1536}
                height={794}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>

          <div className="order-1 flex flex-col justify-center p-8 sm:p-10 lg:order-2 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Platform 03
            </p>

            <h3 className="mt-4 text-3xl font-bold tracking-tight">
              Dealer Platform
            </h3>

            <p className="mt-5 leading-8 text-slate-300">
              Dealers operate through their own dedicated environment while
              remaining connected to central inventory, orders, payments,
              documents and business operations.
            </p>

            <div className="mt-7 space-y-3">
              {[
                'Live stock visibility',
                'Material and kit ordering',
                'Order lifecycle tracking',
                'Payment records',
                'Dealer documents',
                'Business analytics',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-300"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Architecture connection */}
        <div className="mt-10 rounded-[2rem] border border-blue-400/20 bg-blue-500/10 p-8 sm:p-10 lg:p-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Connected architecture
            </p>

            <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Different experiences. One connected business ecosystem.
            </h3>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-300">
              Each platform is designed for a different user group while
              remaining connected through shared business data, APIs,
              permissions and operational workflows.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
            {[
              {
                number: '01',
                title: 'CRM & ERP',
                subtitle: 'Management & Operations',
              },
              {
                number: '02',
                title: 'Customer Platform',
                subtitle: 'Customer Experience',
              },
              {
                number: '03',
                title: 'Dealer Platform',
                subtitle: 'Dealer Network',
              },
            ].map((platform) => (
              <div
                key={platform.number}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 text-center"
              >
                <p className="text-sm font-bold text-blue-300">
                  {platform.number}
                </p>

                <p className="mt-3 font-semibold text-white">
                  {platform.title}
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  {platform.subtitle}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-4 max-w-4xl rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-center">
            <p className="font-semibold text-slate-200">
              Shared Backend • Business Data • APIs • Access Control •
              Workflows
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Need a connected platform for your organisation?
          </h3>

          <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-400">
            We can design individual applications or a complete ecosystem
            connecting employees, customers, partners and business operations.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4">
  <a
    href="/custom-crm-erp-development"
    className="inline-flex rounded-xl bg-blue-500 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-400"
  >
    Explore CRM & ERP Development
  </a>

  <a
    href="/contact"
    className="inline-flex rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/10"
  >
    Discuss Your Project
  </a>
</div>
        </div>
      </div>
    </section>
  );
}