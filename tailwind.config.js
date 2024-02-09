/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    extend: {
      typography: ({ theme }) => ({
        'stone-dark': {
          css: {
            '--tw-prose-body': theme('colors.stone.100'),
            '--tw-prose-headings': theme('colors.white'), 
            '--tw-prose-pre-bg': theme('colors.stone.800'),
            backgroundColor: theme('colors.stone.900'), 
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

