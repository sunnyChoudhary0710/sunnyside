import plugin from "tailwindcss/plugin";

const animationDelay = plugin(
	({ matchUtilities, theme }) => {
		matchUtilities(
			{
				"animation-delay": (value) => {
					return {
						animationDelay: value+'ms',
					};
				},
			},
			{
				values: theme("animationDelay"),
			}
		);
	},
	{
		theme: {
			animationDelay: {
				100: "100",
				200: "200",
				300: "300",
				400: "400",
				500: "500",
				600: "600",
				700: "700",
				800: "800",
				900: "900",
				1000: "1000",
				1100: "1100",
				1200: "1200",
			},
		},
	}
);

module.exports = animationDelay;
