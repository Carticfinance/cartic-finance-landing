module.exports = {
    mode: 'jit',
    purge: [
        './*.html',
    ],
    darkMode: false,
    // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'brand-dark': '#084C61',
                'brand-light': '#07C8F9'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}