const reasons = [
  {
    number: '01',
    title: 'Business Before Features',
    description:
      'We first understand the workflow, users, responsibilities, approvals, bottlenecks, and reporting needs before deciding what should be built.',
  },
  {
    number: '02',
    title: 'Software That Can Grow',
    description:
      'Architecture is planned so new departments, users, workflows, integrations, and mobile applications can be introduced as the organisation expands.',
  },
  {
    number: '03',
    title: 'Controlled Access',
    description:
      'Role-based permissions help ensure that teams work with the information and actions relevant to their responsibilities.',
  },
  {
    number: '04',
    title: 'Long-Term Development',
    description:
      'Business software continues changing after launch, so we focus on maintainability, optimisation, support, and controlled feature expansion.',
  },
];

const approachItems = [
  'Understand the operation',
  'Design around real users',
  'Develop in manageable stages',
  'Protect stable workflows',
  'Measure production behaviour',
  'Keep improving the platform',
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute -left-56 top-32 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            Why S4Start Technologies
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Software engineered around
            <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              the business behind it
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A successful business platform is not just a collection of
            features. It should reflect how teams work, how decisions move,
            how information is controlled, and how the organisation expects
            to grow.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <article
              key={reason.number}
              className="group rounded-3xl border border-white/10 bg-slate-900/55 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-slate-900/85"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-xs font-bold text-blue-300">
                {reason.number}
              </div>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
                {reason.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {reason.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Our working approach
              </p>

              <h3 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Good software starts with understanding the operation.
              </h3>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Before building a workflow, we look at who uses it, what
                information they need, what actions they are allowed to
                perform, what happens next, and how management needs to
                monitor the result.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {approachItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    </div>

                    <p className="text-sm font-medium text-slate-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 bg-slate-950/60 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Long-term value
              </p>

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Building software that continues to evolve
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                Requirements change. Teams grow. New departments appear.
                Reports become more detailed. Mobile access becomes important.
                Integrations are added.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                The goal is to build a platform that can absorb those changes
                without becoming fragile or forcing the organisation to start
                again from zero.
              </p>

              <div className="mt-8 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-6">
                <p className="text-sm font-semibold text-blue-300">
                  Our principle
                </p>

                <p className="mt-3 text-xl font-semibold text-white">
                  Build for today. Architect for what comes next.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-blue-400/20 bg-gradient-to-r from-blue-500/10 via-slate-900/80 to-cyan-500/5 p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Need software designed around your own process?
              </h3>

              <p className="mt-4 max-w-4xl leading-7 text-slate-300">
                We can study your departments, user roles, approvals,
                reporting requirements, customer journeys, and operational
                challenges before defining the system that fits them.
              </p>
            </div>

            <a
              href="/book-demo"
              className="inline-flex justify-center rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Talk About Your Workflow
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}