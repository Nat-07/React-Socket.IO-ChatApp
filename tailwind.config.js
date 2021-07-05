// tailwind.config.js
module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                // custom colors
                darkModeMain: "#15294D",
                darkModeHeadFoot: "#355069",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
