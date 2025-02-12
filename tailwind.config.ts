import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Scan app files
    './src/components/**/*.{js,ts,jsx,tsx}', // Scan components folder
  ],
  theme: {
    extend: {
      boxShadow:{
        custom: '6px 6px 8px rgba(0, 0, 0, 0.6), -3px -3px 5px rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      "light", "dark", "cupcake", "lemonade", // Add the lemonade theme here
    ],
    // Set default theme to "lemonade" to reinforce it
    darkTheme: "dark",
  },
};

export default config;
