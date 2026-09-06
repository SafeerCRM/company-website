'use client';

import { FormEvent, useState } from 'react';

const projectTypes = [
  'Custom CRM & ERP',
  'Mobile Application',
  'Customer / Partner Portal',
  'Business Automation',
  'Analytics & Reporting',
  'Custom Business Software',
  'Not Sure Yet',
];

const organisationSizes = [
  '1–10 people',
  '11–50 people',
  '51–200 people',
  '200+ people',
  'Not sure / not applicable',
];

export default function BookDemoForm() {
  const [projectType, setProjectType] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [organisationSize, setOrganisationSize] = useState('');
  const [requirement, setRequirement] = useState('');
  const [timeline, setTimeline] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }

    if (!projectType) {
      setError('Please select the type of requirement.');
      return;
    }

    if (!requirement.trim()) {
      setError('Please briefly describe your requirement.');
      return;
    }

    setError('');

    const subject = `Software Project Enquiry - ${projectType}`;

    const body = [
      'Hello S4Start Technologies,',
      '',
      'I would like to discuss a software requirement.',
      '',
      `Name: ${name.trim()}`,
      `Company / Organisation: ${company.trim() || 'Not provided'}`,
      `Phone: ${phone.trim() || 'Not provided'}`,
      `Email: ${email.trim() || 'Not provided'}`,
      `Requirement Type: ${projectType}`,
      `Organisation Size: ${organisationSize || 'Not provided'}`,
      `Preferred Timeline: ${timeline.trim() || 'Not provided'}`,
      '',
      'Requirement:',
      requirement.trim(),
      '',
      'Please contact me to discuss the requirement further.',
    ].join('\n');

    const mailtoUrl =
      `mailto:s4starttech@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 sm:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {/* NAME */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-slate-200"
          >
            Your Name *
          </label>

          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/60"
          />
        </div>

        {/* COMPANY */}
        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-semibold text-slate-200"
          >
            Company / Organisation
          </label>

          <input
            id="company"
            type="text"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            placeholder="Company name"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/60"
          />
        </div>

        {/* PHONE */}
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-semibold text-slate-200"
          >
            Phone Number
          </label>

          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="+91..."
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/60"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-slate-200"
          >
            Your Email
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="name@company.com"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/60"
          />
        </div>

        {/* PROJECT TYPE */}
        <div>
          <label
            htmlFor="projectType"
            className="mb-2 block text-sm font-semibold text-slate-200"
          >
            What do you need? *
          </label>

          <select
            id="projectType"
            value={projectType}
            onChange={(event) => setProjectType(event.target.value)}
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3.5 text-white outline-none transition focus:border-blue-400/60"
          >
            <option value="">
              Select requirement
            </option>

            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* ORG SIZE */}
        <div>
          <label
            htmlFor="organisationSize"
            className="mb-2 block text-sm font-semibold text-slate-200"
          >
            Organisation Size
          </label>

          <select
            id="organisationSize"
            value={organisationSize}
            onChange={(event) =>
              setOrganisationSize(event.target.value)
            }
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3.5 text-white outline-none transition focus:border-blue-400/60"
          >
            <option value="">
              Select size
            </option>

            {organisationSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="mt-6">
        <label
          htmlFor="timeline"
          className="mb-2 block text-sm font-semibold text-slate-200"
        >
          Preferred Timeline
        </label>

        <input
          id="timeline"
          type="text"
          value={timeline}
          onChange={(event) => setTimeline(event.target.value)}
          placeholder="Example: Within 2 months, this quarter, exploring options..."
          className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/60"
        />
      </div>

      {/* REQUIREMENT */}
      <div className="mt-6">
        <label
          htmlFor="requirement"
          className="mb-2 block text-sm font-semibold text-slate-200"
        >
          Describe Your Requirement *
        </label>

        <textarea
          id="requirement"
          value={requirement}
          onChange={(event) => setRequirement(event.target.value)}
          rows={7}
          placeholder="Example: We currently manage leads, follow-ups and projects using Excel and WhatsApp. We need a CRM where our sales team can track leads, managers can monitor performance, and customers can see project progress..."
          className="w-full resize-y rounded-xl border border-white/10 bg-slate-900 px-4 py-3.5 leading-7 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/60"
        />
      </div>

      {/* ERROR */}
      {error && (
        <div className="mt-5 rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </div>
      )}

      {/* SUBMIT */}
      <button
        type="submit"
        className="mt-7 w-full rounded-xl bg-blue-500 px-6 py-4 font-semibold text-white transition hover:bg-blue-400"
      >
        Prepare Email & Continue
      </button>

      <p className="mt-4 text-center text-xs leading-6 text-slate-500">
        Clicking the button opens your email application with the information
        above already filled in. You can review it before sending.
      </p>
    </form>
  );
}