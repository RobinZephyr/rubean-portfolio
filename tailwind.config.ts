import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      pixel: ['PixelFont', 'sans'],
    },
    extend: {
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
      },
      width: {
        '5%': '5%',
        '10%': '10%',
        '15%': '15%',
        '20%': '20%',
        '25%': '25%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '75%': '75%',
        '80%': '80%',
        '85%': '85%',
        '90%': '90%',
        '100%': '100%',
      },
      height: {
        '5%': '5%',
        '10%': '10%',
        '20%': '20%',
        '25%': '25%',
        '30%': '30%',
        '40%': '40%',
        '43%': '43%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '75%': '75%',
        '80%': '80%',
        '90%': '90%',
        '100%': '100%',
      },
      colors: {
        accent: {
          1: "hsl(var(--color-accent1) / <alpha-value>)",
          2: "hsl(var(--color-accent2) / <alpha-value>)",
        },
        bkg: "hsl(var(--color-bkg) / <alpha-value>)",
        border: "hsl(var(--color-border) / <alpha-value>)",
        content: "hsl(var(--color-content) / <alpha-value>)",

        text: "hsl(var(--color-text) / <alpha-value>)",
        textHover: "hsl(var(--color-textHover) / <alpha-value>)",

        toggle: "hsl(var(--color-toggle) / <alpha-value>)",
        toggleHover: "hsl(var(--color-toggleHover) / <alpha-value>)",

        titleBorder:"hsl(var(--color-titleBorder) / <alpha-value>)",

        avatarSpotlight: 'var(--color-avatarSpotlight)',

        namePlate: "hsl(var(--color-namePlate) / <alpha-value>)",
        namePlateText: "hsl(var(--color-namePlateText) / <alpha-value>)",

        textbox: "hsl(var(--color-textbox) / <alpha-value>)",
        
        downloadButton: "hsl(var(--color-downloadButton) / <alpha-value>)",
        
        
        darkPink:'#C8A7A3',
        darkBrown:'#222222',
      },
      screens: {
        xs: '320px',
        sm: '376px',
        md: '768px',
        lg: '992px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};

export default config;
