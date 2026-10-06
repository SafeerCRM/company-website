export const metadata = {
  title: 'Solar CRM Privacy Policy | S4Start Technologies',
  description:
    'Privacy Policy for the Solar CRM mobile application provided by S4Start Technologies.',
};

const sections = [
  {
    title: '1. Introduction',
    content: [
      'This Privacy Policy explains how information is collected, used, stored, and protected when authorised users access the Solar CRM mobile application provided by S4Start Technologies.',
      'Solar CRM is a business operations application intended for authorised staff and users of organisations using the platform. The organisation providing a user with access to Solar CRM may control business records and personal information processed through the application.',
    ],
  },
  {
    title: '2. Account and Business Information',
    content: [
      'Solar CRM may process information associated with authorised user accounts, including name, phone number, email address, role, designation, branch, account identifiers, login information, and permissions.',
      'The application may also process operational information entered or accessed by authorised users, including leads, customer records, meetings, projects, payments, procurement records, stock information, attendance records, service requests, documents, notes, and other business workflow information.',
    ],
  },
  {
    title: '3. Location Information',
    content: [
      'Solar CRM may collect precise or approximate device location when location-based business features are used. These features may include field activity verification, attendance, meetings, project-site visits, inspections, work assignments, and live or background location tracking where enabled by the organisation.',
      'For features that require continued field tracking, location information may be collected while the relevant tracking function is active, including when the application is running in the background or the device screen is locked, subject to device permissions and applicable platform requirements.',
      'Location information is used for authorised operational purposes and may be accessible to authorised users of the organisation according to their roles and permissions.',
    ],
  },
  {
    title: '4. Camera, Photos, Files, and Documents',
    content: [
      'Solar CRM may request access to the camera, photos, or files when an authorised user needs to capture, select, upload, view, or manage business records.',
      'This may include meeting proof, attendance proof, project-site photographs, inspection evidence, payment receipts, identity or project documents, stock records, complaint evidence, proposals, invoices, and other operational documents.',
      'The application does not access such content for unrelated purposes.',
    ],
  },
  {
    title: '5. Microphone and Audio Recordings',
    content: [
      'Solar CRM may request microphone access for features that allow authorised users to create audio recordings associated with business activities, such as telecalling records, meeting proof, voice notes, or other operational records.',
      'Microphone access is used when a recording-related feature is activated. Solar CRM does not use the microphone for unrelated continuous audio monitoring.',
    ],
  },
  {
    title: '6. Phone and Calling Features',
    content: [
      'Solar CRM may use device calling capabilities to allow authorised users to initiate business-related phone calls from records available within the application.',
      'Where supported by the application and permitted by the device, limited call-related information required for CRM workflows may be processed for legitimate business operations. Solar CRM does not access calling functionality for unrelated purposes.',
    ],
  },
  {
    title: '7. Attendance and Staff Activity',
    content: [
      'Where enabled by the organisation, Solar CRM may process staff attendance and work-activity information such as punch-in or punch-out records, timestamps, location, photographs, assigned work, field activity, meetings, and related operational records.',
      'Such information is made available only for authorised organisational purposes and according to configured roles and permissions.',
    ],
  },
  {
    title: '8. Device, Network, and Technical Information',
    content: [
      'Solar CRM may process limited technical information necessary to operate and secure the service, such as device type, operating system, application version, network connectivity, login activity, IP address, diagnostic information, and error information.',
      'This information may be used for authentication, security, troubleshooting, application reliability, fraud or misuse prevention, and technical support.',
    ],
  },
  {
    title: '9. Notifications',
    content: [
      'Solar CRM may send notifications relating to work assignments, project activity, reminders, comments, approvals, meetings, payments, operational updates, or other authorised business events.',
      'Notification permissions can be controlled through the device settings where supported.',
    ],
  },
  {
    title: '10. How Information Is Used',
    content: [
      'Information processed through Solar CRM is used to authenticate authorised users, provide CRM and business-management functionality, manage organisational workflows, coordinate staff activities, maintain operational records, provide support, improve reliability, protect the service, and comply with applicable legal obligations.',
      'S4Start Technologies does not sell personal information processed through Solar CRM.',
    ],
  },
  {
    title: '11. Information Sharing',
    content: [
      'Information may be accessible to the organisation that provides the user with access to Solar CRM and to authorised users of that organisation according to their assigned roles and operational responsibilities.',
      'Information may also be processed by service providers used to operate the application, such as cloud hosting, database, file-storage, notification, security, and infrastructure providers, where required to provide the service.',
      'Information may be disclosed where required by applicable law, regulation, legal process, or valid governmental request.',
    ],
  },
  {
    title: '12. Data Storage and Security',
    content: [
      'Solar CRM uses administrative, technical, and organisational safeguards designed to protect information against unauthorised access, alteration, disclosure, misuse, or loss.',
      'Application data may be stored and processed using secure cloud infrastructure and service providers required for operation of the platform.',
      'Access to application functionality and information is restricted using authentication, role-based permissions, and other security controls where applicable.',
    ],
  },
  {
    title: '13. Data Retention',
    content: [
      'Information is retained for as long as reasonably necessary to provide the service, maintain operational and business records, meet contractual or legal requirements, resolve disputes, protect the platform, and support legitimate organisational requirements.',
      'Retention periods for organisational records may also be determined by the organisation using Solar CRM.',
    ],
  },
  {
    title: '14. Access, Correction, and Deletion Requests',
    content: [
      'Users may request access to, correction of, or deletion of personal information subject to applicable law, legitimate business requirements, and legal or contractual retention obligations.',
      'Because Solar CRM is used on behalf of organisations, certain requests relating to organisational records may need to be submitted to the organisation that provided the user with access.',
      'Privacy or account-related requests may also be submitted through the S4Start Technologies Support or Contact page.',
    ],
  },
  {
    title: '15. Children’s Privacy',
    content: [
      'Solar CRM is a business application intended for authorised organisational users and is not directed to children.',
      'We do not knowingly provide Solar CRM accounts to children for consumer use.',
    ],
  },
  {
    title: '16. Third-Party Service Providers',
    content: [
      'Solar CRM may rely on third-party service providers for functions such as cloud hosting, databases, file storage, application delivery, notifications, maps or location services, security, monitoring, and other technical infrastructure.',
      'These providers may process limited information where necessary to provide their services and are subject to their respective privacy and security obligations.',
    ],
  },
  {
    title: '17. Changes to This Privacy Policy',
    content: [
      'This Privacy Policy may be updated when Solar CRM features, data practices, legal requirements, or platform requirements change.',
      'Any updated version will be published on this page with a revised effective date.',
    ],
  },
  {
    title: '18. Contact Us',
    content: [
      'For privacy-related questions, account requests, or concerns relating to Solar CRM, contact S4Start Technologies through the Support or Contact page available on the S4Start Technologies website.',
    ],
  },
];

export default function SolarCrmPrivacyPolicyPage() {
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
            Solar CRM · Legal
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Solar CRM Privacy Policy
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            This Privacy Policy applies specifically to the Solar CRM mobile
            application provided by S4Start Technologies for authorised
            organisational users.
          </p>

          <p className="mt-4 text-sm text-slate-400">
            Effective date: 6 October 2026
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
                    <p key={paragraph} className="leading-8 text-slate-300">
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