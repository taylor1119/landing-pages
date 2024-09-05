/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin'

export default {
	content: ['./src/**/*.{astro,html}'],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				'.poly-rect': {
					clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				},
				'.poly-hidden': {
					clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
				},
				'.poly-hidden-2': {
					clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
				},
			})
		}),
	],
}
