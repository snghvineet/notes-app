/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				backdrop: "url('/bg.jpg')",
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			const newUtilities = {
				'.horizontal-tb': {
					writingMode: 'horizontal-tb',
				},
				'.vertical-rl': {
					writingMode: 'vertical-rl',
				},
				'.vertical-lr': {
					writingMode: 'vertical-lr',
				},
			};
			addUtilities(newUtilities);
		}),
		plugin(function ({ addUtilities }) {
			addUtilities(
				{
					'.scrollbar-hide': {
						/* IE and Edge */
						'-ms-overflow-style': 'none',

						/* Firefox */
						'scrollbar-width': 'none',

						/* Safari and Chrome */
						'&::-webkit-scrollbar': {
							display: 'none',
						},
					},

					'.scrollbar-default': {
						/* IE and Edge */
						'-ms-overflow-style': 'auto',

						/* Firefox */
						'scrollbar-width': 'auto',

						/* Safari and Chrome */
						'&::-webkit-scrollbar': {
							display: 'block',
						},
					},
				},
				['responsive']
			);
		}),
	],
};
