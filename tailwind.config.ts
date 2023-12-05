import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                primary: 'hsl(var(--color-primary) / <alpha-value>)'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            gridTemplateColumns: {
                'pet-categories': 'repeat(auto-fill, minmax(205px, 1fr))',
                pets: 'repeat(auto-fill, minmax(250px, 1fr))'
            }
        }
    },
    darkMode: 'class',
    plugins: [
        require('@tailwindcss/typography'),
        nextui({
            themes: {}
        })
    ]
};
export default config;
