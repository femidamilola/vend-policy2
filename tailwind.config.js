/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sign1: "rgba(213, 191, 172, 0.21);",
        major: "#FF7C03",
        input1: " rgba(255, 124, 3, 0.56)",
        confirmlabel: " rgba(29, 92, 105, 0.44);",
        table1: "rgba(255, 188, 126, 0.13)",
        common: "#77869B",
        medical: "rgba(255, 78, 78, 0.2)",
        motor: "background: rgba(255, 183, 3, 0.2)",
        travel: "rgba(62, 150, 252, 0.2)",
      },
    },
  },
  plugins: [],
};
