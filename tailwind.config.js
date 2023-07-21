/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				footer: "160px auto 200px",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"img-gaming": "url('/gamer.jpeg')",
				"img-coding": "url('/coder.jpeg')",
				"img-travelling": "url('/traveller.jpeg')",
				"img-designing": "url('/designer.jpeg')",
			},
			colors: {
				"port-bg-base": "#cb8c8f",
				"port-yellow-dark": "#ea9a38",
				"port-yellow-light": "#fee3ce",
				"port-yellow-ultra-light": "#fff6ee",
				"port-yellow-ultra-dark": "#6d3035",
				"port-pink-base": "#f67473",
				"port-pink-dark": "#8a5453",
				"port-grey": "#070707",
			},
			fontSize: {
				clamp: "clamp(1rem, 4vw, 2rem)",
			},
			animation: {
				"spin-slow": "spin 10s linear infinite",
				"repeat-itself": "marquee 10s linear infinite",
				"fade-in": "fadeIn 0.2s linear",
				"fade-out": "fadeOut 0.2s linear",
				"in-from-bottom": "inFromBottom 0.5s cubic-bezier(0, 0, 0.58, 1.0)",
				"in-from-bottom-quick":
					"inFromBottomQuick 0.3s cubic-bezier(0, 0, 0.58, 1.0)",
				"in-from-right": "inFromRight 0.5s cubic-bezier(0, 0, 0.58, 1.0)",
			},
			fontFamily: {
				notosans: ["Noto Sans"],
				special: ["Special"],
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translate(0, 0)" },
					"100%": { transform: "translate(-100%, 0)" },
				},
				fadeOut: {
					"0%": { opacity: 1 },
					"100%": { opacity: 0 },
				},
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				inFromBottom: {
					"0%": { transform: "translateY(30px)", opacity: 0 },
					"100%": { transform: "translateY(0)", opacity: 1 },
				},
				inFromBottomQuick: {
					"0%": { transform: "translateY(10px)", opacity: 0 },
					"100%": { transform: "translateY(0)", opacity: 1 },
				},
				inFromRight: {
					"0%": { transform: "translateX(100px)", opacity: 0 },
					"100%": { transform: "translateX(0)", opacity: 1 },
				},
			},
			boxShadow: {
				"img-shadow": "0 0 8px 8px #fee3ce inset",
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("./src/app/plugins/animationDelay"),
		require("./src/app/plugins/animationFillMode"),
	],
};
