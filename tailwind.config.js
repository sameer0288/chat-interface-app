module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 600: "#7f8781", 800: "#3e3e3e", 900: "#181818" },
        white: { A700_99: "#ffffff99", A700_a2: "#ffffffa2", A700: "#ffffff" },
        black: { 900: "#050505" },
        deep_orange: { 200: "#f3ae9f" },
        blue_gray: { 900: "#2e2e2e" },
      },
      fontFamily: { poppins: "Poppins", opensans: "Open Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
