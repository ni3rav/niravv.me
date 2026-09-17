"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeToggleProps {
  variant?: "icon" | "text";
  className?: string;
}

export function ThemeToggle({ variant = "icon", className }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const toggleTheme = () => {
    const next = (currentTheme ?? "dark") === "dark" ? "light" : "dark";
    setTheme(next);
  };

  if (variant === "text") {
    return (
      <button
        onClick={toggleTheme}
        className={
          className ||
          "inline-flex items-center text-xs sm:text-sm text-muted-foreground hover:text-foreground underline decoration-dashed underline-offset-4 decoration-base02 hover:decoration-foreground/30 transition-all cursor-pointer"
        }
        aria-label={`Switch to ${(currentTheme ?? "dark") === "dark" ? "light" : "dark"} mode`}
      >
        {(currentTheme ?? "dark") === "dark" ? "light" : "dark"}
      </button>
    );
  }

  if (!mounted) return <div className="w-4 h-4" />;

  return (
    <button
      onClick={toggleTheme}
      className={
        className ||
        "text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      }
      aria-label={`Switch to ${(currentTheme ?? "dark") === "dark" ? "light" : "dark"} mode`}
    >
      {currentTheme === "dark" ? "light" : "dark"}
    </button>
  );
}
