import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        italiana: 'var(--font-italiana)',
        garamond: 'var(--font-garamond)',
      },
      colors: {
        primary: '#999999',
        secondary: '#FAFAFA',
        rangoon: '#1A1A1A',
        ironside: '#666666',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(172px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(144px)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
      },
    },
  },
  plugins: [],
}
export default config
