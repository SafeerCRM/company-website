export const metadata = {
  title: 'Privacy Policy | S4Start Technologies',
  description:
    'Privacy Policy for applications and software services provided by S4Start Technologies.',
};

const sections = [
  {
    title: '1. Introduction',
    content: [
      'This Privacy Policy explains how S4Start Technologies collects, uses, stores, and protects information when users access our websites, business software, customer portals, dealer portals, staff applications, mobile applications, and related services.',
      'Our applications may be customised and branded for different client organisations. In those cases, the client organisation may also control or process information entered into the application.',
    ],
  },
  {
    title: '2. Information We Collect',
    content: [
      'We may collect information that users provide directly, including names, phone numbers, email addresses, customer identifiers, account details, project information, payment-related records, complaints, service requests, documents, photographs, audio recordings, and other business information.',
      'We may also collect technical information such as device type, operating system, application version, login activity, IP address, error logs, and usage information required to maintain security and service reliability.',
    ],
  },
  {
    title: '3. Camera, Photos, Files, and Documents',
    content: [
      'Some applications may request access to the device camera, photo library, or files so users can upload project images, identity or property documents, receipts, complaint evidence, work proofs, and other records required for the relevant service.',
      'These permissions are used only when the user chooses or is required to capture, select, or upload such content.',
    ],
  },
  {
    title: '4. Microphone and Audio',
    content: [
      'Some applications may request microphone access so users can record audio notes, complaint descriptions, meeting proofs, or other voice-based records connected with business operations.',
      'Audio is not recorded continuously and is collected only when the user actively starts a recording feature.',
    ],
  },
  {
    title: '5. Location Information',
    content: [
      'Some applications may collect precise or approximate location information when location-based features are used. This may include project-site location, customer-submitted location, employee field activity, meeting location, attendance, route tracking, or service-location verification.',
      'Location information is collected only for features where it is operationally required and may be shared with the relevant authorised organisation and authorised users of that organisation.',
    ],
  },
  {
    title: '6. Notifications',
    content: [
      'Applications may use notifications to send project updates, reminders, complaint updates, payment information, work assignments, service messages, or other account-related communications.',
      'Users may control notification permissions through their device settings.',
    ],
  },
  {
    title: '7. How We Use Information',
    content: [
      'We use information to provide and operate the requested services, authenticate users, manage projects and workflows, process service requests, provide customer support, improve application performance, maintain security, prevent misuse, and comply with legal obligations.',
      'We do not sell personal information.',
    ],
  },
  {
    title: '8. Information Sharing',
    content: [
      'Information may be shared with the organisation that provides the user access to the application, authorised employees or representatives of that organisation, service providers that support hosting or technical operations, and authorities where disclosure is required by law.',
      'Access is limited according to application roles, permissions, and operational requirements.',
    ],
  },
  {
    title: '9. Data Storage and Security',
    content: [
      'We use reasonable administrative, technical, and organisational safeguards designed to protect information from unauthorised access, alteration, disclosure, or loss.',
      'Information may be stored using secure cloud infrastructure and third-party service providers required to operate the application.',
      'No electronic system can guarantee absolute security, but we take appropriate measures to reduce risk.',
    ],
  },
  {
    title: '10. Data Retention',
    content: [
      'Information is retained for as long as necessary to provide services, maintain business and legal records, resolve disputes, enforce agreements, and meet regulatory requirements.',
      'Retention periods may also be determined by the client organisation using the software.',
    ],
  },
  {
    title: '11. User Rights and Requests',
    content: [
      'Users may request access, correction, or deletion of personal information, subject to applicable law and legitimate business or legal retention requirements.',
      'Where an application is operated for a client organisation, users may first need to contact that organisation because it may control the relevant records.',
    ],
  },
  {
    title: '12. Children’s Privacy',
    content: [
      'Our business applications are not intended for children unless a particular service expressly states otherwise. We do not knowingly collect personal information from children without appropriate authorisation.',
    ],
  },
  {
    title: '13. Third-Party Services',
    content: [
      'Our services may use third-party providers for cloud hosting, authentication, notifications, analytics, file storage, maps, or other technical features.',
      'Those providers may process limited information according to their own privacy policies and contractual obligations.',
    ],
  },
  {
    title: '14. Changes to This Policy',
    content: [
      'We may update this Privacy Policy when our services, legal obligations, or data practices change.',
      'The updated version will be published on this page with a revised effective date.',
    ],
  },
  {
    title: '15. Contact Us',
    content: [
      'For privacy-related questions, requests, or concerns, contact S4Start Technologies using the contact details published on our Contact or Support page.',
    ],
  },
];

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            This policy applies to websites, portals, CRM and ERP systems,
            mobile applications, and related software services provided by
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

          <div className="flex gap-5">
            <a className="hover:text-white" href="/">
              Home
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