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
                            color: '#2563eb',
                            textDecoration: 'none',
                            fontWeight: '500',
                            '&:hover': {
                                color: '#1d4ed8',
                            },
                        },
                        'h1, h2, h3, h4': {
                            color: '#18181b',
                            fontWeight: '700',
                            marginTop: '1.5em',
                            marginBottom: '0.5em',
                        },
                        hr: {
                            borderColor: '#e4e4e7',
                            marginTop: '2em',
                            marginBottom: '2em',
                        },
                        ul: {
                            listStyleType: 'disc',
                            paddingLeft: '1.5em',
                        },
                        'ul > li': {
                            paddingLeft: '0.5em',
                            marginTop: '0.5em',
                            marginBottom: '0.5em',
                        },
                        img: {
                            borderRadius: '0.75rem',
                            marginTop: '2em',
                            marginBottom: '2em',
                        },
                        code: {
                            backgroundColor: '#f4f4f5',
                            borderRadius: '0.25rem',
                            padding: '0.2em 0.4em',
                            fontSize: '0.875em',
                        },
                        'code::before': {
                            content: 'none',
                        },
                        'code::after': {
                            content: 'none',
                        },
                    },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};