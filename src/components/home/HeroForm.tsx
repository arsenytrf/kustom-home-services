"use client";

import { useState, useRef, type FormEvent } from "react";
import { cn } from "@/lib/cn";
import { company } from "@/data/company";
import { Shield, Clock, BadgeCheck } from "lucide-react";

const serviceOptions = [
  "General Repairs",
  "Plumbing",
  "Ceiling Fan & Lighting",
  "Insulation",
  "Bathroom Remodel",
  "Home Improvements",
  "Other",
];

const propertyOptions = ["House", "Apartment", "Condo", "Commercial", "Other"];

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function HeroForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);

    // Check honeypot
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

  if (status === "success") {
    return (
      <div className="relative glass-card p-8 md:p-10" id="estimate-form">
        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-teal-500" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-teal-500" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-teal-500" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-teal-500" />

        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-4">
            <BadgeCheck className="w-8 h-8 text-teal-400" />
          </div>
          <h3 className="font-display text-2xl font-bold text-white mb-2">
            Request Received
          </h3>
          <p className="text-slate-400 max-w-sm mx-auto">
            We'll get back to you within 24 hours with an honest quote. No
            surprises, no hidden fees.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 text-teal-400 hover:text-teal-300 font-display text-sm uppercase tracking-wider transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative glass-card p-6 md:p-8 lg:p-10" id="estimate-form">
      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-teal-500" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-teal-500" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-teal-500" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-teal-500" />

      <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-1">
        Get Your Free Estimate
      </h3>
      <p className="text-slate-400 text-sm mb-6">
        Tell us what you need — we'll get back to you fast.
      </p>

      {status === "error" && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          Something went wrong. Please try again or call us at{" "}
          <a href={`tel:${company.phoneRaw}`} className="underline">
            {company.phone}
          </a>
          .
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-4"
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

        {/* Service + Property Type row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="service"
              className="block text-xs font-display uppercase tracking-wider text-slate-400 mb-1.5"
            >
              Service Needed
            </label>
            <select
              id="service"
              name="service"
              required
              className={cn(
                "w-full bg-slate-900/80 border border-slate-700 text-white px-4 py-3 text-sm",
                "focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50",
                "transition-colors appearance-none cursor-pointer"
              )}
              defaultValue=""
            >
              <option value="" disabled>
                Select a service
              </option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="property"
              className="block text-xs font-display uppercase tracking-wider text-slate-400 mb-1.5"
            >
              Property Type
            </label>
            <select
              id="property"
              name="property"
              required
              className={cn(
                "w-full bg-slate-900/80 border border-slate-700 text-white px-4 py-3 text-sm",
                "focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50",
                "transition-colors appearance-none cursor-pointer"
              )}
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

        {/* Preferred Date */}
        <div>
          <label
            htmlFor="preferred-date"
            className="block text-xs font-display uppercase tracking-wider text-slate-400 mb-1.5"
          >
            Preferred Date
          </label>
          <input
            type="date"
            id="preferred-date"
            name="preferredDate"
            className={cn(
              "w-full bg-slate-900/80 border border-slate-700 text-white px-4 py-3 text-sm",
              "min-h-[46px] [-webkit-appearance:none] [color-scheme:dark]",
              "focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50",
              "transition-colors"
            )}
          />
        </div>

        {/* Issue Description */}
        <div>
          <label
            htmlFor="issue"
            className="block text-xs font-display uppercase tracking-wider text-slate-400 mb-1.5"
          >
            Describe the Issue
          </label>
          <textarea
            id="issue"
            name="message"
            rows={3}
            placeholder="Tell us what's going on..."
            className={cn(
              "w-full bg-slate-900/80 border border-slate-700 text-white px-4 py-3 text-sm resize-none",
              "focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50",
              "transition-colors placeholder:text-slate-600"
            )}
          />
        </div>

        {/* Name + Phone + Email row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-display uppercase tracking-wider text-slate-400 mb-1.5"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="John Smith"
              autoComplete="name"
              className={cn(
                "w-full bg-slate-900/80 border border-slate-700 text-white px-4 py-3 text-sm",
                "focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50",
                "transition-colors placeholder:text-slate-600"
              )}
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-display uppercase tracking-wider text-slate-400 mb-1.5"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="(555) 123-4567"
              autoComplete="tel"
              className={cn(
                "w-full bg-slate-900/80 border border-slate-700 text-white px-4 py-3 text-sm",
                "focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50",
                "transition-colors placeholder:text-slate-600"
              )}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-display uppercase tracking-wider text-slate-400 mb-1.5"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@email.com"
              autoComplete="email"
              className={cn(
                "w-full bg-slate-900/80 border border-slate-700 text-white px-4 py-3 text-sm",
                "focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50",
                "transition-colors placeholder:text-slate-600"
              )}
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className={cn(
            "w-full bg-teal-500 text-slate-950 font-display uppercase tracking-wider font-bold",
            "py-4 text-sm transition-all duration-300",
            "hover:bg-teal-400 active:bg-teal-600",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500",
            "disabled:opacity-60 disabled:pointer-events-none"
          )}
        >
          {status === "submitting" ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
              Sending...
            </span>
          ) : (
            "Get Free Estimate"
          )}
        </button>
      </form>

      {/* Trust badges */}
      <div className="flex items-center justify-center gap-6 mt-6 pt-5 border-t border-slate-800">
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <Shield className="w-3.5 h-3.5 text-teal-600" />
          <span>No Spam</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <Clock className="w-3.5 h-3.5 text-teal-600" />
          <span>24hr Response</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <BadgeCheck className="w-3.5 h-3.5 text-teal-600" />
          <span>Free Quote</span>
        </div>
      </div>
    </div>
  );
}
