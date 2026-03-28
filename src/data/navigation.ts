import type { NavLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const ctaLink: NavLink = {
  label: "Get Free Estimate",
  href: "/contact",
};
