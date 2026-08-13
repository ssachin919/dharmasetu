"use client";

import { FormEvent, useState } from "react";
import { getSeva, rituals } from "@/lib/rituals";
import { hubs } from "@/lib/hubs";
import { whatsappUrl } from "@/lib/site";

type Fields = {
  ritual: string;
  seva: string;
  hub: string;
  name: string;
  gotra: string;
  wish: string;
  date: string;
  phone: string;
  email: string;
  address: string;
};

const empty: Fields = {
  ritual: "",
  seva: "",
  hub: "",
  name: "",
  gotra: "",
  wish: "",
  date: "",
  phone: "",
  email: "",
  address: "",
};

export function BookingForm({
  initialRitual = "",
  initialSeva = "",
}: {
  initialRitual?: string;
  initialSeva?: string;
}) {
  const [fields, setFields] = useState<Fields>({
    ...empty,
    ritual: initialRitual,
    seva: initialSeva,
  });
  const [sent, setSent] = useState(false);

  const selectedRitual = rituals.find((r) => r.slug === fields.ritual);
  const selectedSeva =
    selectedRitual && fields.seva
      ? getSeva(selectedRitual, fields.seva)
      : undefined;

  const availableHubs = selectedRitual
    ? hubs.filter((h) => selectedRitual.hubSlugs.includes(h.slug))
    : hubs;

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => {
      const next = { ...prev, [key]: value };
      if (key === "ritual") {
        next.hub = "";
        next.seva = "";
      }
      return next;
    });
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent && selectedRitual && selectedSeva) {
    const message = [
      `Namaste. Sankalpa request for ${selectedRitual.name}.`,
      `Seva: ${selectedSeva.name} (${selectedSeva.priceInr} / ${selectedSeva.priceUsd})`,
      `Hub: ${hubs.find((h) => h.slug === fields.hub)?.name ?? fields.hub}`,
      `Name: ${fields.name}`,
      `Gotra: ${fields.gotra}`,
      `Wish / Hetu: ${fields.wish}`,
      `Preferred date: ${fields.date}`,
      `Phone: ${fields.phone}`,
    ].join("\n");

    return (
      <div className="rounded-lg border border-tulsi-green/30 bg-cream-raised p-6 sm:p-8">
        <p className="label-caps text-[11px] text-tulsi-green">Received</p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-setu-indigo">
          Your Sankalpa details are ready.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-indigo/85">
          Send them on WhatsApp to confirm. A coordinator will reply with the
          muhurat and the same price shown here.
        </p>
        <p className="mt-4 text-sm text-ink-indigo/70">{selectedSeva.name}</p>
        <p className="font-display text-3xl font-bold text-setu-indigo">
          {selectedSeva.priceInr}
        </p>
        <p className="text-sm text-ink-indigo/60">
          {selectedSeva.priceUsd} overseas · no hidden charges
        </p>
        <a
          href={whatsappUrl(message)}
          className="mt-6 inline-flex rounded-md bg-tulsi-green px-5 py-3 text-sm font-semibold text-sacred-cream"
        >
          Confirm on WhatsApp
        </a>
        {/* TODO: wire payment (Razorpay / Stripe) once the backend is ready. */}
        <p className="mt-4 text-xs text-ink-indigo/50">
          Online payment is being prepared. Until then, confirmation and
          dakshina are completed on WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <fieldset className="grid gap-5 sm:grid-cols-2">
        <legend className="sr-only">Ritual, seva, and hub</legend>
        <label className="block text-sm">
          <span className="font-medium text-setu-indigo">Ritual</span>
          <select
            required
            value={fields.ritual}
            onChange={(e) => update("ritual", e.target.value)}
            className="mt-1.5 w-full rounded-md border border-setu-indigo/20 bg-sacred-cream px-3 py-2.5 text-ink-indigo"
          >
            <option value="">Choose a ritual</option>
            {rituals.map((r) => (
              <option key={r.slug} value={r.slug}>
                {r.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="font-medium text-setu-indigo">Form of the seva</span>
          <select
            required
            value={fields.seva}
            onChange={(e) => update("seva", e.target.value)}
            disabled={!selectedRitual}
            className="mt-1.5 w-full rounded-md border border-setu-indigo/20 bg-sacred-cream px-3 py-2.5 text-ink-indigo disabled:opacity-60"
          >
            <option value="">Choose a form</option>
            {selectedRitual?.sevas.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name} — {s.priceInr}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="font-medium text-setu-indigo">Sacred hub</span>
          <select
            required
            value={fields.hub}
            onChange={(e) => update("hub", e.target.value)}
            className="mt-1.5 w-full rounded-md border border-setu-indigo/20 bg-sacred-cream px-3 py-2.5 text-ink-indigo"
          >
            <option value="">Choose a hub</option>
            {availableHubs.map((h) => (
              <option key={h.slug} value={h.slug}>
                {h.name}
              </option>
            ))}
          </select>
        </label>
      </fieldset>

      <fieldset className="grid gap-5 sm:grid-cols-2">
        <legend className="sr-only">Sankalpa</legend>
        <label className="block text-sm">
          <span className="font-medium text-setu-indigo">
            Name for the Sankalpa
          </span>
          <input
            required
            value={fields.name}
            onChange={(e) => update("name", e.target.value)}
            className="mt-1.5 w-full rounded-md border border-setu-indigo/20 bg-sacred-cream px-3 py-2.5 text-ink-indigo"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-setu-indigo">Gotra</span>
          <input
            required
            value={fields.gotra}
            onChange={(e) => update("gotra", e.target.value)}
            className="mt-1.5 w-full rounded-md border border-setu-indigo/20 bg-sacred-cream px-3 py-2.5 text-ink-indigo"
          />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="font-medium text-setu-indigo">Wish / Hetu</span>
          <textarea
            required
            rows={3}
            value={fields.wish}
            onChange={(e) => update("wish", e.target.value)}
            className="mt-1.5 w-full rounded-md border border-setu-indigo/20 bg-sacred-cream px-3 py-2.5 text-ink-indigo"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-setu-indigo">Preferred date</span>
          <input
            required
            type="date"
            value={fields.date}
            onChange={(e) => update("date", e.target.value)}
            className="mt-1.5 w-full rounded-md border border-setu-indigo/20 bg-sacred-cream px-3 py-2.5 text-ink-indigo"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-setu-indigo">WhatsApp number</span>
          <input
            required
            type="tel"
            value={fields.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="mt-1.5 w-full rounded-md border border-setu-indigo/20 bg-sacred-cream px-3 py-2.5 text-ink-indigo"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-setu-indigo">Email (optional)</span>
          <input
            type="email"
            value={fields.email}
            onChange={(e) => update("email", e.target.value)}
            className="mt-1.5 w-full rounded-md border border-setu-indigo/20 bg-sacred-cream px-3 py-2.5 text-ink-indigo"
          />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="font-medium text-setu-indigo">
            Address for Prasad or yantra
          </span>
          <textarea
            rows={2}
            value={fields.address}
            onChange={(e) => update("address", e.target.value)}
            className="mt-1.5 w-full rounded-md border border-setu-indigo/20 bg-sacred-cream px-3 py-2.5 text-ink-indigo"
          />
          <span className="mt-1 block text-xs text-ink-indigo/55">
            Needed when the seva includes a physical Prasad box, yantra, or
            murti. E-Prasad does not require it.
          </span>
        </label>
      </fieldset>

      {selectedSeva ? (
        <div className="rounded-md border border-setu-indigo/15 bg-cream-raised p-5">
          <p className="label-caps text-[11px] text-tulsi-green">
            Price before you pay
          </p>
          <p className="mt-1 text-sm text-ink-indigo/70">{selectedSeva.name}</p>
          <p className="font-display text-3xl font-bold text-setu-indigo">
            {selectedSeva.priceInr}
          </p>
          <p className="text-sm text-ink-indigo/70">
            {selectedSeva.priceUsd} overseas · no hidden charges
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-ink-indigo/70">
            {selectedSeva.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <button
        type="submit"
        className="rounded-md bg-temple-saffron px-5 py-3 text-sm font-semibold text-setu-indigo transition-colors hover:bg-saffron-deep hover:text-sacred-cream"
      >
        Continue to WhatsApp confirmation
      </button>
      <p className="text-xs text-ink-indigo/55">
        {/* TODO: connect booking API and payment gateway. */}
        This form does not charge you. Confirmation is on WhatsApp.
      </p>
    </form>
  );
}
