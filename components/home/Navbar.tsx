export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="/"
          className="group flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 shadow-lg shadow-blue-950/30 transition group-hover:border-blue-400/40 group-hover:bg-blue-500/15">
            <span className="text-lg font-bold text-blue-300">
              S4
            </span>
          </div>

          <div>
            <p className="text-lg font-bold tracking-tight text-white sm:text-xl">
              S4Start Technologies
            </p>

            <p className="text-xs text-slate-400 sm:text-sm">
              Software built for real businesses
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 lg:flex">
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
            className="rounded-xl border border-blue-400/30 bg-blue-500/10 px-4 py-2.5 font-semibold text-blue-100 transition hover:border-blue-400/50 hover:bg-blue-500/20"
          >
            Contact
          </a>

          <a
            href="/contact"
            className="rounded-xl bg-blue-500 px-5 py-2.5 font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-400"
          >
            Book a Demo
          </a>
        </nav>

        <a
          href="/contact"
          className="rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-400 lg:hidden"
        >
          Contact
        </a>
      </div>
    </header>
  );
}