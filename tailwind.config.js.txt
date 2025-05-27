import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        mono: ['JetBrains Mono', 'monospace']
      },
      animation: {
        'scan': 'scan 2s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'glitch': 'glitch 1s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        scan: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-2px, 1px)' },
          '66%': { transform: 'translate(2px, -1px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",
          small: "0.875rem",
          medium: "0.9375rem",
          large: "1.125rem",
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "0px", 
          medium: "0px", 
          large: "0px", 
        },
        borderWidth: {
          small: "2px", 
          medium: "2px", 
          large: "4px", 
        },
      },
      themes: {
        dark: {
          colors: {
            background: {
              DEFAULT: "#0a0a0a"
            },
            content1: {
              DEFAULT: "#121212",
              foreground: "#00ff00"
            },
            content2: {
              DEFAULT: "#1a1a1a",
              foreground: "#00ff00"
            },
            content3: {
              DEFAULT: "#232323",
              foreground: "#00ff00"
            },
            content4: {
              DEFAULT: "#2c2c2c",
              foreground: "#00ff00"
            },
            divider: {
              DEFAULT: "#333333"
            },
            focus: {
              DEFAULT: "#00ff00"
            },
            foreground: {
              DEFAULT: "#00ff00"
            },
            primary: {
              50: "#001000",
              100: "#002000",
              200: "#003000",
              300: "#004000",
              400: "#005000",
              500: "#00ff00",
              600: "#33ff33",
              700: "#66ff66",
              800: "#99ff99",
              900: "#ccffcc",
              DEFAULT: "#00ff00",
              foreground: "#000000"
            }
          }
        }
      }
    })
  ]
}
