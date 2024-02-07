import plugin from 'tailwindcss/plugin';
import flattenColorPalette from 'tailwindcss/src/util/flattenColorPalette.js';
import toColorValue from 'tailwindcss/src/util/toColorValue';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        default: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#0C0C15',
        secondary: '#0B0F17',
        javascript: '#F7E025',
        reactjs: '#94C7D8',
        tailwindcss: '#38BDF8',
        supabase: '#33CE8D',
      },
      backgroundImage: theme => ({
        'radial-gradient': 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
      })
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, e, config, theme }) {
      const textBorderSize = `--tw${config('prefix')}-text-border-size`;

      matchUtilities(
        {
          'text-border': (value) => ({
            'text-shadow': `0 0 var(${textBorderSize},1px) ${toColorValue(
              value,
            )}`,
          }),
        },
        {
          values: (({ DEFAULT: _, ...colors }) => colors)(
            flattenColorPalette(theme('borderColor')),
          ),
          type: 'color',
        },
      );

      matchUtilities(
        {
          'text-border-size': (value) => ({
            [textBorderSize]: value,
          }),
        },
        { values: theme('borderWidth') },
      );
    }),
  ],
};
