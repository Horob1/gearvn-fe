/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mb: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1480px',
      '3xl': '1600px',
      'print': {'raw': 'print'},
    },
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      keyframes: {
        scale: {
          '0%': {
            transform: 'scale(0)'
            },
          '100%': {
            transform: 'scale(1)',
          }
        },
        tiny: {
          '0%': {
            transform: 'scale(1)',
            },
          '100%': {
            transform: 'scale(0)'
          }
        },
        border: {
          '0%': {
            borderColor: 'white',
          },
          '100%': {
            borderColor: 'red',
          }
        },
        run: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(300%)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slide: {
          '0': { transform: 'translateX(0%)'},
          '100%': { transform: 'translateX(-0.6rem)'},
        },
        blinker: {
        '0%': {
            opacity: 0,
          },
        '100%': {
            opacity: 1,
        }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        slide:'slide 0.3s forwards',
        blinker: 'blinker 1s linear',
        running: 'run 3s forwards',
        scale:'scale 0.5s ease-in-out',
        border: 'border 0.5s forwards',
        tiny: 'tiny 0.5s ease-in-out',
      }
    },
  },
  variants: {},
  plugins: [daisyui,],
}