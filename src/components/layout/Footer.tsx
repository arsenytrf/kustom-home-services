import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { company, basePath } from "@/data/company";
import { services } from "@/data/services";
import { navLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative">
      {/* Teal top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pt-14 pb-8">
        {/* Row 1: Brand + Nav + Contact — all in one row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-10">
          {/* Brand */}
          <div className="md:max-w-xs">
            <Link href="/" className="inline-flex items-center gap-2 mb-3">
              <Image
                src={`${basePath}/images/logo.jpg`}
                alt="Kustom Home Services"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-display text-lg font-bold tracking-tight">
                <span className="text-teal-400">KUSTOM</span>{" "}
                <span className="text-white">HOME SERVICES</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              {company.description}
            </p>
          </div>

          {/* Nav + Services inline */}
          <div className="flex gap-12">
            <div>
              <h3 className="font-display text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                Pages
              </h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-teal-400 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                Services
              </h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href="/services"
                      className="text-sm text-slate-400 hover:text-teal-400 transition-colors duration-300"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2.5">
            <a
              href={`tel:${company.phoneRaw}`}
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-teal-400 transition-colors duration-300"
            >
              <Phone className="h-3.5 w-3.5 text-teal-500" />
              {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-teal-400 transition-colors duration-300"
            >
              <Mail className="h-3.5 w-3.5 text-teal-500" />
              {company.email}
            </a>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="h-3.5 w-3.5 text-teal-500" />
              {company.address}
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Clock className="h-3.5 w-3.5 text-teal-500" />
              {company.hours.weekday}
            </div>
          </div>
        </div>

        {/* Row 2: Service area tags */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {company.cities.map((city) => (
            <span
              key={city}
              className="px-2 py-0.5 text-[11px] text-slate-500 bg-white/[0.03] border border-white/5 rounded"
            >
              {city}
            </span>
          ))}
          <span className="px-2 py-0.5 text-[11px] text-teal-500 bg-teal-500/5 border border-teal-500/10 rounded">
            Family-Owned & Operated
          </span>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
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
              className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
            >
              ePageUSA.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
