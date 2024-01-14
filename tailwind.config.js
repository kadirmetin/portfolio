/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      jakarta: ["Jakarta", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      poppinsEB: ["PoppinsEB", "sans-serif"],
      poppinsL: ["PoppinsL", "sans-serif"],
      poppinsSB: ["PoppinsSB", "sans-serif"],
      poppinsB: ["PoppinsB", "sans-serif"],
    },
  },
  plugins: [],
};
