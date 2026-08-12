import Link from "next/link";
import { poojaPricing, type PricingModel } from "@/lib/pooja-pricing";

function PricingModelSection({ model }: { model: PricingModel }) {
  return (
    <section
      id={model.id}
      className="scroll-mt-24 border-t border-stone-200/80 pt-14 first:border-t-0 first:pt-0"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-saffron-dark">
          {model.titleEn}
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-maroon sm:text-4xl">
          {model.titleHi}
          <span className="mt-1 block text-xl font-medium text-maroon-light sm:text-2xl">
            ({model.titleEn}) का प्राइसिंग चार्ट
          </span>
        </h2>
        <p className="mt-4 text-base leading-relaxed text-stone-600">
          {model.descriptionHi}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-stone-500">
          {model.descriptionEn}
        </p>
      </div>

      <div className="mt-10 space-y-12">
        {model.tiers.map((tier) => (
          <div key={tier.titleEn}>
            <div className="mb-5 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-saffron/25 pb-3">
              <h3 className="font-display text-xl font-semibold text-maroon sm:text-2xl">
                {tier.titleHi}
              </h3>
              <span className="text-sm text-stone-500">({tier.titleEn})</span>
            </div>

            <ul className="divide-y divide-stone-200/90">
              {tier.services.map((service) => (
                <li
                  key={service.nameEn}
                  className="grid gap-4 py-5 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] sm:items-start sm:gap-8"
                >
                  <div>
                    <p className="font-display text-lg font-semibold text-maroon">
                      {service.nameHi}
                    </p>
                    <p className="mt-0.5 text-sm text-stone-500">
                      {service.nameEn}
                    </p>
                    {service.pricing.note ? (
                      <p className="mt-2 text-xs leading-relaxed text-stone-400">
                        {service.pricing.note}
                      </p>
                    ) : null}
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-wider text-stone-400">
                        भारत / India
                      </p>
                      <p className="mt-1 text-sm font-medium text-stone-800 sm:text-base">
                        {service.pricing.india}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-wider text-stone-400">
                        Global NRI
                      </p>
                      <p className="mt-1 text-sm font-medium text-stone-800 sm:text-base">
                        {service.pricing.global}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PoojaPricing() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-saffron/15 blur-3xl" />
        <div className="absolute left-0 top-40 h-64 w-64 rounded-full bg-maroon/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-14 sm:pt-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-saffron-dark">
            Yagya & Pooja
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-maroon sm:text-5xl">
            पूजा सेवाएँ
          </h1>
          <p className="mt-2 font-display text-2xl text-maroon-light sm:text-3xl">
            Pricing Charts
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-600">
            Vedic rituals with clear India and Global NRI pricing — book once,
            or subscribe for recurring seva with prasad delivered to your door.
          </p>

          <nav
            aria-label="Pricing models"
            className="mt-8 flex flex-wrap gap-3"
          >
            {poojaPricing.map((model) => (
              <a
                key={model.id}
                href={`#${model.id}`}
                className="rounded-full border border-stone-300 bg-white/80 px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:border-saffron hover:text-maroon"
              >
                {model.titleHi}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-16 space-y-20">
          {poojaPricing.map((model) => (
            <PricingModelSection key={model.id} model={model} />
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-4 border-t border-stone-200 pt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-maroon px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-maroon-light"
          >
            ← Back to Home
          </Link>
          <p className="text-sm text-stone-500">
            Booking opens soon — pricing shown for planning and enquiry.
          </p>
        </div>
      </div>
    </div>
  );
}
