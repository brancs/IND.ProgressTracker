import type { Config } from 'tailwindcss';
import tailwindCssAnimate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: [],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {},
    },
  },
  plugins: [tailwindCssAnimate],
} satisfies Config;
