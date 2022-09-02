/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./app.vue',
		'./component/**/*.{vue,js,ts,jsx,tsx}',
		'./layout/**/*.{vue,js,ts,jsx,tsx}',
		'./utils/**/*.{vue,js,ts,jsx,tsx}',
		'./views/**/*.{vue,js,ts,jsx,tsx}'
	],
	theme: {
		extend: {}
	},
	plugins: [
		({ addBase }) => {
			addBase({
				'.el-button': {
					'background-color': 'var(--el-button-bg-color,var(--el-color-white))'
				}
			})
		}
	]
}
