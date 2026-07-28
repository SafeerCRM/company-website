export const metadata = {
  title: 'Contact | S4Start Technologies',
  description: 'Contact S4Start Technologies for support and business enquiries.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <a href="/" className="font-bold">
            S4Start Technologies
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

      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
          Contact
        </p>

        <h1 className="mt-3 text-5xl font-bold">
          We'd love to hear from you
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          For application support, business enquiries, software development,
          CRM/ERP solutions, or technical assistance, please contact us using
          the information below.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-8">
            <h2 className="text-xl font-semibold">
              Company
            </h2>

            <p className="mt-4 text-slate-300">
              S4Start Technologies
            </p>

            <p className="mt-2 text-slate-400">
              Software Development • CRM • ERP • Mobile Applications
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-8">
            <h2 className="text-xl font-semibold">
              Email Support
            </h2>

            <p className="mt-4">
              <a
                href="mailto:crmapp1208@gmail.com"
                className="text-blue-300 hover:text-blue-200"
              >
                crmapp1208@gmail.com
              </a>
            </p>

            <p className="mt-4 text-slate-400">
              We aim to respond to enquiries as soon as reasonably possible.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} S4Start Technologies
          </p>

          <div className="flex gap-5">
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