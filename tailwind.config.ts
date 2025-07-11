import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        georgia: ['Georgia', 'serif'],
      },
    },
  },
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // adjust as needed
  ],
  plugins: [],
}

export default config;
