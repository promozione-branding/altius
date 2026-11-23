import React from "react";
import { FiTruck, FiMail, FiPhone } from "react-icons/fi";

export const metadata = {
  title: "Shipping Policy | ELSTRONG",
  description:
    "Read ELSTRONG's order processing, shipping, delivery, tracking, and damaged shipment policy.",
};

const policies = [
  {
    number: "01",
    title: "Order Processing",
    items: [
      "All orders are processed after confirmation of payment and order details.",
      "Standard processing time is 2–5 business days, depending on product availability and customization requirements.",
      "Processing time for bulk or customized orders may vary and will be communicated before confirmation.",
    ],
  },
  {
    number: "02",
    title: "Shipping & Delivery Time",
    paragraphs: [
      "Delivery timelines depend on the destination and the size or type of product ordered.",
    ],
    items: [
      "Metro cities: 5–7 business days",
      "Other locations: 7–14 business days",
      "Remote or rural areas may require additional delivery time.",
    ],
  },
  {
    number: "03",
    title: "Shipping Charges",
    items: [
      "Shipping charges are calculated based on product weight and packaging.",
      "Delivery location and selected mode of transport are also considered.",
      "The final shipping charge will be shared during order confirmation.",
    ],
  },
  {
    number: "04",
    title: "Delivery Method",
    items: [
      "We work with trusted logistics partners for safe and reliable delivery.",
      "Large, heavy, or fragile lighting fixtures may require specialized handling or carriers.",
    ],
  },
  {
    number: "05",
    title: "Order Tracking",
    paragraphs: [
      "Once an order is dispatched, its tracking details or transport information will be shared by phone or email.",
    ],
  },
  {
    number: "06",
    title: "Delivery Guidelines",
    items: [
      "The customer or an authorized representative should be available at the delivery location.",
      "Please arrange suitable unloading assistance, such as a crane or forklift, when required.",
      "Inspect the package and product carefully at the time of delivery and record any visible damage.",
    ],
  },
  {
    number: "07",
    title: "Damaged or Delayed Shipments",
    items: [
      "Report damaged products within 24 hours of delivery, with clear photos or videos for verification.",
      "Delays caused by weather, transportation disruptions, strikes, or other unforeseen events may occur.",
    ],
  },
  {
    number: "08",
    title: "Service Availability",
    paragraphs: [
      "We currently deliver across India. For international orders, contact us to discuss product availability and shipping options.",
    ],
  },
];

export default function ShippingPolicyPage() {
  return (
    <main className="bg-[#f4f4f0] text-[#151515]">
      <section className="relative overflow-hidden bg-[#151515] px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:px-10">
        <div className="pointer-events-none absolute -right-32 top-[-80px] h-[420px] w-[420px] rounded-full bg-[#85a30f]/15 blur-[110px]" />
        <div className="relative mx-auto mt-10 max-w-[1500px] md:mt-15">
          <div className="mb-6 flex items-center gap-3 text-[#85a30f]">
            <FiTruck size={18} />
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em]">
              ELSTRONG
            </span>
          </div>
          <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-[78px]">
            Shipping <span className="text-[#85a30f]">Policy</span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            We ensure careful processing, secure packaging, and reliable
            delivery of every ELSTRONG order.
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
                    For shipping questions or delivery updates, contact our
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
