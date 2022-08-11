/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            sans: [
                "Roboto",
                "'IBM Plex Sans'",
                "sans-serif",
                "ui-sans-serif",
                "system-ui",
            ],
            karla: ["Karla", "sans-serif", "ui-sans-serif", "system-ui"],
            ibm: [
                "'IBM Plex Sans'",
                "sans-serif",
                "ui-sans-serif",
                "system-ui",
            ],
            logo: ["'Fredoka One'", "cursive"],
            hero: ["Vidaloka", "serif"],
            heads: ["'IBM Plex Sans'", "sans-serif"],
            boot: ["'Material Icons'"],
        },
        extend: {
            colors: {
                transparent: "transparent",
                darker: "#05080b",
            },
            screens: {
                midmd: "818px",
            },
            backgroundImage: {
                "hero-pattern": "url('/img/hero-pattern.svg')",
                "hero-texture": "url('./src/assets/back3.svg')",
                "hero-texture-dark": "url('./src/assets/back4.svg')",
            },
        },
    },
    plugins: [],
};
