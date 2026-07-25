export default function AccountDeletionPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-gray-900">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold">
          Account and Data Deletion Request
        </h1>

        <p className="mt-4 text-gray-700">
          This page explains how users of the Aditya Solars Customer app
          can request deletion of their account and associated personal data.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">
            How to request deletion
          </h2>

          <p className="mt-3 text-gray-700">
            Send an email to:
          </p>

          <p className="mt-2">
            <a
              href="mailto:crmapp1208@gmail.com?subject=Aditya%20Solars%20Customer%20Account%20Deletion%20Request"
              className="font-semibold text-blue-700 underline"
            >
              crmapp1208@gmail.com
            </a>
          </p>

          <p className="mt-4 text-gray-700">
            Use the subject:
          </p>

          <p className="mt-2 font-semibold">
            Aditya Solars Customer Account Deletion Request
          </p>

          <p className="mt-4 text-gray-700">
            Include the following information so that the account can be
            identified:
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
            <li>Customer name</li>
            <li>Registered mobile number</li>
            <li>K Number</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">
            Data that may be deleted
          </h2>

          <p className="mt-3 text-gray-700">
            After the request is verified, personal account data that is no
            longer required may be deleted or anonymized. This may include:
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
            <li>Customer profile information</li>
            <li>Saved project location information</li>
            <li>Complaint attachments and related customer submissions</li>
            <li>Referral submissions</li>
            <li>App notification and activity information</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">
            Data that may be retained
          </h2>

          <p className="mt-3 text-gray-700">
            Certain records may be retained where necessary for legal,
            accounting, warranty, contractual, fraud-prevention, dispute,
            regulatory, or legitimate business requirements.
          </p>

          <p className="mt-3 text-gray-700">
            These records may include project documents, invoices, payment
            records, warranty records, completed service history, and other
            legally required business records.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">
            Processing time
          </h2>

          <p className="mt-3 text-gray-700">
            Verified deletion requests are normally processed within 30 days.
            Additional time may be required where permitted by applicable law.
          </p>
        </section>

        <section className="mt-8 border-t pt-6 text-sm text-gray-600">
          <p>
            App: Aditya Solars Customer
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