/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx,scss,css,module.scss,module.css}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-montserrat)', ...fontFamily.sans]
			}
		},
		fontSize: {
			16: '1.6rem'
		}
	},
	plugins: []
}
