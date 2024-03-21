/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        primaryHover:"var(--primary-hover)",
        secondaryHover:'var(--secondary-hover)',
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        background: "var(--background)",
        surface: "var(--surface)",
        fontColor : "var(--font-color)"
      },
    },
  },
  plugins: [],
};
