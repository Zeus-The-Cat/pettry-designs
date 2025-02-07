import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // colors: {
      //   // Light Mode (Default)
      //   background: '#F8E8FF', // Soft neon lavender
      //   foreground: '#2B0F54', // Deep purple
      //   primary: '#FF007F', // Hot pink
      //   secondary: '#FFDD44', // Neon yellow-gold
      //   accent: '#00E5FF', // Bright cyan
      //   highlight: '#D400FF', // Electric purple

      //   // Dark Mode
      //   dark: {
      //     background: "#0D0D0D", // Near black
      //     foreground: "#FF007F", // Vibrant pink
      //     primary: "#5B42F3", // Electric purple
      //     secondary: "#FFD700", // Gold
      //     accent: "#00E5FF", // Bright cyan
      //     highlight: "#FF00FF", // Hot pink
      //   },
      // },
      // fontFamily: {
      //   synth: ['"Orbitron"', "sans-serif"],
      // },
      // boxShadow: {
      //   neon: "0 0 10px #E94560, 0 0 40px #FF00FF, 0 0 80px #F8E71C",
      // },
      colors: {
        // Light Mode (Default)
        background: '#ECE7E2', // Neutral 
        foreground: '#E7DED3', // Neutral 2 
        primary: '#D9C5B4', // Primary 
        secondary: '#BFA27E', 
        accent: '#735448', 
        txt: '#260101',
        // Dark Mode
        dark: {
          background: "#260101", 
          foreground: "#735448", 
          primary: "#BFA27E", 
          secondary: "#D9C5B4", 
          accent: "#E7DED3", 
          txt:"#ECE7E2"
        },
      },
      fontFamily: {
        synth: ['"Orbitron"', "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 10px #E94560, 0 0 40px #FF00FF, 0 0 80px #F8E71C",
      },
    },
  },
  plugins: [
    require("@headlessui/tailwindcss")({ prefix: "ui" }),
  ],
} satisfies Config;
