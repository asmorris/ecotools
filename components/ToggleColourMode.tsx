'use client'

import { useDarkMode } from "@/hooks/useDarkMode";
import { TreePine, Waves } from "lucide-react";

export const ToggleColourMode = () => {
  const [darkMode, setDarkMode] = useDarkMode()

  if (darkMode) {
    return <button
      className="h-8 w-8 rounded-2xl flex items-center text-center bg-sky-800 justify-center transition-colors" onClick={() => setDarkMode(false)}><Waves className="w-6 h-6 text-sky-50" /></button>
  } else {
    return <button 
      className="h-8 w-8 rounded-2xl bg-emerald-800 transition-colors"
      onClick={() => setDarkMode(true)}>
        <TreePine className="ml-1 w-6 h-6 text-emerald-50" />
      </button>
  }
}

