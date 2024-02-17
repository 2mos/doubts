/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    extend: {
      typography: ({ theme }) => ({
        "neutral-dark": {
          css: {
            "--tw-prose-body": theme("colors.neutral.100"),
            "--tw-prose-headings": theme("colors.white"),
            "--tw-prose-pre-bg": theme("colors.neutral.800"),
            backgroundColor: theme("colors.neutral.900"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
