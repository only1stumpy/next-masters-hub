/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "neutral-50":"#EDEEF0",
        "neutral-300":"#848D9B",
        "neutral-500":"#475569",
        "neutral-700":"#323C4B",
        'neutral-800':"#272F3A",
        "neutral-900":"#1E242C",
        "main-100":"#414D60",
        "main-200":"#002B6B",
        "main-300":"#6C7787",
        "button-100":"#0066FF",
        "button-200":"#3385FF",
        "border-100":"#EDEDED",
        "border-blue-100":"#8AB9FF",
        "bg-100":"#FAFAFA",
      },
      fontFamily: {
        manrope: ['var(--font-manrope)'],
        general: ['var(--font-general-sans)'],
        fortus: ['var(--font-fortusnova)']
      },
      borderRadius:{
        'full':"100px"
      },
      animation: {
        fadeInOut: "fadeInOut 4s ease-in-out forwards",
      },
      keyframes: {
        fadeInOut: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "20%": { opacity: 1, transform: "translateY(0px)" },
          "80%": { opacity: 1, transform: "translateY(0px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        }
      },
      screens:{
        'tel':'320px'
      }
    },
  },
  plugins: [],
};
