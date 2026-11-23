import React from "react";
import { FiFileText, FiMail, FiPhone } from "react-icons/fi";

export const metadata = {
  title: "Terms & Conditions | ELSTRONG",
  description:
    "Read ELSTRONG's website use, product, order, shipping, return, liability, and policy terms.",
};

const terms = [
  {
    number: "01",
    title: "Use of Website",
    items: [
      "You agree to use this website only for lawful purposes.",
      "You must not misuse, disrupt, or attempt unauthorized access to the website or its systems.",
      "Website content is provided for informational and commercial use.",
    ],
  },
  {
    number: "02",
    title: "Product Information",
    items: [
      "We strive to provide accurate product descriptions, specifications, imagery, and pricing.",
      "Minor variations may occur due to manufacturing processes or display settings.",
      "We reserve the right to update product information at any time.",
    ],
  },
  {
    number: "03",
    title: "Orders & Payments",
    items: [
      "Orders are confirmed only after successful payment and order verification.",
      "We reserve the right to cancel or refuse an order at our discretion.",
      "Pricing and product availability are subject to change without notice.",
    ],
  },
  {
    number: "04",
    title: "Shipping & Delivery",
    items: [
      "Delivery timelines are estimates and may vary based on location and product requirements.",
      "Delays caused by external factors or events beyond our reasonable control are not guaranteed.",
      "Please refer to our Shipping Policy for detailed delivery information.",
    ],
  },
  {
    number: "05",
    title: "Returns & Refunds",
    items: [
      "Returns are governed by our Return & Refund Policy.",
      "Certain products may not be eligible for return or replacement.",
      "Approved refunds are processed after inspection and verification.",
    ],
  },
  {
    number: "06",
    title: "Limitation of Liability",
    paragraphs: [
      "ELSTRONG shall not be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use our website, products, or services.",
    ],
  },
  {
    number: "07",
    title: "Intellectual Property",
    paragraphs: [
      "All content on this website, including text, graphics, images, product information, branding, and logos, is the property of ELSTRONG and may not be copied, reproduced, or used without prior written permission.",
    ],
  },
  {
    number: "08",
    title: "Policy Updates",
    paragraphs: [
      "We reserve the right to update these terms at any time. Revised terms will become effective once they are posted on this page.",
    ],
  },
];

export default function TermsConditionsPage() {
  return (
    <main className="bg-[#f4f4f0] text-[#151515]">
      <section className="relative overflow-hidden bg-[#151515] px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:px-10">
        <div className="pointer-events-none absolute -right-32 top-[-80px] h-[420px] w-[420px] rounded-full bg-[#85a30f]/15 blur-[110px]" />
        <div className="relative mx-auto mt-10 max-w-[1500px] md:mt-15">
          <div className="mb-6 flex items-center gap-3 text-[#85a30f]">
            <FiFileText size={18} />
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em]">
              ELSTRONG
            </span>
          </div>
          <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-[78px]">
            Terms & <span className="text-[#85a30f]">Conditions</span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            These terms govern your use of our website and services. By
            accessing or purchasing from ELSTRONG, you agree to comply with
            the terms below.
          </p>
        </div>
      </section>

      <section className="px-5 py-6 sm:px-8 sm:py-12 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-5 md:grid-cols-2">
            {terms.map((term) => (
              <article
                key={term.number}
                className="border border-[#151515]/10 bg-white p-6 sm:p-8"
              >
                <div className="mb-7 flex items-center justify-between border-b border-[#151515]/10 pb-5">
                  <span className="text-[11px] font-semibold tracking-[0.18em] text-[#85a30f]">
                    {term.number}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#85a30f]" />
                </div>
                <h2 className="text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
                  {term.title}
                </h2>
                {term.paragraphs &&
                  term.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-5 text-sm leading-7 text-[#151515]/65"
                    >
                      {paragraph}
                    </p>
                  ))}
                {term.items && (
                  <ul className="mt-5 space-y-3">
                    {term.items.map((item) => (
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
                    For questions about these terms, please contact our
                    customer care team.
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
