import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '330px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        twitterDark: '#15202b',
        twitterTextDarkmode: '#f1f5f8'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
],
  darkMode: 'class'
}
export default config
