/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "c-dark-blue-elements": "#2b3945",
        "c-dark-blue-bg": "#202c37",
        "c-very-dark-blue-text": "#111517",
        "c-dark-gray-input": "#858585",
        "c-very-light-gray-bg": "#fafafa",
        "c-white": "#ffffff",
      },
      fontFamily: {
        "nunito": ["Nunito Sans", "sans-serif"]
      },
      boxShadow: {
        'header': '0 16px 10px -15px rgba(0, 0, 0, 0.1)',
        'center': '0 0px 10px 0px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  darkMode: "class",
  plugins: [],
};
