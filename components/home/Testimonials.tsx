const testimonials = [
  {
    quote:
      'S4Start Technologies understood our operational requirements and translated them into a practical system that connected multiple departments and workflows.',
    name: 'Enterprise Client',
    role: 'Business Operations',
  },
  {
    quote:
      'The biggest value was not just development. The system continued evolving as new requirements, users, reports, and workflows were introduced.',
    name: 'CRM Client',
    role: 'Management Team',
  },
  {
    quote:
      'The platform reduced dependency on disconnected spreadsheets and manual tracking by bringing important business processes into one place.',
    name: 'ERP Client',
    role: 'Operations Team',
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute -left-64 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            Client perspective
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Software should create
            <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              practical business value
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            The strongest results come when software fits the organisation,
            reduces operational friction, and can continue evolving after
            launch.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={`${item.name}-${item.role}`}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/60 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
            >
              <div className="text-5xl font-bold leading-none text-blue-400/40">
                “
              </div>

              <p className="mt-4 flex-1 text-lg leading-8 text-slate-300">
                {item.quote}
              </p>

              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-semibold text-white">
                  {item.name}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {item.role}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-slate-500">
          Client names can be added here once approval is available for
          public use.
        </p>
      </div>
    </section>
  );
}