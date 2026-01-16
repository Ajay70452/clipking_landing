import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C8FF4D',
          hover: '#D5FF6A',
          pressed: '#B8F443',
        },
        accent: '#A4F35C',
        dark: {
          bg: '#0F1115',
          surface1: '#16181D',
          surface2: '#1C1F26',
          surface3: '#23262E',
        },
        text: {
          primary: '#F2F2F2',
          secondary: '#B5B8C2',
          muted: '#7A7F89',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
