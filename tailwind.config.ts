import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			green: "#448441",
			red: "#cd2e2f",
			white: "#ffffff",
			black: "#333333",
			lightGray: "#e0dfe1",
			disabledGray: "#7e8085",
			darkGray: "#0E1218",
		},
		extend: {
			backgroundImage: {
				"hero-pattern": "url(../assets/bg-metin2.webp)",
			},
		},
	},
	plugins: [],
};

export default config;
