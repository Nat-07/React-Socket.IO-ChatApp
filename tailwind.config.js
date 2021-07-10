// tailwind.config.js
module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            // custom colors
            colors: {
                darkModeMain: "#15294D",
                darkModeHeadFoot: "#355069",
                divideLine: "#27435c",
            },
            // custom z values
            zIndex: {
                // header in chat
                500: "500",
                // theme toggle
                999: "999",
            },
            // Animation for dark/light icon
            animation: {
                customAnimation: "spin 1s",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
