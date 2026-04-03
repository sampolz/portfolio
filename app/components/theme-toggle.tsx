'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  root.classList.toggle('light', theme === 'light')
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light'
  )

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    const initialTheme: Theme =
      storedTheme === 'dark' || storedTheme === 'light'
        ? (storedTheme as Theme)
        : systemPrefersDark
          ? 'dark'
          : 'light'

    setTheme(initialTheme)
    applyTheme(initialTheme)
  }, [])

  function toggleTheme() {
    // Read from the DOM to avoid stale state mismatches on first interaction.
    const currentTheme: Theme = document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light'
    const nextTheme: Theme = currentTheme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    localStorage.setItem('theme', nextTheme)
    applyTheme(nextTheme)
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}
