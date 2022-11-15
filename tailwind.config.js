/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Manrope", "sans-serif"],
      },
      textColor: (theme) => ({
        ...theme("colors"),

        primary: "hsl(217, 19%, 35%)",

        secondary: "hsl(214, 17%, 51%)",

        terceary: "hsl(212, 23%, 69%)",

        cuarto: "hsl(210, 46%, 95%)",

        quinto: "rgba(20,21,25,255)",
      }),
      backgroundColor: (theme) => ({
        ...theme("colors"),

        primary: "hsl(217, 19%, 35%)",

        secondary: "hsl(214, 17%, 51%)",

        terceary: "hsl(212, 23%, 69%)",

        cuarto: "hsl(210, 46%, 95%)",

        quinto: "rgba(20,21,25,255)",
      }),
    },
  },
  plugins: [],
};
