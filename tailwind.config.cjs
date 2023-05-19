/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            sans: [
                "louis",
                "'IBM Plex Sans'",
                "sans-serif",
                "ui-sans-serif",
                "system-ui",
            ],
            hero: ["andine", "serif"],
            vogue: ["vogue", "serif"],
            roboto: ["Roboto", "sans-serif"],
            inter: ["Inter", "sans-serif"],
        },
        extend: {},
    },
    plugins: [],
};
