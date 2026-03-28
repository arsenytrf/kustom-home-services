export interface Review {
  name: string;
  rating: number;
  text: string;
  date?: string;
  location?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  placeholder?: string;
  required?: boolean;
  options?: string[];
}
