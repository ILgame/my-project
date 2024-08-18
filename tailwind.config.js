/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            // 'blue': '#1fb6ff',
            // 'purple': '#7e5bef',
            // 'pink': '#ff49db',
            // 'orange': '#ff7849',
            // 'green': '#13ce66',
            // 'yellow': '#ffc82c',
            'gray-dark': '#273444',
            // 'gray': '#8492a6',
            'gray-light': '#d3dce6',
            'cyan-500': '#06b6d4',
            'blue-500': '#3b82f6',
            'white': '#ffffff',
        },
        fontFamily: {
            sans: ['Roboto Mono', 'sans-serif', 'primeicons'],
            // serif: ['Merriweather', 'serif'],

            // scg,Roboto Mono,sans-serif,primeicons!important
        },
        extend: {
            spacing: {
                // '8xl': '96rem',
                // '9xl': '128rem',
            },
            borderRadius: {
                // '4xl': '2rem',
            },
            backgroundImage: {
                'hero-pattern': "url('/img/hero-pattern.svg')",
                'footer-texture': "url('/img/footer-texture.png')",
            }
        },
    },
    plugins: [],

}

