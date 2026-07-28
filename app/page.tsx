const features = [
  {
    title: 'Business Management Software',
    description:
      'Custom CRM and ERP platforms designed around real business workflows, teams, customers, projects, and operations.',
  },
  {
    title: 'Mobile Applications',
    description:
      'Android applications for customers, employees, dealers, contractors, franchises, and field teams.',
  },
  {
    title: 'Automation and Integrations',
    description:
      'Connected systems that reduce manual work, improve visibility, and keep business data organised.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div>
            <p className="text-xl font-bold tracking-tight">
              S4Start Technologies
            </p>
            <p className="text-sm text-slate-400">
              Software built for real businesses
            </p>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#services">
              Services
            </a>
            <a className="transition hover:text-white" href="/about">
              About
            </a>
            <a
              className="transition hover:text-white"
              href="/privacy-policy"
            >
              Privacy
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

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.22),_transparent_42%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
              CRM, ERP and mobile application development
            </p>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Practical software that helps businesses operate better
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We design and maintain business software, customer portals,
              operational dashboards, workflow systems, and mobile applications
              tailored to the needs of growing organisations.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
              >
                Contact us
              </a>

              <a
                href="#services"
                className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
              >
                View services
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-blue-950/30 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              What we build
            </p>

            <div className="mt-6 space-y-5">
              {[
                'Custom CRM and ERP systems',
                'Customer and dealer portals',
                'Staff and field-force applications',
                'Project and workflow management',
                'Reporting and business analytics',
                'Secure cloud-based business platforms',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4"
                >
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-400" />
                  <p className="text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="border-y border-white/10 bg-slate-900/60"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              Services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Technology aligned with your workflow
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              Our systems are designed around the actual processes, roles, and
              reporting needs of each organisation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
        Enterprise solutions
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Connected software for complete business operations
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-300">
        We build integrated platforms that bring customers, employees,
        projects, finance, inventory, reporting, and day-to-day operations
        into one organised digital system.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: 'Custom CRM Platforms',
          description:
            'Manage contacts, enquiries, leads, follow-ups, meetings, sales teams, customer communication, and conversion workflows in one central platform.',
          capabilities: [
            'Lead and enquiry management',
            'Follow-up and meeting workflows',
            'Role-based team access',
            'Performance analytics',
          ],
        },
        {
          title: 'ERP and Operations Systems',
          description:
            'Connect departments, approvals, projects, procurement, payments, documents, staff activities, and operational reporting.',
          capabilities: [
            'Project lifecycle management',
            'Department workflows',
            'Approval systems',
            'Operational dashboards',
          ],
        },
        {
          title: 'Mobile Applications',
          description:
            'Android applications designed for customers, employees, field staff, dealers, contractors, partners, and management teams.',
          capabilities: [
            'Customer applications',
            'Staff and field-force apps',
            'Dealer and partner portals',
            'Secure mobile access',
          ],
        },
        {
          title: 'Customer and Partner Portals',
          description:
            'Give customers, dealers, vendors, franchises, or contractors secure access to the information and services relevant to them.',
          capabilities: [
            'Self-service dashboards',
            'Document access',
            'Complaint and request tracking',
            'Payment and project updates',
          ],
        },
        {
          title: 'Analytics and Reporting',
          description:
            'Turn operational data into useful dashboards, management reports, performance metrics, and downloadable business records.',
          capabilities: [
            'Role-specific dashboards',
            'Business performance reports',
            'Search and advanced filters',
            'CSV and spreadsheet exports',
          ],
        },
        {
          title: 'Automation and Integrations',
          description:
            'Reduce repetitive work by connecting systems, automating actions, synchronising data, and improving communication between departments.',
          capabilities: [
            'Workflow automation',
            'API integrations',
            'Notifications and alerts',
            'Data synchronisation',
          ],
        },
      ].map((solution) => (
        <article
          key={solution.title}
          className="flex flex-col rounded-3xl border border-white/10 bg-slate-900/60 p-7 transition hover:border-blue-400/30 hover:bg-slate-900"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-lg font-bold text-blue-300">
            {solution.title.charAt(0)}
          </div>

          <h3 className="mt-6 text-2xl font-semibold tracking-tight">
            {solution.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-400">
            {solution.description}
          </p>

          <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
            {solution.capabilities.map((capability) => (
              <div
                key={capability}
                className="flex items-start gap-3"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />

                <p className="text-sm leading-6 text-slate-300">
                  {capability}
                </p>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>

    <div className="mt-12 rounded-3xl border border-blue-400/20 bg-blue-500/10 p-8 sm:p-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
            One platform can connect your entire organisation
          </h3>

          <p className="mt-4 max-w-4xl leading-8 text-slate-300">
            Individual modules can be developed independently or combined into
            a complete business management platform with shared data, unified
            access control, central reporting, and connected workflows.
          </p>
        </div>

        <a
          href="/contact"
          className="inline-flex justify-center rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
        >
          Discuss your requirements
        </a>
      </div>
    </div>
  </div>
</section>

<section className="border-b border-white/10 bg-slate-900/60">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
        Technology stack
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Modern technologies selected for reliability and growth
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-300">
        We use proven technologies to build secure, maintainable, responsive,
        and scalable software for web, mobile, cloud, and business operations.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          category: 'Frontend',
          description:
            'Responsive interfaces designed for business users, management teams, customers, and field operations.',
          technologies: [
            'Next.js',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Modern responsive interfaces',
          ],
        },
        {
          category: 'Backend',
          description:
            'Structured server-side systems designed for APIs, workflows, permissions, integrations, and business logic.',
          technologies: [
            'NestJS',
            'Node.js',
            'REST APIs',
            'Authentication systems',
            'Role-based permissions',
          ],
        },
        {
          category: 'Database',
          description:
            'Reliable data storage designed around reporting, relationships, business records, and long-term growth.',
          technologies: [
            'PostgreSQL',
            'Relational data modelling',
            'Database optimisation',
            'Secure data access',
            'Backup-ready architecture',
          ],
        },
        {
          category: 'Mobile',
          description:
            'Mobile applications for customers, staff, dealers, contractors, field teams, and business partners.',
          technologies: [
            'Android applications',
            'Capacitor',
            'Mobile-first interfaces',
            'Device integrations',
            'App deployment support',
          ],
        },
        {
          category: 'Cloud and Deployment',
          description:
            'Cloud-based deployment environments designed for availability, performance, and controlled releases.',
          technologies: [
            'Vercel',
            'Render',
            'Cloudflare',
            'Managed databases',
            'Production deployment workflows',
          ],
        },
        {
          category: 'Security',
          description:
            'Access controls and application safeguards built into the architecture from the beginning.',
          technologies: [
            'JWT authentication',
            'Role-based access control',
            'Protected APIs',
            'Secure user sessions',
            'Controlled data visibility',
          ],
        },
      ].map((stack) => (
        <article
          key={stack.category}
          className="rounded-3xl border border-white/10 bg-slate-950 p-7"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
            {stack.category}
          </p>

          <p className="mt-4 leading-7 text-slate-400">
            {stack.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {stack.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>

    <div className="mt-12 grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl border border-white/10 bg-slate-950 p-8">
        <h3 className="text-2xl font-semibold">
          Technology should support the business
        </h3>

        <p className="mt-4 leading-8 text-slate-300">
          Technology choices are made according to reliability, maintainability,
          performance, integration needs, project scale, and the long-term
          requirements of the organisation.
        </p>
      </div>

      <div className="rounded-3xl border border-blue-400/20 bg-blue-500/10 p-8">
        <h3 className="text-2xl font-semibold">
          Built for future expansion
        </h3>

        <p className="mt-4 leading-8 text-slate-300">
          New modules, departments, mobile applications, integrations,
          reporting capabilities, and automation features can be introduced
          without rebuilding the entire platform.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="border-b border-white/10">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
        Featured enterprise project
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        A complete CRM and ERP platform built for real operations
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-300">
        We have designed and developed a production-grade business platform
        connecting sales, customers, projects, staff, finance, inventory,
        procurement, field operations, reporting, and mobile applications.
      </p>
    </div>

    <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="p-8 sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Enterprise CRM and ERP
          </p>

          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            One connected platform for multiple departments
          </h3>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            The platform supports complex role-based workflows across sales,
            projects, procurement, stock, staff management, customer service,
            finance, mobile access, and operational reporting.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              '25+ user roles and permissions',
              'Lead, meeting, and follow-up management',
              'Project lifecycle workflows',
              'Customer and dealer portals',
              'Android applications',
              'Staff attendance and HR features',
              'Live staff location tracking',
              'Inventory and stock management',
              'Procurement and purchase workflows',
              'Payment collection and invoicing',
              'Customer complaint management',
              'Analytics, reports, and exports',
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/70 p-4"
              >
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-400" />

                <p className="text-sm leading-6 text-slate-300">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 bg-slate-950 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Platform capabilities
          </p>

          <div className="mt-8 space-y-6">
            {[
              {
                title: 'Centralised Operations',
                description:
                  'Departments work within one connected system instead of relying on disconnected spreadsheets, messages, and manual records.',
              },
              {
                title: 'Role-Based Workflows',
                description:
                  'Each team sees the pages, actions, records, and reports relevant to its responsibilities.',
              },
              {
                title: 'Web and Mobile Access',
                description:
                  'Management, staff, customers, dealers, and field teams can access the platform through dedicated web and Android experiences.',
              },
              {
                title: 'Expandable Architecture',
                description:
                  'New departments, workflows, integrations, reports, and applications can be introduced as business requirements grow.',
              },
            ].map((item) => (
              <article
                key={item.title}
                className="border-b border-white/10 pb-6 last:border-b-0 last:pb-0"
              >
                <h4 className="text-xl font-semibold">
                  {item.title}
                </h4>

                <p className="mt-3 leading-7 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="mt-8 grid gap-6 md:grid-cols-3">
      {[
        {
          value: '25+',
          label: 'Role-based user types',
        },
        {
          value: 'Web + Android',
          label: 'Connected platform access',
        },
        {
          value: 'End-to-end',
          label: 'Business workflow coverage',
        },
      ].map((stat) => (
        <div
          key={stat.label}
          className="rounded-3xl border border-blue-400/20 bg-blue-500/10 p-8"
        >
          <p className="text-3xl font-bold tracking-tight text-white">
            {stat.value}
          </p>

          <p className="mt-3 text-slate-300">
            {stat.label}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-12 rounded-3xl border border-white/10 bg-slate-900/60 p-8 sm:p-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Need a platform designed around your organisation?
          </h3>

          <p className="mt-4 max-w-4xl leading-8 text-slate-300">
            We can study your departments, processes, approval structures,
            reporting requirements, and operational challenges to design a
            connected system suited to your business.
          </p>
        </div>

        <a
          href="/contact"
          className="inline-flex justify-center rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
        >
          Start a discussion
        </a>
      </div>
    </div>
  </div>
</section>

      <section>
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
        Why S4Start Technologies
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Software engineered around your business
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-300">
        Every organisation operates differently. Rather than adapting your
        business to generic software, we design systems that fit your
        existing workflows, departments, approval structures, reporting,
        and operational processes.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {[
        {
          title: "Business First",
          desc: "Every module is designed around actual operational workflows instead of unnecessary complexity.",
        },

        {
          title: "Scalable Architecture",
          desc: "Solutions are built so additional departments, users, and features can be added as your business grows.",
        },

        {
          title: "Secure Access Control",
          desc: "Role-based permissions help ensure users only access information relevant to their responsibilities.",
        },

        {
          title: "Long-Term Partnership",
          desc: "We continue improving software with maintenance, optimisation, new features, and ongoing technical support.",
        },
      ].map((item) => (

        <div
          key={item.title}
          className="rounded-2xl border border-white/10 bg-slate-900 p-7"
        >
          <h3 className="text-xl font-semibold">
            {item.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-400">
            {item.desc}
          </p>

        </div>

      ))}

    </div>

    <div className="mt-16 rounded-3xl border border-blue-400/20 bg-blue-500/10 p-10">

      <h2 className="text-3xl font-bold">
        Building software that continues to evolve
      </h2>

      <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
        We believe business software should grow alongside the organisation
        using it. From CRM and ERP platforms to customer portals, mobile
        applications, dashboards, and business automation, our focus is on
        delivering reliable systems that remain valuable for years rather
        than months.
      </p>

    </div>

  </div>
</section>

<section className="border-t border-white/10 bg-slate-900/60">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
        Our development process
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        A practical path from requirement to reliable software
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-300">
        We work in clear stages so business requirements are understood,
        implemented carefully, tested properly, and deployed with minimal
        disruption to existing operations.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {[
        {
          step: '01',
          title: 'Requirement Discovery',
          description:
            'We study business processes, departments, user roles, approvals, reports, and operational challenges before development begins.',
        },
        {
          step: '02',
          title: 'Solution Planning',
          description:
            'The system structure, modules, permissions, data flow, integrations, and delivery priorities are planned around actual requirements.',
        },
        {
          step: '03',
          title: 'Development and Testing',
          description:
            'Features are developed in manageable stages, reviewed carefully, and tested to protect existing workflows and business data.',
        },
        {
          step: '04',
          title: 'Deployment and Support',
          description:
            'The software is deployed to production, monitored, maintained, and improved as the organisation continues to grow.',
        },
      ].map((item) => (
        <article
          key={item.step}
          className="rounded-2xl border border-white/10 bg-slate-950 p-7"
        >
          <p className="text-sm font-bold tracking-[0.2em] text-blue-300">
            {item.step}
          </p>

          <h3 className="mt-5 text-xl font-semibold">
            {item.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-400">
            {item.description}
          </p>
        </article>
      ))}
    </div>

    <div className="mt-12 grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl border border-white/10 bg-slate-950 p-8">
        <h3 className="text-2xl font-semibold">
          Transparent development
        </h3>

        <p className="mt-4 leading-8 text-slate-300">
          Progress is handled in visible stages with clear review points,
          practical testing, and controlled deployments. This reduces risk
          and keeps decisions aligned with business priorities.
        </p>
      </div>

      <div className="rounded-3xl border border-blue-400/20 bg-blue-500/10 p-8">
        <h3 className="text-2xl font-semibold">
          Designed for continuity
        </h3>

        <p className="mt-4 leading-8 text-slate-300">
          Existing working systems are treated carefully. Improvements are
          planned to preserve stable workflows while introducing new
          capabilities in a controlled and maintainable way.
        </p>
      </div>
    </div>
  </div>
</section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} S4Start Technologies. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <a className="hover:text-white" href="/about">
              About
            </a>
            <a className="hover:text-white" href="/privacy-policy">
              Privacy Policy
            </a>
            <a className="hover:text-white" href="/terms">
              Terms
            </a>
            <a className="hover:text-white" href="/support">
              Support
            </a>
            <a className="hover:text-white" href="/contact">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}