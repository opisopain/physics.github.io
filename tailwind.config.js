/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": '#6c63ff',
        "secondary": "#1f2641",
        "third": "#2e3267",
        "forth": "#424890",
        "success": "#00bf8e",
        "warning": "#f7c94b",
        "danger" : "#f75842",
        "danger-variant": "rgba(247, 88, 66, 0.4)",
        "white": "#fff",
        "light": "rgba(255,255,255, 0.7)",
        "black" : "#000",
      }
    },
  },
  plugins: [],
}