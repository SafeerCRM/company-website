const stackGroups = [
  {
    number: '01',
    category: 'Frontend',
    description:
      'Responsive interfaces designed for management teams, office users, customers, dealers, and field operations.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
    ],
    focus: 'Fast, responsive business interfaces',
  },
  {
    number: '02',
    category: 'Backend',
    description:
      'Structured server-side systems designed for APIs, workflows, permissions, integrations, and complex business logic.',
    technologies: [
      'NestJS',
      'Node.js',
      'REST APIs',
      'Role-based permissions',
    ],
    focus: 'Reliable application architecture',
  },
  {
    number: '03',
    category: 'Database',
    description:
      'Relational data architecture designed around reporting, relationships, transaction records, and long-term business growth.',
    technologies: [
      'PostgreSQL',
      'Relational modelling',
      'Query optimisation',
      'Secure data access',
    ],
    focus: 'Structured and scalable business data',
  },
  {
    number: '04',
    category: 'Mobile',
    description:
      'Mobile applications for customers, employees, dealers, contractors, field teams, and other operational users.',
    technologies: [
      'Android',
      'Capacitor',
      'Device integrations',
      'Mobile-first UX',
    ],
    focus: 'Business operations beyond the desktop',
  },
  {
    number: '05',
    category: 'Cloud & Deployment',
    description:
      'Production infrastructure designed for controlled deployments, availability, performance, and maintainable releases.',
    technologies: [
      'Vercel',
      'Render',
      'Cloudflare',
      'Managed databases',
    ],
    focus: 'Production-ready cloud delivery',
  },
  {
    number: '06',
    category: 'Security',
    description:
      'Application safeguards and access controls are designed into the system instead of being treated as an afterthought.',
    technologies: [
      'JWT authentication',
      'RBAC',
      'Protected APIs',
      'Controlled visibility',
    ],
    focus: 'Access based on real responsibilities',
  },
];

const engineeringPrinciples = [
  {
    title: 'Maintainable',
    description:
      'Code and architecture remain manageable as features, modules, and integrations increase.',
  },
  {
    title: 'Expandable',
    description:
      'New departments, workflows, portals, and applications can be introduced without replacing the platform.',
  },
  {
    title: 'Performance Aware',
    description:
      'Applications are designed with real datasets, frequent operations, and production usage in mind.',
  },
  {
    title: 'Secure by Design',
    description:
      'Permissions, protected APIs, controlled sessions, and data visibility are part of the architecture.',
  },
];

export default function TechnologyStack() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-slate-900/45">
      <div className="absolute -right-56 top-20 h-[520px] w-[520px] rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
              Technology & architecture
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Modern engineering built for
              <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                reliability, scale, and change
              </span>
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-lg leading-8 text-slate-300">
              Technology choices are made according to the actual needs of
              the product: performance, security, maintainability, mobile
              access, integration requirements, data volume, and long-term
              expansion.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((stack) => (
            <article
              key={stack.category}
              className="group flex h-full flex-col rounded-3xl border border-white/10 bg-slate-950/75 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-xs font-bold text-blue-300">
                  {stack.number}
                </div>

                <div className="h-px w-14 bg-gradient-to-r from-transparent to-blue-400/40" />
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                {stack.category}
              </p>

              <p className="mt-4 flex-1 leading-7 text-slate-400">
                {stack.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {stack.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-medium text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-sm font-medium text-slate-300">
                  {stack.focus}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="border-b border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Engineering philosophy
              </p>

              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">
                Technology should support the business
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                We do not choose technologies because they are fashionable.
                The architecture should make the software easier to operate,
                maintain, secure, integrate, and expand throughout its
                working life.
              </p>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {engineeringPrinciples.map((item) => (
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

        <div className="mt-10 rounded-3xl border border-blue-400/20 bg-blue-500/10 p-7 sm:p-9">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-blue-300">
                Built for future expansion
              </p>

              <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                A strong foundation makes future development easier.
              </h3>

              <p className="mt-4 max-w-4xl leading-7 text-slate-300">
                Additional modules, mobile applications, departments,
                integrations, analytics, user roles, and automation features
                can be introduced without rebuilding the entire system from
                the beginning.
              </p>
            </div>

            <a
              href="/book-demo"
              className="inline-flex justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 px-6 py-3.5 font-semibold text-blue-100 transition hover:bg-blue-500/20"
            >
              Discuss Your Architecture
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}