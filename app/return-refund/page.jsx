import React from "react";
import { FiMail, FiPhone, FiRefreshCw } from "react-icons/fi";

export const metadata = {
  title: "Return & Refund Policy | ELSTRONG",
  description:
    "Review ELSTRONG's return eligibility, refund process, replacement, cancellation, and shipping policy.",
};

const policies = [
  {
    number: "01",
    title: "Return Eligibility",
    items: [
      "The product is damaged during transit.",
      "An incorrect product or quantity is delivered.",
      "The product does not match the confirmed order specifications.",
      "Return requests must be submitted within 24–48 hours of delivery.",
    ],
  },
  {
    number: "02",
    title: "Non-Returnable Items",
    items: [
      "Opened or partially used products.",
      "Products stored improperly after delivery.",
      "Customized or made-to-order products.",
      "Products damaged due to customer mishandling.",
    ],
  },
  {
    number: "03",
    title: "Return Process",
    items: [
      "Contact our support team within the eligible return period.",
      "Share the order details with clear photos or videos of the issue.",
      "Our team will review the request and document the product condition.",
      "If approved, return instructions and the pickup or shipping arrangement will be provided.",
    ],
  },
  {
    number: "04",
    title: "Refund Policy",
    items: [
      "Refunds are processed after inspection and approval.",
      "Approved refunds are typically processed within 7–10 business days.",
      "Refunds will be credited by the original payment method or an agreed alternative.",
    ],
  },
  {
    number: "05",
    title: "Replacement Policy",
    paragraphs: [
      "For damaged, defective, or incorrect products, we may offer:",
    ],
    items: [
      "Replacement of the product.",
      "A suitable alternative product.",
      "A refund, subject to the nature of the issue.",
    ],
  },
  {
    number: "06",
    title: "Return Shipping",
    items: [
      "ELSTRONG will bear the return shipping cost if the issue is attributable to us.",
      "When the issue is not attributable to us, return shipping may be the customer's responsibility.",
    ],
  },
  {
    number: "07",
    title: "Order Cancellation",
    items: [
      "Orders may be cancelled before dispatch without cancellation charges.",
      "Cancellation after dispatch may not be accepted.",
    ],
  },
  {
    number: "08",
    title: "Important Notes",
    items: [
      "Follow the recommended storage and handling guidelines.",
      "Claims without supporting proof may not be approved.",
      "Always follow the product's safety and installation instructions.",
    ],
  },
];

export default function ReturnRefundPage() {
  return (
    <main className="bg-[#f4f4f0] text-[#151515]">
      <section className="relative overflow-hidden bg-[#151515] px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:px-10">
        <div className="pointer-events-none absolute -right-32 top-[-80px] h-[420px] w-[420px] rounded-full bg-[#85a30f]/15 blur-[110px]" />
        <div className="relative mx-auto mt-10 max-w-[1500px] md:mt-15">
          <div className="mb-6 flex items-center gap-3 text-[#85a30f]">
            <FiRefreshCw size={18} />
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em]">
              ELSTRONG
            </span>
          </div>
          <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-[78px]">
            Return & <span className="text-[#85a30f]">Refund Policy</span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            We handle every concern carefully to protect product quality,
            customer safety, and a fair resolution process.
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
                    09
                  </span>
                  <h2 className="mt-5 text-2xl font-semibold tracking-[-0.02em]">
                    Contact Us
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/55">
                    For return or refund assistance, contact our customer care
                    team with your order details.
                  </p>
                </div>
                <div className="border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <p className="text-sm font-semibold text-white">ELSTRONG</p>
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
