"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

/**
 * Inline script injected into <head> to prevent flash of wrong theme.
 * Runs before React hydrates — reads localStorage and applies the class.
 */
const THEME_INIT_SCRIPT = `
(function(){
  try {
    var t = localStorage.getItem("khs-theme");
    if (t === "light") document.documentElement.classList.add("light");
  } catch(e){}
})();
`;

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  // Read persisted theme on mount
  useEffect(() => {
    const stored = localStorage.getItem("khs-theme") as Theme | null;
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    }
    setMounted(true);
  }, []);

  // Sync class on <html> whenever theme changes (after mount)
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
    localStorage.setItem("khs-theme", theme);
  }, [theme, mounted]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      {/* Inline script to prevent FOUC */}
      <script
        dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        suppressHydrationWarning
      />
      {children}
    </ThemeContext>
  );
}
