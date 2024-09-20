/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin'

export default {
	content: ['./src/**/*.{astro,html}'],
	theme: {
		fontFamily: {
			sans: ['Nunito', 'sans-serif'],
			serif: ['Playfair Display', 'serif'],
		},
		extend: {},
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				'.poly-hidden-top': {
					clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
				},
				'.poly-hidden-center': {
					clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
				},
				'.poly-hidden-right': {
					clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
				},
			})
		}),
	],
}
