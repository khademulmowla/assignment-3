
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                'discuss-project': "url('/assets/bg.jpg')",
            },
        },
    },
    plugins: [],
}