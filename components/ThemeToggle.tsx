"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const subscribe = () => () => {};

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // Theme is unknown during SSR; render a neutral placeholder until hydrated.
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors duration-200 hover:border-primary hover:text-foreground"
    >
      {mounted ? (isDark ? <Sun size={18} /> : <Moon size={18} />) : <span className="h-[18px] w-[18px]" />}
    </button>
  );
}
