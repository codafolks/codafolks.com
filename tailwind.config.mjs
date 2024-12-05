/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		},
	},
	plugins: [
		function ({ addComponents, theme }) {
			addComponents({
				'.bg-grid': {
					"background-image": "url('/assets/grid-100x100.png')",
					"background-size": "100px 100px",
					"background-position-y": "-9px",
					"-webkit-mask-image": "linear-gradient(to bottom, transparent, 10%, white, 90%, transparent)",
					"mask-image": "linear-gradient(to bottom, transparent, 10%, white, 90%, transparent)"
				},
			});
		},
	],
}
