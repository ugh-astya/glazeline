/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            sans: ["louis", "sans-serif", "ui-sans-serif", "system-ui"],
            hero: ["andine", "serif"],
            vogue: ["vogue", "serif"],
        },
        extend: {},
    },
    plugins: [],
};
