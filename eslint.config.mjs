import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import astro from 'eslint-plugin-astro'

export default [
	js.configs.recommended,
	...astro.configs.recommended,
	...astro.configs['jsx-a11y-recommended'],
	prettier,
	{ ignores: ['dist'] },
]
