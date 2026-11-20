/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            maxWidth: {
                '8xl': '88rem',
                '9xl': '96rem',
                'site': '1540px',
            },
            colors: {
                primary: {
                    50: '#f0f3f9',
                    100: '#e1e7f3',
                    200: '#c5d0e7',
                    300: '#9cb1d7',
                    400: '#6d8dc3',
                    500: '#4a6eb0',
                    600: '#385798',
                    700: '#2d447d',
                    800: '#233368', // Exact Logo Royal Blue
                    900: '#1a2752',
                    950: '#121b38', // Exact Logo Dark Navy Base
                },
                charcoal: {
                    50: '#f7f6f5',
                    100: '#eeecea',
                    200: '#dcd7d3',
                    300: '#c3bbb5',
                    400: '#9a8f87',
                    500: '#756b63',
                    600: '#5a524b',
                    700: '#4a433d',
                    800: '#3b3835', // Exact Logo Warm Charcoal Tone
                    900: '#2b2826',
                },
                gold: {
                    50: '#fbf9f4',
                    100: '#f5f0e4',
                    200: '#ebe0c7',
                    300: '#decaa1',
                    400: '#ceb077',
                    500: '#c5a880',
                    600: '#b08e56',
                    700: '#917142',
                    800: '#775b39',
                    900: '#644c33',
                },
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'Georgia', 'serif'],
                sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
                mont: ['"Mont"', '"Montserrat"', 'system-ui', '-apple-system', 'sans-serif'],
            },
            // Completely remove shadow everywhere per user request
            boxShadow: {
                'none': 'none',
                'sm': 'none',
                'DEFAULT': 'none',
                'md': 'none',
                'lg': 'none',
                'xl': 'none',
                '2xl': 'none',
                'inner': 'none',
                'luxury': 'none',
                'luxury-gold': 'none',
            },
            // Standardized font sizes: descriptions capped at clean 1rem (16px)
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1.25rem' }],
                'sm': ['0.875rem', { lineHeight: '1.5rem' }],
                'base': ['1rem', { lineHeight: '1.65rem' }],
                'lg': ['1.125rem', { lineHeight: '1.75rem' }],
                'xl': ['1.25rem', { lineHeight: '1.85rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.75rem' }],
                '5xl': ['3rem', { lineHeight: '3.5rem' }],
            }
        },
    },
    plugins: [],
}
