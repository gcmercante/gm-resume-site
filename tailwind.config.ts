import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ['0.875rem', '1.6rem'],
      sm: ['1rem', '1.6rem'],
      base: ['1.25rem', '1.6rem'],
      lg: ['1.5rem', '1.6rem'],
      xl: ['2rem', '1.6rem'],
      hero: ['5rem', '1.6rem'],
    },
    colors: {
      yellow: '#FFA913',
      'yellow-light': '#FFBA1F',
      bg: '#121214',
      card: '#202024',
      divider: '#323238',
      placeholder: '#7C7C8A',
      subtext: '#8D8D99',
      text: '#C4C4CC',
      title: '#E1E1E6',
      white: '#FFFFFF',
      red: '#F75A68',
      transparent: 'transparent',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
