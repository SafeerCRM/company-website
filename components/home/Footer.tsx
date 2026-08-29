const solutionLinks = [
  {
    label: 'Custom CRM',
    href: '/custom-crm-erp-development',
  },
  {
    label: 'ERP Systems',
    href: '/custom-crm-erp-development',
  },
  {
  label: 'Mobile Apps',
  href: '/mobile-app-development',
},
{
  label: 'Customer & Partner Portals',
  href: '/customer-partner-portal-development',
},
  {
    label: 'Business Automation',
    href: '/business-automation',
  },
];

const companyLinks = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
  {
    label: 'Support',
    href: '/support',
  },
];

const legalLinks = [
  {
    label: 'Privacy Policy',
    href: '/privacy-policy',
  },
  {
    label: 'Terms',
    href: '/terms',
  },
  {
    label: 'Account Deletion',
    href: '/account-deletion',
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950">
      <div className="absolute left-1/2 top-0 h-[320px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
          <div className="max-w-md">
            <a
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10">
                <span className="text-lg font-bold text-blue-300">
                  S4
                </span>
              </div>

              <div>
                <p className="text-xl font-bold tracking-tight text-white">
                  S4Start Technologies
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Software built for real businesses
                </p>
              </div>
            </a>

            <p className="mt-6 leading-7 text-slate-400">
              We design and develop CRM, ERP, mobile applications, portals,
              workflow systems, analytics, and business automation platforms
              around real operational requirements.
            </p>

            <a
              href="/contact"
              className="mt-7 inline-flex rounded-xl bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400"
            >
              Discuss Your Project
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Solutions
            </p>

            <div className="mt-5 space-y-3">
              {solutionLinks.map((item) => (
  <a
    key={`${item.label}-${item.href}`}
    href={item.href}
    className="block text-sm text-slate-400 transition hover:text-white"
  >
    {item.label}
  </a>
))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Company
            </p>

            <div className="mt-5 space-y-3">
              {companyLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-slate-400 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Legal
            </p>

            <div className="mt-5 space-y-3">
              {legalLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-slate-400 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} S4Start Technologies. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span>
              CRM
            </span>

            <span>
              ERP
            </span>

            <span>
              Mobile
            </span>

            <span>
              Automation
            </span>

            <span>
              Enterprise Software
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}