/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            sans: [
                "'IBM Plex Sans'",
                "sans-serif",
                "ui-sans-serif",
                "system-ui",
            ],
            hero: ["Vidaloka", "serif"],
        },
        extend: {},
    },
    plugins: [],
};
