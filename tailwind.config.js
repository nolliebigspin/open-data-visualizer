/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "960px",
        lg: "1440px",
      },
      colors: {
        text: "#152A1E",
        background: "#EFEFEF",
        primary: "#5EE298",
        secondary: "#ADFFC4",
        accent: "#2A6243",
        lightGray: "#BABABA",
        darkGray: "#888888",
        markerRed: "#FF3C3C",
      },
      fontSize: {
        sm: "0.75rem",
        base: "1rem",
        h5: "1.5rem",
        h3: "2rem",
        h1: "3rem",
      },
      fontWeight: {
        regular: "400",
        bold: "700",
      },
      maxWidth: {
        pageMaxWidth: "1756px",
      },
    },
  },
  plugins: [],
};
