"use client";

import { useEffect, useSyncExternalStore } from "react";
import { MaterialIcon } from "@/shared/ui/material-icon";

const STORAGE_KEY = "vettingo-theme";
const THEME_CHANGE_EVENT = "vettingo-theme-change";
type ThemePreference = "light" | "dark";

function getStoredTheme(): ThemePreference {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light";
}

function subscribeToThemeChanges(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
  };
}

function saveTheme(theme: ThemePreference) {
  window.localStorage.setItem(STORAGE_KEY, theme);
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeToThemeChanges, getStoredTheme, () => "light");
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("theme-dark", isDark);
  }, [isDark]);

  return (
    <button
      aria-label={isDark ? "Aydınlık moda geç" : "Karanlık moda geç"}
      className="fixed bottom-6 right-6 z-[80] flex h-14 w-14 items-center justify-center rounded-full border border-[#c5c6cd] bg-white text-[#091426] shadow-[0_14px_35px_rgba(9,20,38,0.18)] transition-transform hover:scale-105"
      onClick={() => saveTheme(isDark ? "light" : "dark")}
      type="button"
    >
      <MaterialIcon className="text-[24px]">{isDark ? "light_mode" : "dark_mode"}</MaterialIcon>
    </button>
  );
}