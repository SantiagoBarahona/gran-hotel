import typography from "@tailwindcss/typography"

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'javascript': '#f7df1e',
				'javascript-dark': '#998c06',
				'light-gray': '#7F7F7F',
				'red-granhotel': 'rgb(170, 0, 0)'
			},

			padding:{
				'section': '4rem',
				'section-mobile': '2rem',
				'section-vertical': '1rem',
				'section-vertical-mobile': '0.5rem',
			}
		},
	},
	plugins: [typography()],
}
