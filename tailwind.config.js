/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#111827",
        bodyTextColor: "#4B5563",
        vibrantColor: "#0EA5E9",
        borderColor: "#E5E7EB",
        grayBackgroundColor: "#F8F8F8",
        defaultBackgroundColor: "#ffffff",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/public/images/hero-bg.png')",
      },
    },
  },
  plugins: [],
};
