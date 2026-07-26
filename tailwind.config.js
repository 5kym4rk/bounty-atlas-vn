/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: 'rgb(var(--ba-surface) / <alpha-value>)',
          raised: 'rgb(var(--ba-surface-raised) / <alpha-value>)',
          sunken: 'rgb(var(--ba-surface-sunken) / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'rgb(var(--ba-ink) / <alpha-value>)',
          muted: 'rgb(var(--ba-ink-muted) / <alpha-value>)',
          faint: 'rgb(var(--ba-ink-faint) / <alpha-value>)',
        },
        line: 'rgb(var(--ba-line) / <alpha-value>)',
        brand: {
          DEFAULT: 'rgb(var(--ba-brand) / <alpha-value>)',
          soft: 'rgb(var(--ba-brand-soft) / <alpha-value>)',
        },
        danger: 'rgb(var(--ba-danger) / <alpha-value>)',
        warn: 'rgb(var(--ba-warn) / <alpha-value>)',
        ok: 'rgb(var(--ba-ok) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
};
