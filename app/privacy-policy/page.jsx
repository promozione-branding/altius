import React from "react";
import { FiMail, FiPhone, FiShield } from "react-icons/fi";

export const metadata = {
  title: "Privacy Policy | ELSTRONG",
  description:
    "Learn how ELSTRONG collects, uses, protects, and manages personal information.",
};

const policies = [
  {
    number: "01",
    title: "Information We Collect",
    items: [
      "Name, phone number, and email address.",
      "Billing and shipping address.",
      "Order and transaction details.",
      "Website usage data, including cookies, IP address, and browser information.",
    ],
  },
  {
    number: "02",
    title: "How We Use Your Information",
    items: [
      "To process and deliver your orders.",
      "To communicate order updates and provide support.",
      "To improve our website and services.",
      "To send important notifications or offers where you have opted in.",
    ],
  },
  {
    number: "03",
    title: "Data Protection",
    paragraphs: [
      "We implement appropriate technical and organizational security measures to protect your personal data from unauthorized access, misuse, alteration, or disclosure.",
    ],
  },
  {
    number: "04",
    title: "Sharing of Information",
    items: [
      "We do not sell or rent your personal information to third parties.",
      "Information may be shared with trusted service providers, such as logistics and payment providers, strictly for order fulfillment.",
      "We may disclose data where required by law or by competent legal authorities.",
    ],
  },
  {
    number: "05",
    title: "Cookies",
    paragraphs: [
      "Our website may use cookies to enhance your experience, analyze traffic, and improve functionality. You can disable cookies through your browser settings.",
    ],
  },
  {
    number: "06",
    title: "Your Rights",
    items: [
      "You can request access to your personal data.",
      "You can request correction or deletion of your data.",
      "You can opt out of marketing communications at any time.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#f4f4f0] text-[#151515]">
      <section className="relative overflow-hidden bg-[#151515] px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:px-10">
        <div className="pointer-events-none absolute -right-32 top-[-80px] h-[420px] w-[420px] rounded-full bg-[#85a30f]/15 blur-[110px]" />
        <div className="relative mt-10 md:mt-15 mx-auto max-w-[1500px]">
          <div className="mb-6 flex items-center gap-3 text-[#85a30f]">
            <FiShield size={18} />
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em]">
              ELSTRONG
            </span>
          </div>
          <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-[78px]">
            Privacy <span className="text-[#85a30f]">Policy</span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            We value your privacy and are committed to protecting your personal
            information when you use our website or services.
          </p>
        </div>
      </section>

      <section className="px-5 py-6 sm:px-8 sm:py-12 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-5 md:grid-cols-2">
            {policies.map((policy) => (
              <article
                key={policy.number}
                className="border border-[#151515]/10 bg-white p-6 sm:p-8"
              >
                <div className="mb-7 flex items-center justify-between border-b border-[#151515]/10 pb-5">
                  <span className="text-[11px] font-semibold tracking-[0.18em] text-[#85a30f]">
                    {policy.number}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#85a30f]" />
                </div>
                <h2 className="text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
                  {policy.title}
                </h2>
                {policy.paragraphs &&
                  policy.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-5 text-sm leading-7 text-[#151515]/65"
                    >
                      {paragraph}
                    </p>
                  ))}
                {policy.items && (
                  <ul className="mt-5 space-y-3">
                    {policy.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-[#151515]/65"
                      >
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#85a30f]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}

            <article className="border border-[#151515]/10 bg-[#151515] p-6 text-white sm:p-8 md:col-span-2">
              <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr] lg:items-end">
                <div>
                  <span className="text-[11px] font-semibold tracking-[0.18em] text-[#85a30f]">
                    07
                  </span>
                  <h2 className="mt-5 text-2xl font-semibold tracking-[-0.02em]">
                    Policy Updates
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/55">
                    We may update this Privacy Policy from time to time. Changes
                    will be posted on this page with the updated date.
                  </p>
                </div>
                <div className="border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <span className="text-[11px] font-semibold tracking-[0.18em] text-[#85a30f]">
                    08
                  </span>
                  <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em]">
                    Contact Us
                  </h2>
                  <p className="mt-4 text-sm text-white/55">
                    ELSTRONG
                  </p>
                  <div className="mt-5 flex flex-col gap-3">
                    <a
                      href="mailto:altiuslightings@gmail.com"
                      className="flex items-center gap-3 text-sm text-white/75 transition-colors hover:text-[#85a30f]"
                    >
                      <FiMail className="shrink-0 text-[#85a30f]" />
                      altiuslightings@gmail.com
                    </a>
                    <a
                      href="tel:+919650167709"
                      className="flex items-center gap-3 text-sm text-white/75 transition-colors hover:text-[#85a30f]"
                    >
                      <FiPhone className="shrink-0 text-[#85a30f]" />
                      Customer Care: +91 96501 67709
                    </a>
                    <a
                      href="tel:+911145700658"
                      className="flex items-center gap-3 text-sm text-white/75 transition-colors hover:text-[#85a30f]"
                    >
                      <FiPhone className="shrink-0 text-[#85a30f]" />
                      Landline: +91 11 4570 0658
                    </a>
                    <a
                      href="tel:+919958659788"
                      className="flex items-center gap-3 text-sm text-white/75 transition-colors hover:text-[#85a30f]"
                    >
                      <FiPhone className="shrink-0 text-[#85a30f]" />
                      Alternate: +91 99586 59788
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
