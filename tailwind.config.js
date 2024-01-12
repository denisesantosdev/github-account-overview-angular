/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  /* daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#b400ff",

          secondary: "#ff0000",

          accent: "#00ff44",

          neutral: "#1a1512",

          "base-100": "#1c3029",

          info: "#00b1f3",

          success: "#00a000",

          warning: "#f89a00",

          error: "#ff6f84",
        },
      },
    ],
  }, */
  plugins: [require("daisyui")],
};
