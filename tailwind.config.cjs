/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: 'none',
                        color: 'inherit',
                        a: {
                            color: 'inherit',
                            textDecoration: 'none',
                            fontWeight: '500',
                        },
                        'h1, h2, h3, h4': {
                            color: 'inherit',
                            fontWeight: '700',
                        },
                    },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};