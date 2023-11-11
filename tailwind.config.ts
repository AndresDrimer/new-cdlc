import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "gris": "#b3b1b2",
        "rojo": "#e40613",
        "celeste": "#a3cdec"
      },
      keyframes: {
        "slide-in-from-left": {
          "0%":{transform: "translateX(-100%)"},
          "100%": {transform: "translateX(0)"},
        },
      },
      animation: {
        "slide-in-from-left": "slide-in-from-left 0.3s ease-in",
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class"
    }),
    require('tailwind-scrollbar-hide'),
  ],
}
export default config