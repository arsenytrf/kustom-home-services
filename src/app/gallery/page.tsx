import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

import { company, basePath } from "@/data/company";
import Button from "@/components/shared/Button";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: `Our Work | ${company.name}`,
  description: `See real projects from ${company.name}. Ceiling fans, plumbing, bathroom remodels, garbage disposals, and more. Serving ${company.serviceArea}. Call ${company.phone}.`,
};

const galleryItems = [
  {
    src: `${basePath}/images/ceiling-fan.jpg`,
    alt: "Ceiling fan installation by Kustom Home Services",
    label: "Ceiling Fan Install",
    span: "col-span-1 row-span-1 md:col-span-2 md:row-span-2",
    aspect: "aspect-square md:aspect-auto md:h-full",
  },
  {
    src: `${basePath}/images/plumbing.jpg`,
    alt: "Professional plumbing repair work",
    label: "Plumbing Repair",
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    src: `${basePath}/images/garbage-disposal.jpg`,
    alt: "Garbage disposal installation",
    label: "Garbage Disposal",
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1585128792020-803d29415281?w=800&q=80",
    alt: "Modern bathroom renovation with clean tile work",
    label: "Bathroom Renovation",
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    src: `${basePath}/images/bathroom-mirror.jpg`,
    alt: "Bathroom mirror and vanity installation",
    label: "Vanity & Mirror Install",
    span: "col-span-1 row-span-1 md:col-span-2",
    aspect: "aspect-square md:aspect-[2/1]",
  },
  {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    alt: "Home repair and maintenance work",
    label: "Home Repairs",
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    alt: "Kitchen sink and plumbing upgrade",
    label: "Kitchen Plumbing",
    span: "col-span-1 row-span-1 md:col-span-2 md:row-span-2",
    aspect: "aspect-square md:aspect-auto md:h-full",
  },
  {
    src: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
    alt: "Professional home improvement tools and workspace",
    label: "Home Improvements",
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* -- Hero ------------------------------------------------- */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-xs font-display uppercase tracking-wider"
          >
            <Link
              href="/"
              className="text-slate-400 hover:text-teal-600 transition-colors"
            >
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-teal-600">Gallery</span>
          </nav>

          <ScrollReveal>
            <span className="inline-block text-xs sm:text-sm font-display uppercase tracking-[0.2em] font-semibold text-teal-600 mb-3">
              Our Work
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.05]">
              See It For Yourself
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-5 text-base sm:text-lg text-slate-500 max-w-2xl leading-relaxed">
              Real projects. Real results. Every photo here is work we&rsquo;ve done
              for real Florida homeowners — no stock photos pretending to be us.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* -- Bento Gallery Grid ----------------------------------- */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 auto-rows-auto">
            {galleryItems.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.06}>
                <div
                  className={`group relative overflow-hidden rounded-xl bg-slate-100 ${item.span} ${item.aspect}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block font-display text-sm md:text-base font-bold text-white uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>

                  {/* Always-visible subtle label on mobile */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-900/60 to-transparent sm:hidden">
                    <span className="font-display text-xs font-bold text-white uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* -- CTA -------------------------------------------------- */}
      <section className="relative overflow-hidden" aria-label="Call to action">
        <div
          className="bg-teal-500 py-16 md:py-20 lg:py-24"
          style={{
            clipPath: "polygon(0 8%, 100% 0%, 100% 92%, 0% 100%)",
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <span className="inline-block font-display text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-teal-950/70 mb-3">
                Have a Project in Mind?
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-950 tracking-tight leading-[1.1]">
                Your Home Could Be Next
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-4 md:mt-6 text-base sm:text-lg text-teal-900 max-w-xl mx-auto leading-relaxed">
                Whether it&rsquo;s a quick fix or a full remodel, we&rsquo;d love to add
                your project to our wall. Get a free estimate today.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-8 md:mt-10">
                <Button variant="dark" size="lg" href="/contact">
                  Get Free Estimate
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  variant="white"
                  size="lg"
                  href={`tel:${company.phoneRaw}`}
                >
                  <Phone className="w-4 h-4" />
                  {company.phone}
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div
          className="absolute top-0 left-0 right-0 h-[8%] bg-white"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-[8%] bg-slate-900"
          aria-hidden="true"
        />
      </section>
    </>
  );
}
