const processSteps = [
  {
    step: '01',
    title: 'Requirement Discovery',
    description:
      'We study your business processes, teams, user roles, approvals, reporting needs, current tools, and operational problems before development begins.',
    outcome: 'Clear understanding of the real problem',
  },
  {
    step: '02',
    title: 'Solution Planning',
    description:
      'We define the modules, data flow, permissions, integrations, priorities, and system structure around the actual working requirements.',
    outcome: 'Practical implementation roadmap',
  },
  {
    step: '03',
    title: 'Development & Testing',
    description:
      'Features are developed in controlled stages, reviewed carefully, and tested to protect existing workflows, data, permissions, and user experience.',
    outcome: 'Stable features with controlled rollout',
  },
  {
    step: '04',
    title: 'Deployment & Support',
    description:
      'The software is moved into production, monitored, maintained, optimised, and expanded as the organisation continues to evolve.',
    outcome: 'Long-term production continuity',
  },
];

const deliveryPrinciples = [
  {
    title: 'Visible Progress',
    description:
      'Work is divided into clear milestones so important decisions and working features can be reviewed throughout development.',
  },
  {
    title: 'Controlled Changes',
    description:
      'Stable functionality is treated carefully while improvements are introduced in manageable and testable stages.',
  },
  {
    title: 'Production Mindset',
    description:
      'Performance, permissions, user behaviour, real datasets, and operational reliability are considered throughout development.',
  },
  {
    title: 'Continuous Improvement',
    description:
      'The platform can keep evolving after launch through optimisation, new modules, integrations, and workflow improvements.',
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-slate-900/45">
      <div className="absolute -right-60 top-16 h-[520px] w-[520px] rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            Our development process
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            From business requirement to
            <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              reliable production software
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Complex business software works best when development is handled
            in clear stages. We understand the operation first, plan the
            system carefully, develop incrementally, and deploy with
            continuity in mind.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-[28px] hidden h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent lg:block" />

          <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <article
                key={item.step}
                className="group relative rounded-3xl border border-white/10 bg-slate-950/75 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-slate-950 text-sm font-bold text-blue-300 shadow-lg shadow-black/20">
                  {item.step}
                </div>

                <h3 className="mt-7 text-xl font-semibold tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Outcome
                  </p>

                  <p className="mt-2 text-sm font-medium text-slate-300">
                    {item.outcome}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="border-b border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Delivery philosophy
              </p>

              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">
                Progress without unnecessary disruption
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                Working business software often contains years of data,
                active users, existing processes, and important operational
                dependencies. Improvements should strengthen the system
                without destabilising what already works.
              </p>

              <div className="mt-8 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-6">
                <p className="text-sm font-semibold text-blue-300">
                  Development principle
                </p>

                <p className="mt-3 text-xl font-semibold text-white">
                  Understand. Build. Test. Deploy. Improve.
                </p>
              </div>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {deliveryPrinciples.map((item) => (
                <article
                  key={item.title}
                  className="bg-slate-950 p-7 sm:p-8"
                >
                  <div className="h-1 w-10 rounded-full bg-blue-400" />

                  <h4 className="mt-5 text-xl font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-blue-400/20 bg-gradient-to-r from-blue-500/10 via-slate-900/80 to-cyan-500/5 p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-blue-300">
                Have a complex requirement?
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Start with the workflow, not the feature list.
              </h3>

              <p className="mt-4 max-w-4xl leading-7 text-slate-300">
                Explain how your business currently operates, where problems
                occur, what information teams need, and what management wants
                to control. We can structure the technical solution from there.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex justify-center rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Start a Discussion
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}