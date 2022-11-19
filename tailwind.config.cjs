/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                cafranGray: {
                    dark: "#4C4950",
                    semiDark: "#6a676d",
                    medium: "#88868a",
                    semilight: "#c3c2c5",
                    light: "#e1e1e2",
                },
                cafranMain: {
                    main: "#0d735a",
                    main2: "#63B99D",
                    secondary: "#FF0000",
                },
            },
            fontFamily: {
                primary: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
