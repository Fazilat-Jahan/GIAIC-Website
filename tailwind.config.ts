import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#044E83',
        bgcustomBlue: '#03396A',
        blue: '#065A91',
        royalblue: '#0A6DA4',
      },
    },
  },
  plugins: [],
} satisfies Config;
