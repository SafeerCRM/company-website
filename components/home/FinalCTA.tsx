export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.14),_transparent_58%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
        <div className="overflow-hidden rounded-[2.25rem] border border-blue-400/20 bg-gradient-to-br from-blue-500/15 via-slate-900/90 to-cyan-500/10 shadow-2xl shadow-black/20">
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Start your project
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to build software around
                <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  the way your business works?
                </span>
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Tell us about your workflows, users, operational challenges,
                reporting requirements, and growth plans. We can help define
                a practical software solution around them.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
                {[
                  'CRM',
                  'ERP',
                  'Mobile Apps',
                  'Portals',
                  'Automation',
                  'Enterprise Software',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
  href="/book-demo"
  className="inline-flex min-w-[210px] justify-center rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white shadow-xl shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-400"
>
  Discuss Your Project
</a>

              <a
                href="/projects"
                className="inline-flex min-w-[210px] justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                View Our Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}