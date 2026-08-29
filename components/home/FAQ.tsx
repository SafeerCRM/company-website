const faqs = [
  {
    question: 'What type of software does S4Start Technologies build?',
    answer:
      'We build custom CRM systems, ERP platforms, mobile applications, customer and dealer portals, workflow management systems, dashboards, reporting platforms, and business automation solutions.',
  },
  {
    question: 'Can you build software around our existing business process?',
    answer:
      'Yes. Our approach starts with understanding your departments, users, approvals, reporting requirements, workflows, and operational challenges before defining the system structure.',
  },
  {
    question: 'Can individual modules be developed first?',
    answer:
      'Yes. A project can begin with a specific module such as CRM, project management, inventory, HR, or customer portals and later expand into a larger connected platform.',
  },
  {
    question: 'Do you develop mobile applications as well?',
    answer:
      'Yes. We develop Android applications and mobile-first business experiences for customers, staff, dealers, contractors, field teams, and other operational users.',
  },
  {
    question: 'Can existing software be improved instead of rebuilt?',
    answer:
      'Yes. Existing working systems can often be extended, optimised, secured, and modernised without replacing the entire platform. The correct approach depends on the current architecture and requirements.',
  },
  {
    question: 'Do you provide support after deployment?',
    answer:
      'Yes. Business software usually continues evolving after launch, so ongoing maintenance, optimisation, feature development, and controlled improvements can be provided.',
  },
  {
    question: 'Can different employees have different access levels?',
    answer:
      'Yes. Role-based permissions can be designed so users only see the pages, records, actions, approvals, and reports relevant to their responsibilities.',
  },
  {
    question: 'How do we start a project?',
    answer:
      'Start by explaining your current process, the problems you want to solve, the users involved, and the outcome you expect. From there, the requirements and suitable solution structure can be discussed.',
  },
];

export default function FAQ() {
  return (
    <section className="border-b border-white/10 bg-slate-900/45">
      <div className="mx-auto max-w-5xl px-6 py-24 lg:px-8 lg:py-28">
        <div className="text-center">
          <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            Frequently asked questions
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Common questions about
            <span className="block text-blue-300">
              custom business software
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A few practical answers for organisations considering a custom
            CRM, ERP, mobile application, or connected business platform.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-white/10 bg-slate-950/70"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 font-semibold text-white sm:px-7">
                <span>
                  {faq.question}
                </span>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-blue-300 transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="border-t border-white/10 px-6 py-5 sm:px-7">
                <p className="leading-7 text-slate-400">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-400">
            Have a requirement that is not covered here?
          </p>

          <a
            href="/contact"
            className="mt-5 inline-flex rounded-xl border border-blue-400/30 bg-blue-500/10 px-6 py-3 font-semibold text-blue-100 transition hover:bg-blue-500/20"
          >
            Ask Us Directly
          </a>
        </div>
      </div>
    </section>
  );
}