/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				accent: "var(--accent)",
				muted: "var(--muted)",
				border: "var(--border)",
				input: "var(--input)",
			},
			fontFamily: {
				Inter: "Inter, sans-serif",
			},
		},
	},
	plugins: [],
}
