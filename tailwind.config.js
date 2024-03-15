/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primaryColor: "#ef4444",
        secondaryColor: "#0f172a",
        thirdColor: "#64748b",
        forthColor: "#94a3b8",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
