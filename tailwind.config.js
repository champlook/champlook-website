/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens:{
         "ms":"318px",
         "ml":"400px",
      },
      colors: {
        whitesmoke: {
          100: "#f5f7f7",
          200: "#e4eaeb",
        },
        white: "#fff",
        crimson: {
          100: "#d81f1f",
          200: "rgba(216, 31, 31, 0.79)",
        },
        black: "#000",
        lightseagreen: "#0fa38d",
        darkgray: "#8e989c",
        snow: {
          100: "#fef5f4",
          200: "rgba(250, 244, 244, 0.59)",
        },
        darkslategray: {
          100: "#38474e",
          200: "#273339",
        },
        indianred: "#e14e4e",
        silver: "#b4bec0",
        dimgray: {
          100: "#6c6c6c",
          200: "#515151",
        },
        gray: {
          1: "#7b7b7b",
          2: "#202020",
          3: "#121212",
        },
        lightgreen: "#60dc74",
        lightskyblue: "#64b3df",
        red: "#ff3131",
        customcolor: "#475D65",
        customgray: "#003E54",
        customblack:"#444444",
      },
      fontFamily: {
        avnext: ["myfont"],
        avnextb: ["myfontB"],
        avnextr: ["myfontr"],
        tiehs: ["myfonttiehsemi"],
        tiehm: ["myfonttiehmed"],
        "nunito-sans": "'Nunito Sans'",
        inter: "Inter",
      },
      // fontFamily: {
      //   "avenir-next": "'Avenir Next'",
      //   montserrat: "Montserrat",
      //   "tiempos-headline": "'Tiempos Headline'",
      //   inter: "Inter",
      // },
      borderRadius: {
        lg: "18px",
        xl: "20px",
      },
      fontSize: {
        "5xl": "24px",
        lg: "18px",
        xs: "12px",
        ss:"10px",
        xxs:"8px",
        sm: "14px",
        "22xl": "41px",
        base: "16px",
        "3xl": "22px",
        "13xl": "32px",
        "9xl": "28px",
      },
    },
    corePlugins: {
      preflight: false,
    },
  },
  plugins: [],
};
