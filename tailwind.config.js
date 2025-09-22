/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // if using src folder
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',       // Deep Navy Blue
        secondary: '#14B8A6',     // Vibrant Teal
        accent: '#84CC16',        // Bright Lime Green
        background: '#F1F5F9',    // Light Gray
        textPrimary: '#334155',   // Dark Gray
        textSecondary: '#64748B', // Medium Gray
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        }, scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },

      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        slideInLeft: 'slideInLeft 0.6s ease-out forwards',
        scroll: 'scroll 20s linear infinite',
      },
    },
  },
  plugins: [],
};
