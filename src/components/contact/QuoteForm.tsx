"use client";

import { useState, useRef, type FormEvent } from "react";
import { cn } from "@/lib/cn";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { BadgeCheck, AlertCircle, Shield, Clock } from "lucide-react";

const propertyOptions = ["House", "Apartment", "Condo", "Commercial", "Other"];

type FormStatus = "idle" | "submitting" | "success" | "error";

/* Shared input classes */
const inputBase = cn(
  "w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 text-sm",
  "rounded-lg min-h-[46px] [-webkit-appearance:none]",
  "focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20",
  "transition-colors placeholder:text-slate-400"
);

const labelBase =
  "block text-xs font-display uppercase tracking-wider text-slate-500 mb-1.5";

export default function QuoteForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);

    /* Honeypot check */
    if (formData.get("_gotcha")) {
      setStatus("success");
      return;
    }

    try {
      const response = await fetch(company.formAction, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  /* -- Success State ------------------------------------------ */
  if (status === "success") {
    return (
      <div className="relative bg-white border border-slate-200 shadow-xl shadow-slate-200/50 p-8 md:p-10 rounded-xl">
        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-teal-500 rounded-tl-xl" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-teal-500 rounded-tr-xl" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-teal-500 rounded-bl-xl" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-teal-500 rounded-br-xl" />

        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-4">
            <BadgeCheck className="w-8 h-8 text-teal-500" />
          </div>
          <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
            Request Received
          </h3>
          <p className="text-slate-500 max-w-sm mx-auto">
            We&rsquo;ll get back to you within 24 hours with an honest quote. No
            surprises, no hidden fees.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 text-teal-600 hover:text-teal-500 font-display text-sm uppercase tracking-wider transition-colors cursor-pointer"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  /* -- Form --------------------------------------------------- */
  return (
    <div className="relative bg-white border border-slate-200 shadow-xl shadow-slate-200/50 p-6 md:p-8 lg:p-10 rounded-xl">
      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-teal-500 rounded-tl-xl" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-teal-500 rounded-tr-xl" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-teal-500 rounded-bl-xl" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-teal-500 rounded-br-xl" />

      <h3 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-1">
        Request a Free Quote
      </h3>
      <p className="text-slate-500 text-sm mb-6">
        Tell us what you need &mdash; we&rsquo;ll get back to you within 24
        hours.
      </p>

      {/* Error banner */}
      {status === "error" && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 flex items-start gap-2 text-red-600 text-sm rounded-lg">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <span>
            Something went wrong. Please try again or call us at{" "}
            <a href={`tel:${company.phoneRaw}`} className="underline">
              {company.phone}
            </a>
            .
          </span>
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-5"
        noValidate
      >
        {/* Honeypot */}
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          className="absolute opacity-0 pointer-events-none h-0 w-0"
          aria-hidden="true"
        />

        {/* Row 1: Service + Property Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="quote-service" className={labelBase}>
              Service Needed
            </label>
            <select
              id="quote-service"
              name="service"
              required
              className={cn(inputBase, "appearance-none cursor-pointer")}
              defaultValue=""
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="quote-property" className={labelBase}>
              Property Type
            </label>
            <select
              id="quote-property"
              name="property"
              required
              className={cn(inputBase, "appearance-none cursor-pointer")}
              defaultValue=""
            >
              <option value="" disabled>
                Select type
              </option>
              {propertyOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 2: Preferred Date */}
        <div>
          <label htmlFor="quote-date" className={labelBase}>
            Preferred Date
          </label>
          <input
            type="date"
            id="quote-date"
            name="preferredDate"
            className={cn(inputBase, "[color-scheme:light]")}
          />
        </div>

        {/* Row 3: Describe the Issue */}
        <div>
          <label htmlFor="quote-issue" className={labelBase}>
            Describe the Issue
          </label>
          <textarea
            id="quote-issue"
            name="message"
            rows={4}
            placeholder="Tell us what's going on..."
            className={cn(inputBase, "resize-none")}
          />
        </div>

        {/* Row 4: Address */}
        <div>
          <label htmlFor="quote-address" className={labelBase}>
            Your Address
          </label>
          <input
            type="text"
            id="quote-address"
            name="address"
            placeholder="123 Main St, Okeechobee, FL"
            autoComplete="street-address"
            className={inputBase}
          />
        </div>

        {/* Row 5: First Name + Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="quote-first-name" className={labelBase}>
              First Name
            </label>
            <input
              type="text"
              id="quote-first-name"
              name="firstName"
              required
              placeholder="John"
              autoComplete="given-name"
              className={inputBase}
            />
          </div>

          <div>
            <label htmlFor="quote-last-name" className={labelBase}>
              Last Name
            </label>
            <input
              type="text"
              id="quote-last-name"
              name="lastName"
              required
              placeholder="Smith"
              autoComplete="family-name"
              className={inputBase}
            />
          </div>
        </div>

        {/* Row 6: Phone + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="quote-phone" className={labelBase}>
              Phone
            </label>
            <input
              type="tel"
              id="quote-phone"
              name="phone"
              required
              placeholder="(555) 123-4567"
              autoComplete="tel"
              className={inputBase}
            />
          </div>

          <div>
            <label htmlFor="quote-email" className={labelBase}>
              Email
            </label>
            <input
              type="email"
              id="quote-email"
              name="email"
              placeholder="you@email.com"
              autoComplete="email"
              className={inputBase}
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className={cn(
            "w-full bg-teal-500 text-white font-display uppercase tracking-wider font-bold",
            "py-4 text-sm rounded-lg transition-all duration-300",
            "hover:bg-teal-600 active:bg-teal-700",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500",
            "disabled:opacity-60 disabled:pointer-events-none",
            "cursor-pointer shadow-md shadow-teal-500/20"
          )}
        >
          {status === "submitting" ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </span>
          ) : (
            "Send Quote Request"
          )}
        </button>
      </form>

      {/* Trust badges */}
      <div className="flex items-center justify-center gap-6 mt-6 pt-5 border-t border-slate-200">
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Shield className="w-3.5 h-3.5 text-teal-500" />
          <span>No Spam</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Clock className="w-3.5 h-3.5 text-teal-500" />
          <span>24hr Response</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <BadgeCheck className="w-3.5 h-3.5 text-teal-500" />
          <span>Free Quote</span>
        </div>
      </div>
    </div>
  );
}
