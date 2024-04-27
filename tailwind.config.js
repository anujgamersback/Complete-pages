/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        "semantic-colors-red": "#ff523b",
        "grey-colors-dark-mode-700": "#1a1d1f",
        "grey-colors-dark-mode-white": "#fff",
        "grey-colors-dark-mode-500": "#2b2e30",
        black: "#000",

        gray: {
          100: "#fafbfc",
          200: "#7d8185",
          300: "rgba(37, 37, 37, 0.3)",
        },
        "grey-colors-dark-mode-600": "#212326",
        "grey-colors-dark-mode-100": "#b5b9bd",
        "primary-500": "#2e9bfa",
        "semantic-colors-green": "#95d97d",
        blueviolet: {
          100: "#9554ff",
          200: "#3e51ff",
        },
      }, // Added comma here
      spacing: {},
      fontFamily: {
        "headings-h2": "Inter",
      },
      borderRadius: {
        lg: "18px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
