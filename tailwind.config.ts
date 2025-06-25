import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: { DEFAULT: '#1CC6B6' }, // Teal from Figma
                secondary: { DEFAULT: '#F9F6F1' }, // Cream background
                accent: { DEFAULT: '#F9D649' }, // Yellow accent
                dark: { DEFAULT: '#23272A' }, // Footer dark
                light: { DEFAULT: '#FFFFFF' },
                // Add more as needed
            },
            fontFamily: {
                sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'], // Placeholder, update to match Figma
                heading: ['Montserrat', 'Arial', 'Helvetica', 'sans-serif'], // Placeholder
            },
        },
    },
    plugins: [],
};
export default config; 