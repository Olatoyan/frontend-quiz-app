/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#A729F5",
        "dark-navy": "#313E51",
        navy: "#3B4D66",
        "grey-navy": "#626C7F",
        "light-bluish": "#626C7F",
        "light-grey": "#F4F6FA",
        green: "#26D782",
        red: "#EE5454",
      },
      fontFamily: {
        rubik: "Rubik, sans-serif",
      },
      boxShadow: {
        sm: "0px 16px 40px 0px rgba(143, 160, 193, 0.14)",
      },
      height: {
        screen: "100dvh",
      },
      screens: {
        laptop: {
          max: "75em",
        },
        desktop: {
          max: "64em",
        },
        tablet: {
          max: "43.75em",
        },
        mobile: {
          max: "37.5em",
        },
      },
    },
  },
  plugins: [],
};
