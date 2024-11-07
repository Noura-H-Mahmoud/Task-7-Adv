import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        podcast: "var(--font-podcast)",
        openSans: "var(--font-open-sans)"
      },
      spacing: {
        '250': '250px',
        '50': '50px',
        '33': '33px',
        '30': '30px',
        '25': '25px',
        '120': '120px',
        '123': '123px',
        '60': '60px',
        '18': '18px',
        '47': '47px',
        '1420': '1420px',
        '1920': '1920px'
      },
      colors: {
        'mainColor': '#FA8B02',
        'bgTransparent': '#FFFFFF33',
        'blackColor': '#333333',
        'garyColor': '#EFEFEF',
        'grayCustom': 'rgba(51, 51, 51, 0.5)',
      },
      borderRadius: {
        '50raduis': '50px',
        '12raduis': '12px',
        '24raduis': '24px'
      },
      lineHeight: {
        '26': '26px',
        'line30': '30px',
        'line27.24': '27.24px',
        'line43.58': '43.58px'
      },
      screens: {
        'desctopHuge': '1750px',
        '1410': '1410px',
        '600': '600px',
        '1200': '1200px'
      },
      fontSize: {
        '32':'32px'
      }
    },
  },
  plugins: [],
};
export default config;
