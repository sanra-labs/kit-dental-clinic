"use client";

import { useRef, useState, type FormEvent } from "react";
import { bookingCopy as copy, services } from "@/content/site";

type Field = keyof typeof copy.labels;
type Payload = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;
const inputClass =
  "mt-2 min-h-12 w-full min-w-0 rounded-xl border border-line bg-surface px-3 py-2 text-ink";

function today() {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export function BookingForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<Payload | null>(null);
  const busy = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(
      Object.keys(copy.labels).map((key) => [key, String(data.get(key) ?? "").trim()]),
    ) as Payload;
    const next: Errors = {};
    if (!payload.name) next.name = copy.errors.name;
    if (!/^[6-9]\d{9}$/.test(payload.phone)) next.phone = copy.errors.phone;
    if (!services.some((service) => service.title === payload.service))
      next.service = copy.errors.service;
    const parsed = new Date(`${payload.date}T12:00:00`);
    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(payload.date) ||
      Number.isNaN(parsed.getTime()) ||
      parsed.getDate() !== Number(payload.date.slice(-2)) ||
      payload.date < today()
    )
      next.date = copy.errors.date;
    if (!copy.slots.includes(payload.slot)) next.slot = copy.errors.slot;
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      const control = form.querySelector<HTMLInputElement | HTMLSelectElement>(`[name="${first}"]`);
      control?.focus();
      return;
    }
    busy.current = true;
    setSubmitting(true);
    // TODO: Replace this simulation with a Formspree/API request and handle failures.
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.info("Booking request (concept demo)", payload);
    setResult(payload);
    setSubmitting(false);
    busy.current = false;
  }

  function error(field: Field) {
    return errors[field] ? (
      <p id={`${field}-error`} className="mt-2 text-sm font-semibold text-accent-dark">
        {errors[field]}
      </p>
    ) : null;
  }
  function attributes(field: Field) {
    return {
      id: `booking-${field}`,
      name: field,
      "aria-invalid": Boolean(errors[field]),
      "aria-describedby":
        [field === "phone" ? "phone-hint" : "", errors[field] ? `${field}-error` : ""]
          .filter(Boolean)
          .join(" ") || undefined,
    };
  }

  return (
    <div className="min-w-0 rounded-[var(--radius-card)] border border-line p-6 sm:p-8">
      <p className="mb-6 text-sm text-muted">{copy.demo}</p>
      <div role="status" aria-live="polite">
        {result && (
          <>
            <h3 className="font-display text-xl font-bold text-brand-dark">{copy.success}</h3>
            <dl className="mt-6 space-y-3">
              {(Object.keys(copy.labels) as Field[])
                .filter((field) => result[field])
                .map((field) => (
                  <div key={field}>
                    <dt className="text-sm text-muted">{copy.labels[field]}</dt>
                    <dd className="break-words font-medium text-ink">{result[field]}</dd>
                  </div>
                ))}
            </dl>
          </>
        )}
      </div>
      {!result && (
        <form noValidate onSubmit={submit} aria-busy={submitting}>
          <fieldset disabled={submitting} className="min-w-0 space-y-5">
            <div>
              <label htmlFor="booking-name" className="font-semibold">
                {copy.labels.name}
              </label>
              <input {...attributes("name")} autoComplete="name" required className={inputClass} />
              {error("name")}
            </div>
            <div>
              <label htmlFor="booking-phone" className="font-semibold">
                {copy.labels.phone}
              </label>
              <input
                {...attributes("phone")}
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                required
                className={inputClass}
              />
              <p id="phone-hint" className="mt-2 text-sm text-muted">
                {copy.phoneHint}
              </p>
              {error("phone")}
            </div>
            <div>
              <label htmlFor="booking-service" className="font-semibold">
                {copy.labels.service}
              </label>
              <select {...attributes("service")} required defaultValue="" className={inputClass}>
                <option value="">{copy.chooseService}</option>
                {services.map((service) => (
                  <option key={service.title}>{service.title}</option>
                ))}
              </select>
              {error("service")}
            </div>
            <div>
              <label htmlFor="booking-date" className="font-semibold">
                {copy.labels.date}
              </label>
              <input
                {...attributes("date")}
                type="date"
                required
                onFocus={(event) => {
                  event.currentTarget.min = today();
                }}
                className={inputClass}
              />
              {error("date")}
            </div>
            <fieldset
              aria-invalid={Boolean(errors.slot)}
              aria-describedby={errors.slot ? "slot-error" : undefined}
            >
              <legend className="font-semibold">{copy.labels.slot}</legend>
              <div className="mt-2 flex flex-wrap gap-x-5">
                {copy.slots.map((slot) => (
                  <label key={slot} className="flex min-h-12 cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="slot"
                      value={slot}
                      required
                      aria-describedby={errors.slot ? "slot-error" : undefined}
                      className="size-5 accent-brand"
                    />
                    {slot}
                  </label>
                ))}
              </div>
              {error("slot")}
            </fieldset>
            <div>
              <label htmlFor="booking-notes" className="font-semibold">
                {copy.labels.notes}
              </label>
              <textarea {...attributes("notes")} rows={3} className={inputClass} />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="min-h-12 w-full rounded-full bg-accent px-6 py-3 font-semibold text-ink hover:bg-accent-dark hover:text-surface disabled:cursor-wait disabled:opacity-60"
            >
              {submitting ? copy.submitting : copy.submit}
            </button>
          </fieldset>
        </form>
      )}
    </div>
  );
}
