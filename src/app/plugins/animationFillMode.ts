import plugin from "tailwindcss/plugin";

const animationFillMode = plugin(
	({ matchUtilities, theme }) => {
		matchUtilities(
			{
				"animation-fill-mode": (value) => {
					return {
						animationFillMode: value,
					};
				},
			},
			{
				values: theme("animationFillMode"),
			}
		);
	},
	{
		theme: {
			animationFillMode: {
				backwards: "backwards",
			},
		},
	}
);

module.exports = animationFillMode;
