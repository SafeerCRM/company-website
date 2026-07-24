export const metadata = {
  title: 'Terms & Conditions | S4Start Technologies',
  description:
    'Terms and Conditions for applications and software services provided by S4Start Technologies.',
};

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: [
      'By accessing or using any website, portal, CRM system, ERP system, mobile application, or related service provided by S4Start Technologies, you agree to these Terms and Conditions.',
      'Where software is provided through a client organisation, your use may also be subject to that organisation’s internal policies, agreements, and instructions.',
    ],
  },
  {
    title: '2. Services',
    content: [
      'S4Start Technologies develops, provides, maintains, and supports business software, mobile applications, customer portals, staff applications, workflow systems, reporting tools, and related technology services.',
      'Features may vary between applications, client organisations, user roles, subscription plans, and implementation requirements.',
    ],
  },
  {
    title: '3. User Accounts',
    content: [
      'Users are responsible for maintaining the confidentiality of their login credentials and for all activity performed through their accounts.',
      'Users must provide accurate information and must not share account access with unauthorised persons.',
      'We may suspend or restrict access where misuse, unauthorised access, security risk, or violation of these terms is suspected.',
    ],
  },
  {
    title: '4. Acceptable Use',
    content: [
      'Users must use the services only for lawful and authorised purposes.',
      'Users must not attempt to gain unauthorised access, interfere with system operation, introduce malicious software, misuse uploaded information, impersonate another person, or use the services to violate applicable law.',
    ],
  },
  {
    title: '5. Client Organisation Responsibilities',
    content: [
      'Client organisations are responsible for managing their users, assigning appropriate permissions, maintaining accurate business records, and ensuring that information entered into the system is lawful and authorised.',
      'Client organisations are also responsible for informing their users about applicable workplace, customer, attendance, monitoring, location, and data-handling policies.',
    ],
  },
  {
    title: '6. Data and Content',
    content: [
      'Users and client organisations retain responsibility for the accuracy, legality, and ownership of information, files, photographs, audio recordings, documents, and other content entered into the services.',
      'By submitting content, users confirm that they have the necessary authority and permissions to provide and process that content.',
    ],
  },
  {
    title: '7. Intellectual Property',
    content: [
      'The software, source code, design, interfaces, documentation, branding, workflows, and related materials provided by S4Start Technologies remain protected by applicable intellectual property laws.',
      'No ownership rights are transferred unless expressly agreed in writing.',
      'Users may not copy, reverse engineer, resell, distribute, or modify the software except where expressly authorised.',
    ],
  },
  {
    title: '8. Availability and Maintenance',
    content: [
      'We aim to provide reliable services, but continuous or uninterrupted availability cannot be guaranteed.',
      'Services may be temporarily unavailable due to maintenance, updates, hosting issues, network failures, third-party service disruptions, security incidents, or circumstances beyond our reasonable control.',
    ],
  },
  {
    title: '9. Third-Party Services',
    content: [
      'The services may depend on third-party providers such as cloud hosting, authentication, maps, notifications, file storage, payment services, or communication platforms.',
      'We are not responsible for interruptions, changes, or failures caused by third-party services beyond our control.',
    ],
  },
  {
    title: '10. Payments and Commercial Terms',
    content: [
      'Commercial terms, implementation charges, subscription fees, support fees, customisation charges, payment schedules, and refund conditions are governed by the applicable quotation, invoice, service agreement, or written contract.',
      'Failure to make agreed payments may result in suspension or limitation of services.',
    ],
  },
  {
    title: '11. Support',
    content: [
      'Support is provided according to the applicable service agreement, support plan, or written commitment.',
      'Response times may vary depending on issue severity, service availability, business hours, and the scope of the support arrangement.',
    ],
  },
  {
    title: '12. Suspension and Termination',
    content: [
      'Access may be suspended or terminated where required for security, non-payment, misuse, legal compliance, breach of agreement, or protection of users and systems.',
      'On termination, access to services may end, but certain records may be retained where required by law, contract, security, accounting, or legitimate business needs.',
    ],
  },
  {
    title: '13. Disclaimer',
    content: [
      'The services are provided on an available basis and are intended to support business operations.',
      'Users and client organisations remain responsible for verifying important business, financial, legal, technical, and operational decisions.',
      'Unless expressly agreed otherwise, no guarantee is made that every feature will be error-free or suitable for every specific business purpose.',
    ],
  },
  {
    title: '14. Limitation of Liability',
    content: [
      'To the extent permitted by law, S4Start Technologies will not be liable for indirect, incidental, special, consequential, or business-loss damages arising from use or inability to use the services.',
      'Any liability will be subject to the limitations contained in the applicable agreement between S4Start Technologies and the relevant client organisation.',
    ],
  },
  {
    title: '15. Indemnity',
    content: [
      'Users and client organisations agree to be responsible for claims, losses, or expenses arising from unlawful use, unauthorised content, breach of these terms, or violation of third-party rights.',
    ],
  },
  {
    title: '16. Changes to These Terms',
    content: [
      'We may update these Terms and Conditions when services, legal requirements, or business practices change.',
      'The latest version will be published on this page with an updated effective date.',
    ],
  },
  {
    title: '17. Governing Law',
    content: [
      'These terms are governed by the applicable laws of India, subject to any specific written agreement entered into with a client organisation.',
      'Any dispute will be handled according to the jurisdiction stated in the relevant agreement or, where no agreement applies, the competent courts in India.',
    ],
  },
  {
    title: '18. Contact',
    content: [
      'Questions regarding these Terms and Conditions may be submitted through the Contact or Support page of this website.',
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <a href="/" className="font-bold tracking-tight">
            S4Start Technologies
          </a>

          <a
            href="/"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Back to home
          </a>
        </div>
      </header>

      <section className="border-b border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
            Legal
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Terms & Conditions
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            These terms govern the use of websites, portals, CRM and ERP
            systems, mobile applications, and related services provided by
            S4Start Technologies.
          </p>

          <p className="mt-4 text-sm text-slate-400">
            Effective date: 24 July 2026
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="space-y-10">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 sm:p-8"
              >
                <h2 className="text-2xl font-semibold">{section.title}</h2>

                <div className="mt-4 space-y-4">
                  {section.content.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="leading-8 text-slate-300"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} S4Start Technologies. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <a className="hover:text-white" href="/">
              Home
            </a>
            <a className="hover:text-white" href="/privacy-policy">
              Privacy Policy
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