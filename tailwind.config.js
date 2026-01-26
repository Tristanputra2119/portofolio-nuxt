/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
    ],
    theme: {
        extend: {
            colors: {
                // Warna utama dari desain
                primary: {
                    DEFAULT: '#1a1a1a',
                    50: '#f9f9f9',
                    100: '#f0f0f0',
                    200: '#e4e4e4',
                    300: '#c9c9c9',
                    400: '#8f8f8f',
                    500: '#6b6b6b',
                    600: '#4a4a4a',
                    700: '#3a3a3a',
                    800: '#2a2a2a',
                    900: '#1a1a1a',
                },
                // Warna beige/cream dari desain
                beige: {
                    DEFAULT: '#f5f0e8',
                    50: '#faf8f5',
                    100: '#f5f0e8',
                    200: '#e8dfd2',
                    300: '#d9cab7',
                    400: '#c4ae93',
                },
                olive: {
                    DEFAULT: '#3d4a3a',
                    100: '#dde1dc',
                    500: '#3d4a3a',
                    600: '#2d3a2a',
                },
                // Accent color (purple) for highlights
                accent: {
                    DEFAULT: '#7c3aed',
                    400: '#a78bfa',
                    500: '#7c3aed',
                    600: '#6d28d9',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                heading: ['Outfit', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            },
            boxShadow: {
                'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
                'card': '0 8px 40px rgba(0, 0, 0, 0.08)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
}
