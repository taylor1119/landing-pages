/** @type {import(prettier).Config} */

export default {
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [{ files: '*.astro', options: { parser: 'astro' } }],

	trailingComma: 'es5',
	tabWidth: 4,
	semi: false,
	useTabs: true,
	singleQuote: true,
	jsxSingleQuote: true,
	endOfLine: 'lf',
	printWidth: 80,
}
