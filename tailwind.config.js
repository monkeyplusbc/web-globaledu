const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.{html,vue,eta,ts}',
    './pages/**/*.{ts,js}',
    './client/**/*.{vue,ts}',
    './content/**/*.{json,md}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    container: {
      center: true,
      padding: '13px',
      screens: {
        xl: '1356px',
      },
    },
    extend: {
      fontFamily: {
        // sans: ['Fuente por defecto', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      screens: {

      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.black'),
            'max-width': '100%',
            'font-size': '1.25rem',
            'line-height': '1.4rem',
          },
        },
      }),
      colors: {
        'primary': '#eda80b',
        'secundary': '#1a1a35',
        'gray-100': 'rgba(237, 168, 11, 0.4)',
        'gray-200': '#aab0bc',
        'gray-300': '#fefefe',
        'gray-400': '#edf2fc',
        'gray-500': '#cacaca',
        'important': '#e2626b',
        'blue-100': '#1a1a35',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),
    function ({ addUtilities, variants }) {
      const fonts = {
        // Font Face
        // '@font-face': [
        //   {
        //     'font-family': '',
        //     'font-style': '',
        //     'font-weight': '',
        //     'src': 'url()',
        //   },
        // ],
      };
      addUtilities(fonts, variants('fontFamily'));
    },
  ],
};
