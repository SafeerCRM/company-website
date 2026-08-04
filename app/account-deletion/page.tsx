export default function AccountDeletionPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-gray-900">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold">
          Account and Data Deletion Request
        </h1>

        <p className="mt-4 text-gray-700">
          This page explains how users of Aditya Solars applications can
          request deletion of their account and associated personal data.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">
            Applications covered
          </h2>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
            <li>Aditya Solars Customer</li>
            <li>Aditya Solars Dealer</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">
            How to request deletion
          </h2>

          <p className="mt-3 text-gray-700">
            Send an email to:
          </p>

          <p className="mt-2">
            <a
              href="mailto:crmapp1208@gmail.com?subject=Aditya%20Solars%20Account%20Deletion%20Request"
              className="font-semibold text-blue-700 underline"
            >
              crmapp1208@gmail.com
            </a>
          </p>

          <p className="mt-4 text-gray-700">
            Use the subject:
          </p>

          <p className="mt-2 font-semibold">
            Aditya Solars Account Deletion Request
          </p>

          <p className="mt-4 text-gray-700">
            Include the following information so the account can be
            identified and verified:
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
            <li>Full name</li>
            <li>Registered mobile number</li>
            <li>Registered email address, if available</li>
            <li>Application name: Customer or Dealer</li>
            <li>
              K Number for Customer accounts, if applicable
            </li>
            <li>
              Dealer name or dealer identifier for Dealer accounts, if
              applicable
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">
            Data that may be deleted
          </h2>

          <p className="mt-3 text-gray-700">
            After the request is verified, personal account data that is no
            longer required may be deleted or anonymized. Depending on the
            application and account type, this may include:
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
            <li>Customer or dealer profile information</li>
            <li>Login and account access information</li>
            <li>Saved project or delivery location information</li>
            <li>Complaint attachments and customer submissions</li>
            <li>Referral submissions</li>
            <li>App notifications and activity information</li>
            <li>Dealer delivery address and GPS submissions</li>
            <li>
              Other personal information associated with the account
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">
            Data that may be retained
          </h2>

          <p className="mt-3 text-gray-700">
            Certain records may be retained where necessary for legal,
            accounting, tax, warranty, contractual, fraud-prevention,
            dispute-resolution, regulatory, security, or legitimate business
            requirements.
          </p>

          <p className="mt-3 text-gray-700">
            These records may include project documents, dealer orders,
            invoices, payment records, tax records, warranty records,
            completed service history, delivery records, audit logs, and
            other legally required business records.
          </p>

          <p className="mt-3 text-gray-700">
            Retained records will only be kept for the period required by
            applicable law or legitimate business obligations.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">
            Processing time
          </h2>

          <p className="mt-3 text-gray-700">
            Verified deletion requests are normally processed within 30 days.
            Additional time may be required where permitted by applicable law
            or where identity verification is incomplete.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">
            Account access
          </h2>

          <p className="mt-3 text-gray-700">
            Once an account deletion request is completed, access to the
            relevant application account may be permanently disabled and may
            not be recoverable.
          </p>
        </section>

        <section className="mt-8 border-t pt-6 text-sm text-gray-600">
          <p>
            Applications: Aditya Solars Customer and Aditya Solars Dealer
          </p>

          <p className="mt-2">
            Developer: S4Start Technologies
          </p>

          <p className="mt-2">
            Contact:{' '}
            <a
              href="mailto:crmapp1208@gmail.com"
              className="text-blue-700 underline"
            >
              crmapp1208@gmail.com
            </a>
          </p>

          <p className="mt-2">
            Developer website:{' '}
            <a
              href="https://s4starttech.com"
              className="text-blue-700 underline"
            >
              https://s4starttech.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}