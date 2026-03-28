import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { navLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 relative">
      {/* Teal top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-display text-xl font-bold tracking-tight">
                <span className="text-teal-400">KUSTOM</span>{" "}
                <span className="text-white">HOME SERVICES</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              {company.description}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20">
              <div className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              <span className="text-xs text-teal-400 font-medium">
                Family-Owned Since {company.founded}
              </span>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                >
                  Free Estimate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${company.phoneRaw}`}
                  className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-teal-400 transition-colors"
                >
                  <Phone className="h-4 w-4 text-teal-500 shrink-0" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-teal-400 transition-colors"
                >
                  <Mail className="h-4 w-4 text-teal-500 shrink-0" />
                  {company.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-slate-400">
                  <MapPin className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                  {company.address}
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-slate-400">
                  <Clock className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <p>{company.hours.weekday}</p>
                    <p>{company.hours.weekend}</p>
                  </div>
                </div>
              </li>
            </ul>

            {/* Service area tags */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {company.cities.map((city) => (
                <span
                  key={city}
                  className="px-2 py-0.5 text-[11px] text-slate-500 bg-white/[0.03] border border-white/5 rounded"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. All rights
            reserved.
          </p>
          <p>
            Website by{" "}
            <a
              href="https://ePageUSA.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-400 transition-colors"
            >
              ePageUSA.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
