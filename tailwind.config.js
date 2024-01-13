/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2DBA4E",

          secondary: "#00b3d2",

          accent: "#0049ff",

          neutral: "#24292E",

          "base-100": "#0d1117",

          info: "#00deff",

          success: "#00a95b",

          warning: "#ff8400",

          error: "#c70035",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
